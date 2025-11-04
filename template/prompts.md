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


## Prompt CI/CD

> Genial!!! Ahora, estaría guay profundizar en CI/CD. ¿Podrías desarrollar test unitarios?

¡Excelente paso! 🔥
Agregar tests unitarios a este pequeño proyecto es una gran idea si estás pensando en montar un pipeline de CI/CD, por ejemplo en GitHub Actions, GitLab CI o Jenkins.

Como el proyecto es JavaScript puro (sin frameworks), podemos usar una herramienta ligera y estándar como Jest o Vitest para hacer los tests.
Voy a usar Jest, ya que es muy maduro y fácil de integrar.

🧩 Estructura recomendada del proyecto
reverse-string/
├── index_bonus.html
├── script_bonus.js
├── package.json
├── jest.config.js
└── __tests__/
    └── reverseString.test.js
    
    
⚙️ 1. Inicializa el proyecto

Ejecuta en la terminal dentro de tu carpeta:

npm init -y
npm install --save-dev jest

⚙️ 2. Configuración de Jest (jest.config.js)
export default {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/__tests__'],
};


Esto indica a Jest que use un entorno tipo navegador (jsdom) y que los tests estarán en la carpeta __tests__/.

🧪 3. Refactor del código para testear

Crea una pequeña exportación de la función reverseString dentro de script_bonus.js (sin romper su funcionamiento actual):    

🧩 4. Crea los tests (__tests__/reverseString.test.js)

⚙️ 5. Añade script de test a package.json

✅ 6. Ejecuta los tests (npm test)


Verás algo así:

PASS  __tests__/reverseString.test.js
  reverseString
    ✓ invierte una cadena simple (3 ms)
    ✓ maneja espacios correctamente
    ✓ maneja números y símbolos
    ✓ devuelve vacío si se pasa cadena vacía
    ✓ funciona con caracteres unicode

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Coverage:    100%

🚀 7. Bonus CI/CD (GitHub Actions)

Crea .github/workflows/test.yml:

🧠 Resultado:

- Tienes tests unitarios en Jest.
- Un flujo de CI/CD básico que ejecuta los tests automáticamente en cada push o pull request.
- Código preparado para crecer y testear más funciones (por ejemplo, validaciones, animaciones o manipulación del DOM con mocks).

¿Quieres que además agregue tests unitarios para las interacciones del DOM (simulando escribir texto y verificar que aparece el texto invertido)?
Podemos hacerlo fácilmente con @testing-library/dom y Jest.

> Sí, por favor, cuanto más completo mejor

Perfecto — vamos a añadir tests más completos, que cubren:

- La función pura reverseString (unit tests).
- Comportamiento del DOM: actualización en tiempo real, aparición/desaparición del botón, animación, y acción de copiar (integration tests con jsdom).
- Mock del portapapeles (navigator.clipboard).
- Configuración de Jest y uso de @testing-library/dom + @testing-library/user-event para simular interacción de usuario.

Te doy los cambios necesarios, instrucciones de instalación y los ficheros de test listos para ejecutar.

### 1) Refactor: script_bonus.js

Modifiqué el fichero para exportar dos cosas:

reverseString(str) — ya existente y testable.

attachListeners({root = document}) — función que conecta el DOM; puedes llamarla desde tests pasando un root con el HTML de prueba, o en el navegador el DOMContentLoaded la invocará por defecto.

### 2) Unit tests (función pura)

__tests__/reverseString.test.js

### 3) Tests de integración DOM (jsdom)

__tests__/dom.test.js — cubre:

la actualización en tiempo real,

la aparición/desaparición del botón buttons,

el contenido del output y la clase visible,

la acción de copiar usando un mock de navigator.clipboard.

##
Nota: en tests usamos setTimeout/promises para esperar las pequeñas pausas definidas en attachListeners (150–200 ms). En proyectos grandes puedes usar jest.useFakeTimers() y avanzar timers en lugar de esperar reales.

### 4) Dependencias y package.json

Asegúrate de tener type: "module" (para ESM). Ejemplo package.json:

Instalación (ejecuta en tu terminal):

npm install --save-dev jest @testing-library/dom @testing-library/user-event


### 5) Configuración Jest (opcional si ya la tenías)

Fichero jest.config.js (ESM):

### Resumen rápido

- He refactorizado script_bonus.js para exponer reverseString y attachListeners.
- Añadí tests unitarios y tests del DOM (simulando typing y click).
- Mock del portapapeles incluido en tests.
- Instrucciones para instalar dependencias, ejecutar tests y usar en CI.