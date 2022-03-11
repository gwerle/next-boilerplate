/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Hello World', () => {
  it('shows Hello World', () => {
    cy.visit('');
    cy.get('[data-cy=text-test]');
  });
});
