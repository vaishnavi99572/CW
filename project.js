import Login from "../support/pageobject/tutoralninja/login";
import Link_po from "../support/pageobject/tutoralninja/link_po";
import Search_product from "../support/pageobject/tutoralninja/searchproduct";
import Searchicon from "../support/pageobject/tutoralninja/searchiconclick";
import Add_to_cart from "../support/pageobject/tutoralninja/addtocart";
import Shopingcart from "../support/pageobject/tutoralninja/shopingcart";
import Checkout from "../support/pageobject/tutoralninja/checkout";
import Continuefirst from "../support/pageobject/tutoralninja/1continue";
import SecondContinue from "../support/pageobject/tutoralninja/2continue";
import Continuethird from "../support/pageobject/tutoralninja/3continue";
import TermsAndCondition from "../support/pageobject/tutoralninja/termscondition";
import Continue from "../support/pageobject/tutoralninja/continue";
import ConfirmOrder from "../support/pageobject/tutoralninja/confirmorder";
import Myaccount from "../support/pageobject/tutoralninja/myacc";
import Dropmenu from "../support/pageobject/tutoralninja/dropmyacc";
import DropmenuClick from "../support/pageobject/tutoralninja/Myaccountclick";
import Brandfooter from "../support/pageobject/tutoralninja/brands";
import BrandName from "../support/pageobject/tutoralninja/brandname";
import Addtocartfooter from "../support/pageobject/tutoralninja/lastaddtocart";

describe('tutorial ninja', () => {
    const login= new Login()
    const link_po = new Link_po();
    const search_product= new Search_product();
    const search_icon = new Searchicon();
    const add_to_cart = new Add_to_cart();
    const shoping_cart = new Shopingcart();
    const check_out_link= new Checkout();
    const continue_fir = new Continuefirst();
    const secondcontinue= new SecondContinue();
    const continuethird= new Continuethird();
    const terms_condition = new TermsAndCondition();
    const conitnu = new Continue ();
    const conform = new ConfirmOrder();
    const myacc=new Myaccount();
    const dropmenu= new Dropmenu();
    const myaccount = new DropmenuClick();
    const brand_link = new Brandfooter();
    const brandsname= new BrandName();
    const Addtocart = new Addtocartfooter();


    it('for search product', () => {
        login.EnterURL()
        login.Log_in();
    
        //search_product.EnterURL();
        search_product.SearchProduct();

        //search_icon.EnterURL()
        search_icon.Searchiconclick();

        //add_to_cart.EnterURL()
        add_to_cart.Addtocart();

        //shoping_cart.EnterURL()
        
        shoping_cart.Shopingcartlink();

        //check_out_link.EnterURL()
        check_out_link.Check_out();

        //continue_fir.EnterURL();
        continue_fir.Continue_first();

        //secondcontinue.EnterURL();
        secondcontinue.Second_continue();

        //continuethird.EnterURL();
        continuethird.Continue_third();

        //terms_condition.EnterURL()
        terms_condition.SelectTerms();

        //conitnu.EnterURL();
        conitnu.Continues();

        //conform.EnterURL();
        conform.Confirm_order();

        //myacc.EnterURL();
        myacc.Account();

        //dropmenu.EnterURL()
        dropmenu.MyacountDropmenu();

        //myaccount.EnterURL()
        myaccount.MyAccountClick();

        //brand_link.EnterURL();
        brand_link.Brandslink();

        //brandsname.EnterURL
        brandsname.Brand_name();

        //Addtocart.EnterURL();
        Addtocart.CanonAddtocart();

    
    });
});