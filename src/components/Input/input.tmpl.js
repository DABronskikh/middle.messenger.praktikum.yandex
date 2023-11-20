export const inputTemplate = `
<div class="input-group {{class}}">
  <input 
    class="input-group__input" 
    type="{{type}}" 
    name="{{name}}" 
    placeholder="{{label}}"
    {{#if required}}required{{/if}}
  >
  <label class="input-group__label">{{label}}</label>
  <div class="input-group__invalid-feedback">{{errorMsg}}</div>
</div>
`;
