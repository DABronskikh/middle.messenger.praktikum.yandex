export const profileTemplate = `

<div class="profile-layout">
  <section>
    <nav class="profile__navbar">
      <ul class="profile__navbar-list">
        <li class="profile__navbar-item">
          <a href="/" class="profile__navbar-link">
            <span class="material-symbols-outlined">arrow_back</span>
          </a>
        </li>
      </ul> 
    </nav>
  </section>

<main>
  <div class="profile">
      
    <div class="profile__avatar">
      <div class="profile__avatar-wrapper">
        <img src="" alt="avatar" class="profile__avatar-img">
      </div>
    </div>

    <ul class="profile__list">
      {{#each profileList}}
        <li class="profile__list-item">
          <div class="profile__list-title"><span>{{title}}</span></div>
          <div class="profile__list-value"><span>{{value}}</span></div>
        </li>
      {{/each}}
    </ul>

    <ul class="profile__list">
      {{#each links}}
        <li class="profile__list-item">
          {{{this}}}
        </li>
      {{/each}}
    </ul>
  </div>
</main>

</div>
`;
