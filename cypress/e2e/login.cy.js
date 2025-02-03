it( 'LOGIN', function(){
    cy.visit('https://front.serverest.dev/login')
    cy.log('Acessou a página de login')
    cy.get('input[type=email]').type('email@teste.com')
    cy.get('input[type=password]').type('supersegura@123')
    cy.get('button[type="submit"]').click()

    cy.get('section[class="row espacamento"]').should('be.visible')

    cy.log('Teste')
})