describe("SearchCitiesComponent", () => {
  const mockForecastResponse = {
    cod: "200",
    message: 0,
    cnt: 8,
    list: [
      {
        dt: 1755550800,
        main: {
          temp: 22.59,
          feels_like: 23.25,
          temp_min: 22.08,
          temp_max: 22.59,
          pressure: 1013,
          humidity: 90,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "облачно с прояснениями",
            icon: "04n",
          },
        ],
        dt_txt: "2025-08-18 21:00:00",
      },
    ],
  };

  beforeEach(() => {
    cy.intercept("GET", "**/data/2.5/forecast*", {
      statusCode: 200,
      body: mockForecastResponse,
    }).as("getWeather");

    cy.visit("http://localhost:4000");
  });

  it("should render buttons and get hourly response", () => {
    cy.get("input").should("exist");
    cy.get("button").should("contain", "Daily");
    cy.get("button").should("contain", "Hourly");
    cy.wait("@getWeather").then((interception) => {
      expect(interception.response?.body.cnt).to.eq(8);
      // expect(interception.request.url).to.include("cnt=12");
    });
  });
});
