/// <reference types="cypress"/>
describe("Login and Logout on site", () => {
  beforeEach("Otwórz stronę LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("Znajdź pole email i wpisz adres", () => {
    cy.get("#user_email")
      .type("user888@gmail.com")
      .should("have.value", "user888@gmail.com");
    cy.get("#user_password").type("1234567890");
    cy.get(".eckniwg2").click();
    cy.get(".css-7afvtf").click();
    cy.get(":nth-child(9) > .css-bve2vl").click();
  });
  

  it("Znajdź pole email i wpisz adres 2", () => {
    cy.login_logout("testowyqa@qa.team", "QA!automation-1");
  });
});


