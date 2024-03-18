class productPage {
    validateProducts(){
        cy.get('.inventory_item')
            .should("have.length", 6)
            .and("exist")
            .and("be.visible")
    }

    clickProduct(){
        cy.get('.inventory_item')
            .eq(1)
            .within((product)=>{
                cy.get('.inventory_item_name')
                    .click()
            })
    }

    validateProductInfoPage(){
        cy.url()
            .should('include', '/inventory-item.html?id=0')

    }

    addProduct(dataTable){
        cy.log('raw : ' + dataTable.raw());
        cy.log('rows : ' + dataTable.rows());
        cy.log('HASHES : ' );
        var propValue;
        dataTable.hashes().forEach(elem =>{
            for(var propName in elem) {
                propValue = elem[propName]
                cy.log(propName,propValue);
            }
        });

        dataTable.hashes().forEach(elem => {
            cy.log("Adding "+elem.ProductName);
            cy.get('.inventory_item_name').contains(elem.ProductName).parent().parent().next().find('.btn_primary').click();
        });
    }
}
const product = new productPage();
export default product;