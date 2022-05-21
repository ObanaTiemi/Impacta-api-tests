describe('API testing with cypress using PokeAPI', () =>{

    it('Validade response status code', () =>{
        cy.request('pokemon/lucario')
                .its('status')
                .should('equal', 200)
    })
                
    it('Validate response json', () =>{
        cy.request('pokemon/lucario')
        .its('body')
        .should('include', 
            { name: 'lucario',
              order: 573,
              weight: 540
            })
    })

    it('Calling a non existent Pokemon validating an error', ()=>{
        cy.request({url: 'pokemon/brock', 
                    failOnStatusCode: false}).then((resp) =>{
                        expect(resp.status).to.eq(404)
                        expect(resp.body).to.eq('Not Found')
                    })
    })
})