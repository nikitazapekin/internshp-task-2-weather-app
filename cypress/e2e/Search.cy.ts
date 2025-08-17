describe("SearchCitiesComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000");
  });

  it("should render search input and button", () => {
    cy.get("input").should("exist");
    cy.get("button").should("contain", "Search");
  });

  it("should show suggestions when typing in the input", () => {
    cy.get("input").type("London");
    cy.get('[data-testid="suggestions-wrapper"]').should("exist");
  });

  it("should pass correct parameters to getCitiesByQuery", () => {
    const mockResponse = [
      {
        name: "London",
        country: "GB",
        lat: 51.5074,
        lon: -0.1278,
      },
    ];

    cy.intercept("GET", "https://api.openweathermap.org/geo/1.0/direct*", (req) => {
      expect(req.query.q).to.eq("London");
      expect(req.query.limit).to.eq("5");
      expect(req.query.units).to.eq("metric");
      expect(req.query.lang).to.eq("ru");
      expect(req.query.appid).to.exist;

      req.reply({
        statusCode: 200,
        body: mockResponse,
      });
    }).as("apiRequest");

    cy.get("input").type("London");

    cy.wait("@apiRequest");
  });
});
