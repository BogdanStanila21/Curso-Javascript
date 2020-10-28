///<reference types="cypress" />

describe('validar el formlario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {

        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Alma');

        cy.get('[data-cy="propietario-input"]')
            .type('Bogdan');

        cy.get('[data-cy="telefono-input"]')
            .type('123456789');

        cy.get('[data-cy="fecha-input"]')
            .type('2020-12-10');

        cy.get('[data-cy="hora-input"]')
            .type('20:30');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('El perro solo come y duerme');

        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy = "citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        cy.get('[data-cy = alerta]')
            .should('have.class', 'alert-success')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');
    })
})