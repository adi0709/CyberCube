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


    addProduct(dataTable){
        cy.log('rows : ' + dataTable.rows());

        dataTable.hashes().forEach(elem => {
            cy.log("Adding "+elem.ProductName);
            cy.get('.inventory_item_name').contains(elem.ProductName).parent().parent().next().find('.btn_primary').click();
        });
    }
}
const product = new productPage();
export default product;