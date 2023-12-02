export const loginTemplate = `
<main class="login-layout">
  <form class="card login-form" action="#">
    <h2 class="card__title">Вход</h2>
    <div class="card__body">
      {{#each inputs}}
        {{{this}}}
      {{/each}}
    </div>
    <div class="card__action login-form__action">
      {{{button}}}  
      {{{link}}}
    </div>
  </form>
</main>
`;
