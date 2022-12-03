import * as element from "../../pageElement/accountUser";
import * as data from "../../data/dataUser";

describe("Para Bank Test Authentication", () => {
  it("Visit Para Bank Web", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });
});

describe("Forgot Login Feature", () => {
  it("Verify get valid username and password", () => {
    cy.contains("Forgot login info?").click();
    //Input Forgot Login Form
    cy.get(element.forgot.firstName).type(data.userData.firstName);
    cy.get(element.forgot.lastName).type(data.userData.lastName);
    cy.get(element.forgot.address).type(data.userData.address);
    cy.get(element.forgot.city).type(data.userData.city);
    cy.get(element.forgot.state).type(data.userData.state);
    cy.get(element.forgot.zipCode).type(data.userData.zipCode);
    cy.get(element.forgot.ssn).type(data.userData.ssn);

    cy.get(element.button).contains(element.forgot.btnForgot).click();

    //Successfully displayed username and password
    cy.contains(data.userData.username);
    cy.contains(data.userData.password);
  });
});
