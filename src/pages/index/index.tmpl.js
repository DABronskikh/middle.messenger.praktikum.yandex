export const indexTemplate = `
<main class="index">
    <h1>Index page</h1>
    <ul>
        {{#each links}}
            <li>{{{this}}}</li>
        {{/each}}
    </ul>
</main>
`;
