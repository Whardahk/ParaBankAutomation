import * as element from "../../pageElement/accountUser";
import * as data from "../../data/dataUser";

describe("Para Bank Test Authentication", () => {
  it("Visit Para Bank Web", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });
});

describe("Login Function", () => {
  it("Login with Invalid User", () => {
    cy.reload();
    //Input Login Form
    cy.get(element.login.username).type(data.invalidUser.username);
    cy.get(element.login.password).type(data.invalidUser.password);

    cy.get(element.button).contains(element.login.btnLogin).click();

    //Unsuccessfully Registered
    cy.contains("Wrong Username/Passwords");
    cy.contains("Log Out").click();
  });

  it("Login with Leave some fields blank", () => {
    cy.reload();
    //Input Login Form
    cy.get(element.login.username).type(data.invalidUser.username);
    cy.get(element.login.password).focus().blur();

    cy.get(element.button).contains(element.login.btnLogin).click();

    //Unsuccessfully Registered
    cy.contains("Please enter a username and password.");
  });

  it("Login with Valid User", () => {
    cy.reload();
    //Input Login Form
    cy.get(element.login.username).type(data.validUser.username);
    cy.get(element.login.password).type(data.validUser.password);

    cy.get(element.button).contains(element.login.btnLogin).click();

    //Unsuccessfully Registered
    cy.contains(`Welcome ${data.userData.firstName} ${data.userData.lastName}`);
    cy.contains("Log Out").click();
  });
});
