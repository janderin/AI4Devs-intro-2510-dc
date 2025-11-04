document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  const reverseBtn = document.getElementById("reverseBtn");
  const copyBtn = document.getElementById("copyBtn");
  const output = document.getElementById("output");

  // Función para invertir la cadena
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // Acción del botón Reverse
  reverseBtn.addEventListener("click", () => {
    const text = input.value.trim();
    output.textContent = text ? reverseString(text) : "";
  });

  // Acción del botón Copy
  copyBtn.addEventListener("click", async () => {
    if (!output.textContent) return;
    try {
      await navigator.clipboard.writeText(output.textContent);
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-solid fa-clipboard"></i> Copy';
      }, 1500);
    } catch (err) {
      alert("No se pudo copiar al portapapeles.");
    }
  });
});
