'use client';

import Code from 'Com/f-code';

export default function PageClient() {
    return <Code>{`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Syntax highlighting test">
  <title>Shiki Syntax Test</title>

  <style>
    /* CSS comments, custom properties, and values */
    :root {
      --primary: #6366f1;
      --surface: rgb(30, 30, 40);
      --spacing: 1.5rem;
      --radius: 12px;
    }

    /* Element, class, ID, attribute, and combinator selectors */
    body > main.content ~ footer,
    input[type="text"]:not(:disabled) {
      color: var(--primary);
      padding: var(--spacing);
      border: 1px solid hsl(240 10% 50%);
      box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2);
    }

    /* Nesting, pseudo-classes, and pseudo-elements */
    .card {
      background: linear-gradient(135deg, #222, #444);
      border-radius: var(--radius);
      transition: transform 200ms ease;

      &:hover,
      &:focus-within {
        transform: translateY(-4px);
      }

      & > h2::before {
        content: "→";
        color: gold;
      }

      & + .card {
        margin-top: 1rem;
      }
    }

    /* Functions, calculations, and important declarations */
    #app {
      width: clamp(200px, calc(100% - 2rem), 800px);
      opacity: 0.95 !important;
    }

    /* At-rules and keyframes */
    @media (min-width: 768px) {
      .layout {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 2rem;
      }
    }

    @supports (display: grid) {
      .layout {
        display: grid;
      }
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  </style>
</head>

<body>
  <!-- Semantic HTML, attributes, entities, and nested elements -->
  <header id="top" class="site-header" data-theme="dark">
    <nav aria-label="Main navigation">
      <a href="#app" title="Go to application">Home &amp; About</a>
    </nav>
  </header>

  <main id="app" class="content layout">
    <section class="card" aria-labelledby="heading">
      <h1 id="heading">Syntax <strong>Highlighting</strong></h1>
      <p>Test <em>inline elements</em>, <code>code</code>, and <mark>marked text</mark>.</p>

      <ul>
        <li>First item</li>
        <li>Second item</li>
      </ul>

      <img src="image.png" alt="Example image" width="120" loading="lazy">

      <form action="/submit" method="post">
        <label for="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Enter a name"
          required
        >

        <select name="role" disabled>
          <option value="admin">Admin</option>
          <option value="user" selected>User</option>
        </select>

        <button type="submit" aria-pressed="false">Submit</button>
      </form>

      <table>
        <thead>
          <tr><th scope="col">Name</th><th scope="col">Value</th></tr>
        </thead>
        <tbody>
          <tr><td>Alpha</td><td>100</td></tr>
        </tbody>
      </table>
    </section>

    <aside class="card">
      <details open>
        <summary>More information</summary>
        <p>HTML entities: &lt; &gt; &quot; &apos; &copy; &mdash;</p>
      </details>
    </aside>
  </main>

  <footer>
    <small>&copy; 2026 Example</small>
  </footer>

  <script>
    // Comments, declarations, and primitive values
    var legacy = "old";
    let count = 100;
    let decimal = 3.14;
    const enabled = true;
    const empty = null;
    const missing = undefined;
    const large = 123n;
    const symbol = Symbol("id");

    // Strings, template literals, and escape sequences
    const message = \`Count: ${count}\nEnabled: ${enabled}\`;
    const escaped = "Line one\nLine two\tTabbed";

    // Operators, comparisons, logical operators, and nullish coalescing
    const result = count + decimal * 2;
    const comparison = count >= 100 && enabled !== false;
    const fallback = empty ?? "default";
    const conditional = comparison ? "yes" : "no";
    count += 1;
    count **= 2;

    // Arrays, objects, destructuring, and spread
    const items = [1, 2, 3, ...[4, 5]];
    const user = {
      id: 1,
      name: "Alex",
      active: true,
      tags: ["admin", "editor"],
      greet() {
        return \`Hello, ${this.name}\`;
      }
    };

    const [first, second, ...remaining] = items;
    const { name, active: isActive } = user;
    const updatedUser = { ...user, name: "Sam" };

    // Functions, arrow functions, default and rest parameters
    function multiply(a, b = 2) {
      return a * b;
    }

    const sum = (...numbers) =>
      numbers.reduce((total, number) => total + number, 0);

    // Control flow and loops
    if (isActive) {
      for (const item of items) {
        console.log(item);
      }
    } else {
      console.warn("Inactive");
    }

    for (let i = 0; i < 3; i++) {
      if (i === 1) continue;
      console.log(i);
    }

    switch (first) {
      case 1:
        console.log("One");
        break;
      default:
        console.log("Other");
    }

    // Classes, inheritance, getters, and static methods
    class Animal {
      constructor(name) {
        this.name = name;
      }

      get label() {
        return this.name.toUpperCase();
      }

      speak() {
        return \`${this.name} makes a sound\`;
      }

      static create(name) {
        return new Animal(name);
      }
    }

    class Dog extends Animal {
      speak() {
        return \`\${super.speak()}!\`;
      }
    }

    const dog = new Dog("Rex");

    // Regular expressions and built-in objects
    const pattern = /^[a-z]+\d{2,4}$/i;
    const matched = pattern.test("test123");
    const date = new Date();
    const json = JSON.stringify({ matched, date });

    // Promises, async/await, try/catch, and throw
    async function loadData(url) {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(\`HTTP error: ${response.status}\`);
        }

        return await response.json();
      } catch (error) {
        console.error(error.message);
        throw error;
      } finally {
        console.log("Request completed");
      }
    }

    Promise.resolve("done")
      .then(value => console.log(value))
      .catch(error => console.error(error));

    // DOM APIs, optional chaining, and event listeners
    const app = document.querySelector("#app");
    const button = document.querySelector("button");

    app?.classList.add("ready");

    button?.addEventListener("click", event => {
      event.preventDefault();
      event.currentTarget.textContent = "Clicked";
    });

    // Map, Set, and iteration
    const unique = new Set([1, 2, 2, 3]);
    const lookup = new Map([["name", "Alex"]]);

    // Debugging methods
    console.log(message, result, sum(1, 2, 3));
    console.table(items);
    console.warn("Warning example");
    console.error("Error example");
  </script>
</body>
</html>
    `}</Code>
}