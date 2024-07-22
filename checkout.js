class Checkout{


Check_out(){
    // click on checkout option
    cy.get('a[class="btn btn-primary"]').click();
}
}
export default Checkout;