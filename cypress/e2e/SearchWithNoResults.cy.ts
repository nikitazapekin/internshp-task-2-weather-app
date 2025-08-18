describe("SearchCitiesComponent", () => {
  const mockResponse: unknown = [];

  beforeEach(() => {
    const apiUrl =
      "https://api.openweathermap.org/geo/1.0/direct?q=dddddddddddddddddddddddddddddddddd&limit=5&appid=cda8d711f59b4dd43f8ba261a26ec7a9&units=metric&lang=ru";
    cy.intercept("GET", apiUrl, {
      statusCode: 200,
      body: mockResponse,
    }).as("getCities");

    cy.visit("http://localhost:4000");
  });

  it("should validate API response structure matches mock data", () => {
    cy.get("input").type("dddddddddddddddddddddddddddddddddd");
    cy.get('[data-testid="spinner"]').should("exist");

    cy.wait("@getCities").then((interception) => {
      expect(interception.request.url).to.include("/geo/1.0/direct");
      expect(interception.request.method).to.equal("GET");

      const response = interception.response?.body;
      expect(response).to.be.an("array");
    });

    cy.get('[data-testid="spinner"]').should("not.exist");
    cy.get('[data-testid="no-suggestions"]').should("exist");
  });
});
