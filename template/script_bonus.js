// script_bonus.js

// Función para invertir la cadena (exportable para tests)
export function reverseString(str) {
  return str.split("").reverse().join("");
}

// Conecta la lógica al DOM. Permite recibir un "root" para tests.
export function attachListeners({ root = document } = {}) {
  const input = root.getElementById("inputText");
  const copyBtn = root.getElementById("copyBtn");
  const buttons = root.getElementById("buttons");
  const output = root.getElementById("output");

  if (!input) return; // nothing to attach to (safe guard for tests)

  // Actualiza el resultado en tiempo real con animación
  const onInput = () => {
    const text = input.value.trim();

    if (text.length > 3) {
      buttons.classList.remove("hidden");
      const reversed = reverseString(text);
      if (output.textContent !== reversed) {
        output.classList.remove("visible");
        // small pause to produce fade-out then fade-in
        setTimeout(() => {
          output.textContent = reversed;
          output.classList.add("visible");
        }, 150);
      }
    } else {
      buttons.classList.add("hidden");
      output.classList.remove("visible");
      setTimeout(() => (output.textContent = ""), 200);
    }
  };

  input.addEventListener("input", onInput);

  // Copiar al portapapeles
  copyBtn.addEventListener("click", async () => {
    if (!output.textContent) return;
    try {
      await navigator.clipboard.writeText(output.textContent);
      const prev = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = prev;
      }, 1500);
    } catch (err) {
      // fallback simple alert (kept for browser)
      alert("No se pudo copiar al portapapeles.");
    }
  });
}

// Auto-init en navegador cuando el documento esté listo
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => attachListeners());
  } else {
    attachListeners();
  }
}
