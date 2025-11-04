document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("inputText");
  const copyBtn = document.getElementById("copyBtn");
  const buttons = document.getElementById("buttons");
  const output = document.getElementById("output");

  // Función para invertir la cadena
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // Actualiza el resultado en tiempo real con animación
  input.addEventListener("input", () => {
    const text = input.value.trim();

    if (text.length > 3) {
      buttons.classList.remove("hidden");
      const reversed = reverseString(text);
      if (output.textContent !== reversed) {
        output.classList.remove("visible");
        setTimeout(() => {
          output.textContent = reversed;
          output.classList.add("visible");
        }, 150); // pequeña pausa para suavizar el efecto
      }
    } else {
      buttons.classList.add("hidden");
      output.classList.remove("visible");
      setTimeout(() => (output.textContent = ""), 200);
    }
  });

  // Copiar al portapapeles
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
