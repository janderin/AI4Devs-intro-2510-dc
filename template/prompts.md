# Reverse String (Chat GPT)
## Prompt Inicial

> Como experto programador FrontEnd, sin utilizar framework alguno, necesito una página (index.html) que apoyada en un fichero auxiliar de librerías (script.js) desarrolle la funcionalidad de reverse string. Ejemplo: si introduzco AI4Devs devuelve sveD4IA. Puedes inspirarte en la siguente imagen para ver cómo sería la página.


Perfecto ✅ Aquí tienes un ejemplo completo de cómo implementar la funcionalidad Reverse String sin usar ningún framework, separando el código en dos archivos:

- index.html
- script.js

💡 Características:

- Totalmente nativo, sin frameworks.
- Diseño simple y moderno.
- Botón Reverse para invertir texto.
- Botón Copy para copiar el resultado.
- Indicador visual de éxito al copiar.


## Prompt Bonus Track

> Genial!! Ahora, como bonus track, necesito mejorar la funcionalidad. En concreto: El botón copiar debe aparecer cuando haya texto suficiente, más de 3 letras Que de la cadena en tiempo real, que no dependa del botón.


Perfecto 😎 — aquí tienes la versión mejorada, con las dos nuevas características:

✅ El botón “Copiar” solo aparece si el texto tiene más de 3 caracteres.
✅ La inversión de texto se realiza en tiempo real mientras el usuario escribe (ya no depende del botón).

🎯 Comportamiento:

Cuando el usuario escribe más de 3 caracteres, aparece el botón Copy.

El texto invertido se actualiza en tiempo real justo debajo del campo de entrada.

Si borra y queda con 3 o menos caracteres, el botón desaparece y se limpia la salida.

Todo es vanilla JS + HTML + CSS, sin frameworks ni dependencias.

¿Quieres que además añada una animación suave de aparición/desaparición del texto invertido (fade-in / fade-out)? Puedo integrarlo con CSS en 3 líneas.

> Sí, por favor, añade esa animación. Además, en lugar de generar un fichero index.html y script.js, para no machacar, genera index_bonus.html y script_bonus.js

Perfecto 💪 Aquí tienes la versión final mejorada con:

✨ Animación fade-in / fade-out suave al mostrar el texto invertido.

✨ Archivos separados: index_bonus.html y script_bonus.js.

✨ Sin frameworks, completamente nativo.

## 
💫 Qué mejora esta versión:

✅ Texto invertido en tiempo real mientras escribes.

✅ El área de resultado aparece/desaparece con un fade suave.

✅ Botón Copy visible solo cuando hay texto suficiente (>3 caracteres).

✅ Diseño limpio, moderno y sin dependencias externas.