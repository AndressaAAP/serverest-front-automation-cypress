

    export const Home = {
        ShoulBeVisible: function(){
            cy.get('section[class="row espacamento"]').should('be.visible')
        }

    }