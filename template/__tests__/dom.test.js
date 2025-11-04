// __tests__/dom.test.js
/**
 * @jest-environment jsdom
 */
import { getByPlaceholderText, fireEvent, getByText, queryByText } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { attachListeners } from "../script_bonus.js";

const htmlTemplate = `
  <div>
    <input id="inputText" type="text" placeholder="Escribe un texto...">
    <div id="buttons" class="buttons hidden">
      <button id="copyBtn" class="secondary"><i class="fa-solid fa-clipboard"></i> Copy</button>
    </div>
    <div id="output" class="output"></div>
  </div>
`;

describe("DOM integration (attachListeners)", () => {
  beforeEach(() => {
    document.body.innerHTML = htmlTemplate;
    // attachListeners will read from document by default if no root passed
    attachListeners({ root: document });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("botón aparece sólo si > 3 caracteres y output se actualiza", async () => {
    const input = document.getElementById("inputText");
    const buttons = document.getElementById("buttons");
    const output = document.getElementById("output");

    // initially hidden
    expect(buttons.classList.contains("hidden")).toBe(true);
    expect(output.textContent).toBe("");

    // type 3 chars -> still hidden
    await userEvent.type(input, "abc");
    // allow event loop to run timers (we used setTimeouts)
    await new Promise((r => setTimeout(r, 250)));
    expect(buttons.classList.contains("hidden")).toBe(true);
    expect(output.textContent).toBe("");

    // type one more char -> >3
    await userEvent.type(input, "d");
    await new Promise((r => setTimeout(r, 250)));
    expect(buttons.classList.contains("hidden")).toBe(false);
    expect(output.classList.contains("visible")).toBe(true);
    expect(output.textContent).toBe("dcba"); // "abcd" reversed
  });

  test("borrar para <= 3 oculta y limpia output", async () => {
    const input = document.getElementById("inputText");
    const buttons = document.getElementById("buttons");
    const output = document.getElementById("output");

    await userEvent.type(input, "hello");
    await new Promise((r => setTimeout(r, 250)));
    expect(buttons.classList.contains("hidden")).toBe(false);
    expect(output.textContent).toBe("olleh");

    // remove characters to make length 3
    input.value = "hey";
    fireEvent.input(input);
    await new Promise((r => setTimeout(r, 300)));

    expect(buttons.classList.contains("hidden")).toBe(true);
    expect(output.textContent).toBe("");
    expect(output.classList.contains("visible")).toBe(false);
  });

  test("copy button usa navigator.clipboard.writeText", async () => {
    const input = document.getElementById("inputText");
    const copyBtn = document.getElementById("copyBtn");
    const output = document.getElementById("output");

    // mock clipboard
    const writeMock = jest.fn().mockResolvedValue();
    Object.assign(navigator, {
      clipboard: {
        writeText: writeMock
      }
    });

    await userEvent.type(input, "node");
    await new Promise((r => setTimeout(r, 250)));
    expect(output.textContent).toBe("edon");

    // click copy
    await userEvent.click(copyBtn);

    // writeText should have been called with reversed text
    expect(writeMock).toHaveBeenCalledWith("edon");
  });
});
