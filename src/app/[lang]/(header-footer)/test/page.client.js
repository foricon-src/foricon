'use client';

import Code from 'Com/f-code';
import { UserContext } from 'Com/user';
import { useContext } from 'react';

export default function PageClient() {
    let { user } = useContext(UserContext);
    let { indent } = user?.doc.personalization || 0;
    return <Code>{`<!DOCTYPE html>
<html lang="en">
<head>
${' '.repeat(indent)}<meta charset="UTF-8">
${' '.repeat(indent)}<meta name="viewport" content="width=device-width, initial-scale=1.0">
${' '.repeat(indent)}<meta name="description" content="Syntax highlighting test">
${' '.repeat(indent)}<title>Shiki Syntax Test</title>

${' '.repeat(indent)}<style>
${' '.repeat(indent * 2)}/* CSS comments, custom properties, and values */
${' '.repeat(indent * 2)}:root {
${' '.repeat(indent * 3)}--primary: #6366f1;
${' '.repeat(indent * 3)}--surface: rgb(30, 30, 40);
${' '.repeat(indent * 3)}--spacing: 1.5rem;
${' '.repeat(indent * 3)}--radius: 12px;
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}/* Element, class, ID, attribute, and combinator selectors */
${' '.repeat(indent * 2)}body > main.content ~ footer,
${' '.repeat(indent * 2)}input[type="text"]:not(:disabled) {
${' '.repeat(indent * 3)}color: var(--primary);
${' '.repeat(indent * 3)}padding: var(--spacing);
${' '.repeat(indent * 3)}border: 1px solid hsl(240 10% 50%);
${' '.repeat(indent * 3)}box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2);
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}/* Nesting, pseudo-classes, and pseudo-elements */
${' '.repeat(indent * 2)}.card {
${' '.repeat(indent * 3)}background: linear-gradient(135deg, #222, #444);
${' '.repeat(indent * 3)}border-radius: var(--radius);
${' '.repeat(indent * 3)}transition: transform 200ms ease;

${' '.repeat(indent * 3)}&:hover,
${' '.repeat(indent * 3)}&:focus-within {
${' '.repeat(indent * 4)}transform: translateY(-4px);
${' '.repeat(indent * 3)}}

${' '.repeat(indent * 3)}& > h2::before {
${' '.repeat(indent * 4)}content: "→";
${' '.repeat(indent * 4)}color: gold;
${' '.repeat(indent * 3)}}

${' '.repeat(indent * 3)}& + .card {
${' '.repeat(indent * 4)}margin-top: 1rem;
${' '.repeat(indent * 3)}}
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}/* Functions, calculations, and important declarations */
${' '.repeat(indent * 2)}#app {
${' '.repeat(indent * 3)}width: clamp(200px, calc(100% - 2rem), 800px);
${' '.repeat(indent * 3)}opacity: 0.95 !important;
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}/* At-rules and keyframes */
${' '.repeat(indent * 2)}@media (min-width: 768px) {
${' '.repeat(indent * 3)}.layout {
${' '.repeat(indent * 4)}display: grid;
${' '.repeat(indent * 4)}grid-template-columns: repeat(2, minmax(0, 1fr));
${' '.repeat(indent * 4)}gap: 2rem;
${' '.repeat(indent * 3)}}
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}@supports (display: grid) {
${' '.repeat(indent * 3)}.layout {
${' '.repeat(indent * 4)}display: grid;
${' '.repeat(indent * 3)}}
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}@keyframes fade-in {
${' '.repeat(indent * 3)}from { opacity: 0; }
${' '.repeat(indent * 3)}to${' '.repeat(indent)} { opacity: 1; }
${' '.repeat(indent * 2)}}
${' '.repeat(indent)}</style>
</head>

<body>
${' '.repeat(indent)}<!-- Semantic HTML, attributes, entities, and nested elements -->
${' '.repeat(indent)}<header id="top" class="site-header" data-theme="dark">
${' '.repeat(indent * 2)}<nav aria-label="Main navigation">
${' '.repeat(indent * 3)}<a href="#app" title="Go to application">Home &amp; About</a>
${' '.repeat(indent * 2)}</nav>
${' '.repeat(indent)}</header>

${' '.repeat(indent)}<main id="app" class="content layout">
${' '.repeat(indent * 2)}<section class="card" aria-labelledby="heading">
${' '.repeat(indent * 3)}<h1 id="heading">Syntax <strong>Highlighting</strong></h1>
${' '.repeat(indent * 3)}<p>Test <em>inline elements</em>, <code>code</code>, and <mark>marked text</mark>.</p>

${' '.repeat(indent * 3)}<ul>
${' '.repeat(indent * 4)}<li>First item</li>
${' '.repeat(indent * 4)}<li>Second item</li>
${' '.repeat(indent * 3)}</ul>

${' '.repeat(indent * 3)}<img src="image.png" alt="Example image" width="120" loading="lazy">

${' '.repeat(indent * 3)}<form action="/submit" method="post">
${' '.repeat(indent * 4)}<label for="username">Username</label>
${' '.repeat(indent * 4)}<input
${' '.repeat(indent * 5)}id="username"
${' '.repeat(indent * 5)}name="username"
${' '.repeat(indent * 5)}type="text"
${' '.repeat(indent * 5)}placeholder="Enter a name"
${' '.repeat(indent * 5)}required
${' '.repeat(indent * 4)}>

${' '.repeat(indent * 4)}<select name="role" disabled>
${' '.repeat(indent * 5)}<option value="admin">Admin</option>
${' '.repeat(indent * 5)}<option value="user" selected>User</option>
${' '.repeat(indent * 4)}</select>

${' '.repeat(indent * 4)}<button type="submit" aria-pressed="false">Submit</button>
${' '.repeat(indent * 3)}</form>

${' '.repeat(indent * 3)}<table>
${' '.repeat(indent * 4)}<thead>
${' '.repeat(indent * 5)}<tr><th scope="col">Name</th><th scope="col">Value</th></tr>
${' '.repeat(indent * 4)}</thead>
${' '.repeat(indent * 4)}<tbody>
${' '.repeat(indent * 5)}<tr><td>Alpha</td><td>100</td></tr>
${' '.repeat(indent * 4)}</tbody>
${' '.repeat(indent * 3)}</table>
${' '.repeat(indent * 2)}</section>

${' '.repeat(indent * 2)}<aside class="card">
${' '.repeat(indent * 3)}<details open>
${' '.repeat(indent * 4)}<summary>More information</summary>
${' '.repeat(indent * 4)}<p>HTML entities: &lt; &gt; &quot; &apos; &copy; &mdash;</p>
${' '.repeat(indent * 3)}</details>
${' '.repeat(indent * 2)}</aside>
${' '.repeat(indent)}</main>

${' '.repeat(indent)}<footer>
${' '.repeat(indent * 2)}<small>&copy; 2026 Example</small>
${' '.repeat(indent)}</footer>

${' '.repeat(indent)}<script>
${' '.repeat(indent * 2)}// Comments, declarations, and primitive values
${' '.repeat(indent * 2)}var legacy = "old";
${' '.repeat(indent * 2)}let count = 100;
${' '.repeat(indent * 2)}let decimal = 3.14;
${' '.repeat(indent * 2)}const enabled = true;
${' '.repeat(indent * 2)}const empty = null;
${' '.repeat(indent * 2)}const missing = undefined;
${' '.repeat(indent * 2)}const large = 123n;
${' '.repeat(indent * 2)}const symbol = Symbol("id");

${' '.repeat(indent * 2)}// Strings, template literals, and escape sequences
${' '.repeat(indent * 2)}const message = \`Count: \${count}\nEnabled: \${enabled}\`;
${' '.repeat(indent * 2)}const escaped = "Line one\nLine two\tTabbed";

${' '.repeat(indent * 2)}// Operators, comparisons, logical operators, and nullish coalescing
${' '.repeat(indent * 2)}const result = count + decimal * 2;
${' '.repeat(indent * 2)}const comparison = count >= 100 && enabled !== false;
${' '.repeat(indent * 2)}const fallback = empty ?? "default";
${' '.repeat(indent * 2)}const conditional = comparison ? "yes" : "no";
${' '.repeat(indent * 2)}count += 1;
${' '.repeat(indent * 2)}count **= 2;

${' '.repeat(indent * 2)}// Arrays, objects, destructuring, and spread
${' '.repeat(indent * 2)}const items = [1, 2, 3, ...[4, 5]];
${' '.repeat(indent * 2)}const user = {
${' '.repeat(indent * 3)}id: 1,
${' '.repeat(indent * 3)}name: "Alex",
${' '.repeat(indent * 3)}active: true,
${' '.repeat(indent * 3)}tags: ["admin", "editor"],
${' '.repeat(indent * 3)}greet() {
${' '.repeat(indent * 4)}return \`Hello, \${this.name}\`;
${' '.repeat(indent * 3)}}
${' '.repeat(indent * 2)}};

${' '.repeat(indent * 2)}const [first, second, ...remaining] = items;
${' '.repeat(indent * 2)}const { name, active: isActive } = user;
${' '.repeat(indent * 2)}const updatedUser = { ...user, name: "Sam" };

${' '.repeat(indent * 2)}// Functions, arrow functions, default and rest parameters
${' '.repeat(indent * 2)}function multiply(a, b = 2) {
${' '.repeat(indent * 3)}return a * b;
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}const sum = (...numbers) =>
${' '.repeat(indent * 3)}numbers.reduce((total, number) => total + number, 0);

${' '.repeat(indent * 2)}// Control flow and loops
${' '.repeat(indent * 2)}if (isActive) {
${' '.repeat(indent * 3)}for (const item of items) {
${' '.repeat(indent * 4)}console.log(item);
${' '.repeat(indent * 3)}}
${' '.repeat(indent * 2)}} else {
${' '.repeat(indent * 3)}console.warn("Inactive");
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}for (let i = 0; i < 3; i++) {
${' '.repeat(indent * 3)}if (i === 1) continue;
${' '.repeat(indent * 3)}console.log(i);
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}switch (first) {
${' '.repeat(indent * 3)}case 1:
${' '.repeat(indent * 4)}console.log("One");
${' '.repeat(indent * 4)}break;
${' '.repeat(indent * 3)}default:
${' '.repeat(indent * 4)}console.log("Other");
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}// Classes, inheritance, getters, and static methods
${' '.repeat(indent * 2)}class Animal {
${' '.repeat(indent * 3)}constructor(name) {
${' '.repeat(indent * 4)}this.name = name;
${' '.repeat(indent * 3)}}

${' '.repeat(indent * 3)}get label() {
${' '.repeat(indent * 4)}return this.name.toUpperCase();
${' '.repeat(indent * 3)}}

${' '.repeat(indent * 3)}speak() {
${' '.repeat(indent * 4)}return \`\${this.name} makes a sound\`;
${' '.repeat(indent * 3)}}

${' '.repeat(indent * 3)}static create(name) {
${' '.repeat(indent * 4)}return new Animal(name);
${' '.repeat(indent * 3)}}
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}class Dog extends Animal {
${' '.repeat(indent * 3)}speak() {
${' '.repeat(indent * 4)}return \`\${super.speak()}!\`;
${' '.repeat(indent * 3)}}
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}const dog = new Dog("Rex");

${' '.repeat(indent * 2)}// Regular expressions and built-in objects
${' '.repeat(indent * 2)}const pattern = /^[a-z]+\d{2,4}$/i;
${' '.repeat(indent * 2)}const matched = pattern.test("test123");
${' '.repeat(indent * 2)}const date = new Date();
${' '.repeat(indent * 2)}const json = JSON.stringify({ matched, date });

${' '.repeat(indent * 2)}// Promises, async/await, try/catch, and throw
${' '.repeat(indent * 2)}async function loadData(url) {
${' '.repeat(indent * 3)}try {
${' '.repeat(indent * 4)}const response = await fetch(url);

${' '.repeat(indent * 4)}if (!response.ok) {
${' '.repeat(indent * 5)}throw new Error(\`HTTP error: \${response.status}\`);
${' '.repeat(indent * 4)}}

${' '.repeat(indent * 4)}return await response.json();
${' '.repeat(indent * 3)}} catch (error) {
${' '.repeat(indent * 4)}console.error(error.message);
${' '.repeat(indent * 4)}throw error;
${' '.repeat(indent * 3)}} finally {
${' '.repeat(indent * 4)}console.log("Request completed");
${' '.repeat(indent * 3)}}
${' '.repeat(indent * 2)}}

${' '.repeat(indent * 2)}Promise.resolve("done")
${' '.repeat(indent * 3)}.then(value => console.log(value))
${' '.repeat(indent * 3)}.catch(error => console.error(error));

${' '.repeat(indent * 2)}// DOM APIs, optional chaining, and event listeners
${' '.repeat(indent * 2)}const app = document.querySelector("#app");
${' '.repeat(indent * 2)}const button = document.querySelector("button");

${' '.repeat(indent * 2)}app?.classList.add("ready");

${' '.repeat(indent * 2)}button?.addEventListener("click", event => {
${' '.repeat(indent * 3)}event.preventDefault();
${' '.repeat(indent * 3)}event.currentTarget.textContent = "Clicked";
${' '.repeat(indent * 2)}});

${' '.repeat(indent * 2)}// Map, Set, and iteration
${' '.repeat(indent * 2)}const unique = new Set([1, 2, 2, 3]);
${' '.repeat(indent * 2)}const lookup = new Map([["name", "Alex"]]);

${' '.repeat(indent * 2)}// Debugging methods
${' '.repeat(indent * 2)}console.log(message, result, sum(1, 2, 3));
${' '.repeat(indent * 2)}console.table(items);
${' '.repeat(indent * 2)}console.warn("Warning example");
${' '.repeat(indent * 2)}console.error("Error example");
${' '.repeat(indent)}</script>
</body>
</html>`}</Code>
}