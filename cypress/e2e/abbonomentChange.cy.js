/* global describe, it, cy, expect */

describe("Check-in Flow", () => {
  it("should go to home, login, and then check in", () => {
    cy.visit("http://localhost:5173/Subscriptions");

    // Click the Login button
    cy.contains("button", "Login").click();
    cy.wait(1000); // wait for login to complete
    // Click the Check-in button
    cy.contains("button", "Selecteer").click();

    // Verify the alert message (success OR limit reached)
    cy.on("window:alert", (text) => {
      expect(
        text.includes("Check-in gelukt!") || text.includes("Check-in limit")
      ).to.be.true;
    });
  });
});
