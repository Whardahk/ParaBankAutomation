import * as element from "../../pageElement/accountUser";
import * as data from "../../data/dataUser";

describe("Para Bank Test Authentication", () => {
  it("Visit Para Bank Web", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });
});

describe("Register New Customer", () => {
  it("Unsuccessfully Register New Customer", () => {
    cy.contains("Register").click();
    cy.contains("Signing up is easy!");
    //Input Register Form
    cy.get(element.register.firstName).type(data.userData.firstName);
    cy.get(element.register.lastName).type(data.userData.lastName);
    cy.get(element.register.address).type(data.userData.address);
    cy.get(element.register.city).type(data.userData.city);
    cy.get(element.register.state).type(data.userData.state);
    cy.get(element.register.zipCode).type(data.userData.zipCode);
    cy.get(element.register.phone).type(data.userData.phone);
    cy.get(element.register.ssn).type(data.userData.ssn);

    cy.get(element.register.username).type(data.userData.username);
    cy.get(element.register.password).type(data.userData.password);
    cy.get(element.register.confirm).type(data.userData.invalidConfirm);

    cy.get(element.button).contains(element.register.btnRegister).click();

    //Unsuccessfully Registered
    cy.contains("Passwords did not match.");
  });

  it("Successfully Register New Customer", () => {
    cy.contains("Register").click();
    cy.contains("Signing up is easy!");
    //Input Register Form
    cy.get(element.register.firstName).type(data.userData.firstName);
    cy.get(element.register.lastName).type(data.userData.lastName);
    cy.get(element.register.address).type(data.userData.address);
    cy.get(element.register.city).type(data.userData.city);
    cy.get(element.register.state).type(data.userData.state);
    cy.get(element.register.zipCode).type(data.userData.zipCode);
    cy.get(element.register.phone).type(data.userData.phone);
    cy.get(element.register.ssn).type(data.userData.ssn);

    cy.get(element.register.username).type(data.userData.username);
    cy.get(element.register.password).type(data.userData.password);
    cy.get(element.register.confirm).type(data.userData.validConfirm);

    cy.get(element.button).contains(element.register.btnRegister).click();

    //Successfully Registered
    cy.contains(`Welcome ${data.userData.firstName} ${data.userData.lastName}`);
  });
});

describe("Logout Function", () => {
  it("In Login Condition and Logout the account", () => {
    cy.contains(`Welcome ${data.userData.firstName} ${data.userData.lastName}`);
    cy.contains("Log Out").click();
  });
});
