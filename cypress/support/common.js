/* eslint-disable no-undef */

Cypress.Commands.add('existingText', (text) => {
  cy.get('.ic-select-header').should('contain.text', text);
});
Cypress.Commands.add('clickButton', (text, classe) => {
  cy.contains(text, classe).click();
});
Cypress.Commands.add('writeAndSend', (text) => {
  cy.get('input[name="text-input"]').type(text, { delay: 100 });
  cy.get('.btn-send').click();
});
Cypress.Commands.add('finished', (text) => {
  cy.get('.msg').should('contain.text', text);
});
