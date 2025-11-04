// __tests__/reverseString.test.js
import { reverseString } from "../script_bonus.js";

describe("reverseString (unit)", () => {
  test("invierte una cadena simple", () => {
    expect(reverseString("AI4Devs")).toBe("sveD4IA");
  });

  test("maneja espacios correctamente", () => {
    expect(reverseString("Hola mundo")).toBe("odnum aloH");
  });

  test("maneja números y símbolos", () => {
    expect(reverseString("123!@#")).toBe("#@!321");
  });

  test("devuelve vacío si se pasa cadena vacía", () => {
    expect(reverseString("")).toBe("");
  });

  test("funciona con caracteres unicode", () => {
    expect(reverseString("mañana")).toBe("anañam");
  });
});
