class Addtocartfooter{

CanonAddtocart(){
    // selected item add to cart from brands page
    cy.contains('Add to Cart').click();
    cy.get('button[class="btn btn-primary btn-lg btn-block"]').click({force:true});
}
}
export default Addtocartfooter;