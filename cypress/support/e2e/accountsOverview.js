import * as element from "../../pageElement/accountUser";
import * as elServices from "../../pageElement/accountServices";
import * as data from "../../data/dataUser";

describe("Open New Account", () => {
  it("Verivy user can Open New Account", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    //Login
    cy.get(element.login.username).type("rt");
    cy.get(element.login.password).type("rt");
    cy.get(element.button).contains(element.login.btnLogin).click();
    //Accounts Overview, show the 1st account details
    cy.get(elServices.accountsOverview.btnAccountView).click();
    cy.get(elServices.accountsOverview.accountId).click();
    cy.contains("27108");
  });
});
