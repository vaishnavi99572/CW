class ConfirmOrder{

Confirm_order(){
    // click on confirm button
    cy.get('input[id="button-confirm"]').click({force:true});
}

}
export default ConfirmOrder;