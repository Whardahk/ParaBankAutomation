import * as element from "../../pageElement/accountUser";

describe("Para Bank Test Authentication", () => {
  it("Visit Para Bank Web", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });
  it("Unsuccessfully Register New Customer", () => {
    cy.contains("Register").click();
    cy.contains("Signing up is easy!");
    //Input Register Form
    cy.get(element.register.firstName).type("as");
    cy.get(element.register.lastName).type("as");
    cy.get(element.register.address).type("as");
    cy.get(element.register.city).type("as");
    cy.get(element.register.state).type("as");
    cy.get(element.register.zipCode).type("as");
    cy.get(element.register.phone).type("as");
    cy.get(element.register.ssn).type("as");

    cy.get(element.register.username).type("ok");
    cy.get(element.register.password).type("ok");
    cy.get(element.register.confirm).type("ap");

    cy.get(element.button).contains(element.register.btnRegister).click();

    //Unsuccessfully Registered
    cy.contains("Passwords did not match.");
  });
  it("Successfully Register New Customer", () => {
    cy.contains("Signing up is easy!");
    //Input Register Form
    cy.get(element.register.firstName).type("as");
    cy.get(element.register.lastName).type("as");
    cy.get(element.register.address).type("as");
    cy.get(element.register.city).type("as");
    cy.get(element.register.state).type("as");
    cy.get(element.register.zipCode).type("as");
    cy.get(element.register.phone).type("as");
    cy.get(element.register.ssn).type("as");

    cy.get(element.register.username).type("ap");
    cy.get(element.register.password).type("ap");
    cy.get(element.register.confirm).type("ap");

    cy.get(element.button).contains(element.register.btnRegister).click();

    //Successfully Registered
    var firstName = "as";
    var lastName = "as";
    cy.contains(`Welcome ${firstName} ${lastName}`);
  });
});
