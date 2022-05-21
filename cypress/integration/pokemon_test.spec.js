describe('API testing with cypress using PokeAPI', () =>{

    it('Calling a non existent Pokemon validating an error', ()=>{
        cy.request({url: 'pokemon/lucario', 
                    failOnStatusCode: false}).then((resp) =>{
                        expect(resp.status).to.eq(200)
                        expect(resp.body).to.include( 
                            { name: 'lucario',
                              order: 573,
                              weight: 540
                            })
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