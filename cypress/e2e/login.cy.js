it( 'LOGIN', function(){
    cy.api({
        url: 'https://serverest.dev/usuarios',
        method: 'POST',
        failOnStatusCode: false,
        body:{
                "nome": "Maria Test",
                "email": "maria_test@qa.com.br",
                "password": "teste",
                "administrador": "false"

            }
    })
    cy.visit('https://front.serverest.dev/login')
    cy.log('Acessou a página de login')
    cy.get('input[type=email]').type('maria_test@qa.com.br')
    cy.get('input[type=password]').type('teste')
    cy.get('button[type="submit"]').click()

    cy.get('section[class="row espacamento"]').should('be.visible')


})