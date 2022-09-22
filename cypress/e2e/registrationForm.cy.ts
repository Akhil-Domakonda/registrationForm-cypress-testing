import { slowCypressDown } from "cypress-slow-down";

slowCypressDown();

describe("Website Status", () => {
  it("Open Registration Form", () => {
    cy.visit("https://akhil-domakonda.github.io/registrationForm/");

    cy.title().should("eq", "Registration form");
  });
});

describe("Form Submission", () => {
  it("Entering valid details", () => {
    cy.visit("https://akhil-domakonda.github.io/registrationForm/");

    cy.get("#fname").type("Domakonda");
    cy.get("#lname").type("Akhil");
    cy.get("#contactNumber").type("9988899888");
    cy.get("#mail").type("akhildomakonda@gmail.com");
    cy.get("#gender").select("Male");
    cy.get("#dob").type("2001-09-27");
    cy.get("#line1").type("flat no:108, RTC Colony");
    cy.get("#line2").type("Medchal, Hyderabad");
    cy.get("#state").select("Telangana")
    cy.get("#postalCode").type("501401")

    cy.get("#submit").click();
  });
});

describe("Resetting Form",()=>{
  it("clicking reset",()=>{
    cy.get("#reset").click()

    cy.get("#fname").should("have.value","")
    cy.get("#lname").should("have.value","")
    cy.get("#contactNumber").should("have.value","")
    cy.get("#mail").should("have.value","")
    cy.get("#gender").should("have.value",null)
    cy.get("#dob").should("have.value","")
    cy.get("#line1").should("have.value","")
    cy.get("#line2").should("have.value","")
    cy.get("#state").should("have.value","Select")
    cy.get("#postalCode").should("have.value","")
  })
})

 