import response from "../../../fixtures/sponsors.json";

const sponsors = response.items;

describe("Sponsors Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "sponsors",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
    cy.get('[data-cy="reject-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
    cy.get('[data-cy="accept-filter"]')
      .get("div")
      .should("have.class", "border-white", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-white/50", "border-white/50");
    cy.get('[data-cy="reject-filter"]').click();
    cy.get('[data-cy="reject-filter"]')
      .get("div")
      .should("have.class", "text-white/50", "border-white/50");
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="accept-filter"]')
      .get("div")
      .should("have.class", "text-white/50", "border-white/50");
  });

  it("Click Confirm", () => {
    cy.get('[data-cy="accept-filter"]').click();
    sponsors.forEach((sponsor) => {
      if (sponsor.status === 1)
        cy.get(`[data-cy="${sponsor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${sponsor.uid}"]`).should("exist");
    });
  });

  it("Click Not Attending", () => {
    cy.get('[data-cy="reject-filter"]').click();
    sponsors.forEach((sponsor) => {
      if (sponsor.status === -1)
        cy.get(`[data-cy="${sponsor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${sponsor.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    sponsors.forEach((sponsor) => {
      if (sponsor.status === 0)
        cy.get(`[data-cy="${sponsor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${sponsor.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accept-filter"]').click();
    cy.get('[data-cy="reject-filter"]').click();
    sponsors.forEach((sponsor) => {
      if (sponsor.status === 1 || sponsor.status === -1)
        cy.get(`[data-cy="${sponsor.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${sponsor.uid}"]`).should("exist");
    });
  });
});
