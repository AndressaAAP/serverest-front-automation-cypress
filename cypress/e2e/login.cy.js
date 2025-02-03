import { Access } from '../support/actions/access'
it( 'LOGIN com sucesso', function(){

    const user = {
       name : 'Maria Test',
       email : 'maria_test@qa.com.br' ,
       password : 'teste' ,
       adm : 'false'

    }

   cy.deleteUserByEmail(user.email)
   cy.postUser(user)

    // visitar
    Access.go()      
    // preenche formulario 
    Access.fillForm(user)   
    // submeter formulario
    Access.submit()
    //pagina de acesso para login
    Access.shouldLogin()


})

it( 'LOGIN sem sucesso', function(){

    const user = {
       name : 'Maria Test Erro',
       email : 'maria_test_erro@qa.com.br' ,
       password : 'teste' ,
       adm : 'false'

    }

   cy.deleteUserByEmail(user.email)
   

    // visitar
    Access.go()      
    // preenche formulario 
    Access.fillForm(user)   
    // submeter formulario
    Access.submit()
    Access.errorMsgShouldBe('Email e/ou senha inválidos')

})