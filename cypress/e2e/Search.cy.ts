describe("SearchCitiesComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000");
  });

  it("should render search input and button", () => {
    cy.get("input").should("exist");
    cy.get("button").should("contain", "Search");
  });

  it("should show suggestions when typing in the input and make correct API request", () => {
    const mockResponse = [
      {
        name: "London",
        country: "GB",
        lat: 51.5074,
        lon: -0.1278,
      },
    ];

    cy.intercept("GET", "https://api.openweathermap.org/geo/1.0/direct*", (req) => {
      expect(req.url).to.match(/q=te/);
      expect(req.url).to.match(/limit=5/);
      expect(req.url).to.match(/units=metric/);
      expect(req.url).to.match(/lang=ru/);
      expect(req.url).to.match(/appid=[a-zA-Z0-9]+/);

      expect(req.url).to.match(/q=te&limit=5&appid=.+&units=metric&lang=ru/);

      req.reply({
        statusCode: 200,
        body: mockResponse,
      });
    }).as("getCities");

    cy.get("input").type("te");

    cy.get('[data-testid="spinner"]').should("exist");

    cy.wait("@getCities").then((interception) => {
      expect(interception.request.url).to.eq(
        "https://api.openweathermap.org/geo/1.0/direct?q=te&limit=5&appid=cda8d711f59b4dd43f8ba261a26ec7a9&units=metric&lang=ru"
      );
    });

    cy.get('[data-testid="spinner"]').should("not.exist");
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
