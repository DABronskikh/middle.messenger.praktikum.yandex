export const indexTemplate = `
<main class="index">
    <h1>Index page</h1>
    <ul>
        {{#each links}}
            <li><a href="{{to}}">{{text}}</a></li>
        {{/each}}
    </ul>
</main>
`;
