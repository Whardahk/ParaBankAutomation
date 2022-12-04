import * as element from "../../pageElement/accountUser";
import * as elServices from "../../pageElement/accountServices";
import * as data from "../../data/dataUser";

describe("Open New Account", () => {
  it("Verivy user can Open New Account", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get(element.login.username).type("rt");
    cy.get(element.login.password).type("rt");
    cy.get(element.button).contains(element.login.btnLogin).click();
    cy.get(elServices.newAccount.btnNewAccount).click();
    cy.get(elServices.newAccount.selectType)
      .select("SAVINGS")
      .should("have.value", "1");
    cy.get(elServices.newAccount.selectAccount)
      .select("27108")
      .should("have.value", "27108");
    cy.get(elServices.newAccount.btnOpen).click();
    cy.contains("Congratulations, your account is now open.");
  });
});
