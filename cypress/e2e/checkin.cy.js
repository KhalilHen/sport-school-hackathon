/* global describe, it, cy, expect,*/

describe("Check-in Flow", () => {
  it("should go to home, login, and then check in", () => {
    cy.visit("http://localhost:5173/");

    // Click the Login button
    cy.contains("button", "Login").click();
    cy.wait(1000); // wait for login to complete
    // Click the Check-in button
    cy.contains("button", "Scan QR code").click();

    // Verify the alert message
    cy.on("window:alert", (text) => {
      expect(text).to.contains("You are checked in!");
    });
  });
});
