///<reference types="cypress" />

describe('Carga la pagina principal', () => {
    it('Carga la pagina principal', () => {

        cy.visit('/index.html');

        //verificar el elemento y su texto
        cy.contains('[data-cy = "titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        //verificar que exista
        cy.get('[data-cy = "titulo-proyecto"]').should('exist');

        //verificar que exista el elemento y contenta un texto

        cy.get('[data-cy = "titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        cy.get('[data-cy = "citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una')
    })
})