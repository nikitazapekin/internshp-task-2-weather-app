describe("SearchCitiesComponent", () => {
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

  const mockCurrentWeather = {
    coord: {
      lon: -0.1276,
      lat: 51.5073,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "пасмурно",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 20.03,
      feels_like: 19.79,
      temp_min: 19.47,
      temp_max: 21.08,
      pressure: 1018,
      humidity: 65,
      sea_level: 1018,
      grnd_level: 1014,
    },
  };

  const mockForecastWeather = {};

  beforeEach(() => {
    cy.intercept("GET", "**/geo/1.0/direct*", { statusCode: 200, body: mockResponse }).as(
      "getCities"
    );

    cy.intercept("GET", "**/data/2.5/weather*", (req) => {
      req.reply({
        statusCode: 200,
        body: mockCurrentWeather,
      });
    }).as("getCurrentWeather");

    cy.intercept("GET", "**/data/2.5/forecast*", (req) => {
      if (req.url.includes("cnt=8")) {
        expect(req.url).to.include("cnt=8");
      }
      req.reply({
        statusCode: 200,
        body: mockForecastWeather,
      });
    }).as("getForecastWeather");

    cy.visit("http://localhost:4000");
  });

  it("display hourly weather after search", () => {
    cy.get("input").type("London");
    cy.wait("@getCities");

    cy.get("button").contains("Search").click();
    cy.wait("@getCurrentWeather").then((interception) => {
      expect(interception.response?.body).to.exist;
    });

    cy.wait("@getForecastWeather").then((interception) => {
      expect(interception.request.url).not.to.include("cnt=8");
    });

    cy.get("button").contains("Hourly").click();
    cy.wait("@getForecastWeather").then((interception) => {
      expect(interception.request.url).to.include("cnt=8");
      expect(interception.response?.body).to.exist;
    });
  });
});
