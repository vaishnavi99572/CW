class TermsAndCondition{


SelectTerms(){
    // It will check the terms and condition

    cy.get('input[name="agree"]').check().should('be.checked');
}
}
export default TermsAndCondition;
