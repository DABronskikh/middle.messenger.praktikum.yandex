export const errorTemplate = `
<main class="error-layout">
  <div class="error-card">
    <h2 class="error-card__code">{{code}}</h2>
    <div class="error-card__description">
      <span>{{description}}</span>
    </div>
    <div class="error-card__action">
      {{{link}}}
    </div>
  </div>
</main>
`;
