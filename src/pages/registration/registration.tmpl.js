export const registrationTemplate = `
<main class="registr-layout">
  <form class="card registr-form" action="#">
  <h2 class="card__title">Регистрация</h2>
  <div class="card__body">
    {{#each inputs}}
      {{{this}}}
    {{/each}}
  </div>
  <div class="card__action registr-form__action">
    {{{button}}}  
    {{{link}}}
  </div>
  </form>
</main>
`;
