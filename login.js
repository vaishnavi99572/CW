class Login{
EnterURL(){
    cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login');
    
}
Log_in(){
    //for log in account
    cy.get('input[name="email"]').type('gomkaryogendre@gmail.com');
    cy.get('#input-password').type('muskan99');
    cy.get('input[value="Login"]').click();

}

}
export default Login;