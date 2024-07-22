class Add_to_cart{


Addtocart(){
    //cy.get('[onclick="cart.add('47', '1');"]').click();
    cy.contains('Add to Cart').click();
    cy.contains('Add to Cart').click();
    //cy.get('#button-cart').click();
}
}
export default Add_to_cart;