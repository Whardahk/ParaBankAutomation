describe("Para Bank Test Authentication", () => {
  it("Visit Para Bank Web", () => {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
  });
  it("Unsuccessfully Register New Customer", () => {
    cy.contains("Register").click();
    cy.contains("Signing up is easy!");
    //Input Register Form
    cy.get('input[name="customer.firstName"]').type("as");
    cy.get('input[name="customer.lastName"]').type("as");
    cy.get('input[name="customer.address.street"]').type("as");
    cy.get('input[name="customer.address.city"]').type("as");
    cy.get('input[name="customer.address.state"]').type("as");
    cy.get('input[name="customer.address.zipCode"]').type("as");
    cy.get('input[name="customer.phoneNumber"]').type("as");
    cy.get('input[name="customer.ssn"]').type("as");

    cy.get('input[name="customer.username"]').type("ok");
    cy.get('input[name="customer.password"]').type("ok");
    cy.get('input[name="repeatedPassword"]').type("ap");

    cy.get("input.button").contains("Register").click();

    //Unsuccessfully Registered
    cy.contains("Passwords did not match.");
  });
  it("Successfully Register New Customer", () => {
    cy.contains("Signing up is easy!");
    //Input Register Form
    cy.get('input[name="customer.firstName"]').type("as");
    cy.get('input[name="customer.lastName"]').type("as");
    cy.get('input[name="customer.address.street"]').type("as");
    cy.get('input[name="customer.address.city"]').type("as");
    cy.get('input[name="customer.address.state"]').type("as");
    cy.get('input[name="customer.address.zipCode"]').type("as");
    cy.get('input[name="customer.phoneNumber"]').type("as");
    cy.get('input[name="customer.ssn"]').type("as");

    cy.get('input[name="customer.username"]').type("ap");
    cy.get('input[name="customer.password"]').type("ap");
    cy.get('input[name="repeatedPassword"]').type("ap");

    cy.get("input.button").contains("Register").click();

    //Successfully Registered
    var firstName = "as";
    var lastName = "as";
    cy.contains(`Welcome ${firstName} ${lastName}`);
  });
});
