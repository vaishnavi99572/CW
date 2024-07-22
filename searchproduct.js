class Search_product{
 

SearchProduct(){
    // for search the product 
    cy.get('input[placeholder="Search"]').type('HP LP3065');

}

}
export default Search_product;