///<reference types="cypress" />

describe('validar el formlario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {

        cy.visit('/index.html');

        cy.get('[data-cy="formulario"]')
            .submit();

        //Seleccionar alerta

        cy.get('[data-cy = alerta]')
            .should('have.class', 'alert-danger')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios');

    })
})