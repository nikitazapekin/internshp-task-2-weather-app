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
        state: "England",
        local_names: {
          en: "London",
          ru: "Лондон",
        },
      },
    ];

    cy.intercept("GET", `Cypress.env('REACT_APP_API_URL')/geo/1.0/direct*`, (req) => {
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
        `${Cypress.env("REACT_APP_API_URL")}/geo/1.0/direct?q=te&limit=5&appid=${Cypress.env("REACT_APP_OPEN_WEATHER_TOKEN")}&units=metric&lang=ru`
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
        state: "England",
        local_names: {
          en: "London",
          ru: "Лондон",
        },
      },
    ];

    cy.intercept("GET", `${Cypress.env("REACT_APP_API_URL")}/geo/1.0/direct*`, (req) => {
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

  it("should validate API response structure matches mock data", () => {
    const mockResponse = [
      {
        name: "London",
        country: "GB",
        lat: 51.5074,
        lon: -0.1278,
        state: "England",
        local_names: {
          en: "London",
          ru: "Лондон",
        },
      },
    ];

    cy.intercept("GET", `${Cypress.env("REACT_APP_API_URL")}/geo/1.0/direct*`, {
      statusCode: 200,
      body: mockResponse,
    }).as("getCities");

    cy.get("input").type("London");

    cy.wait("@getCities").then((interception) => {
      const response = interception.response?.body;

      expect(response).to.be.an("array");
      expect(response[0]).to.have.all.keys("name", "country", "lat", "lon", "state", "local_names");

      expect(response[0].name).to.be.a("string");
      expect(response[0].country).to.be.a("string");
      expect(response[0].lat).to.be.a("number");
      expect(response[0].lon).to.be.a("number");
      expect(response[0].state).to.be.a("string");
      expect(response[0].local_names).to.be.an("object");

      if (response[0].local_names) {
        expect(response[0].local_names.en).to.be.a("string");
        expect(response[0].local_names.ru).to.be.a("string");
      }

      expect(response[0].lat).to.be.within(-90, 90);
      expect(response[0].lon).to.be.within(-180, 180);
    });

    cy.get('[data-testid="suggestions-wrapper"]').should("exist");
  });
});
