describe("Test 5 - User approved geolocation", () => {
  const mockCurrentWeather = {
    coord: {
      lon: 37.6173,
      lat: 55.7558,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "ясно",
        icon: "01d",
      },
    ],
    main: {
      temp: 20.5,
      feels_like: 20.2,
      temp_min: 18.0,
      temp_max: 22.0,
      pressure: 1015,
      humidity: 60,
    },
    name: "Moscow",
  };

  const mockForecastWeather = {
    list: [
      {
        dt: Date.now() / 1000,
        main: { temp: 20.5 },
        weather: [{ icon: "01d" }],
      },
    ],
  };

  const mockCityData = [
    {
      name: "Moscow",
      country: "RU",
      lat: 55.7558,
      lon: 37.6173,
      state: "Moscow",
    },
  ];

  beforeEach(() => {
    cy.intercept("GET", "**/data/2.5/weather*", (req) => {
      expect(req.url).to.include("lat=55.7558");
      expect(req.url).to.include("lon=37.6173");
      req.reply({
        statusCode: 200,
        body: mockCurrentWeather,
      });
    }).as("getCurrentWeatherByCoords");

    cy.intercept("GET", "**/data/2.5/forecast*", (req) => {
      expect(req.url).to.include("lat=55.7558");
      expect(req.url).to.include("lon=37.6173");
      req.reply({
        statusCode: 200,
        body: mockForecastWeather,
      });
    }).as("getForecastWeatherByCoords");

    cy.intercept("GET", "**/geo/1.0/reverse*", (req) => {
      expect(req.url).to.include("lat=55.7558");
      expect(req.url).to.include("lon=37.6173");
      req.reply({
        statusCode: 200,
        body: mockCityData,
      });
    }).as("getCityByCoords");

    cy.visit("http://localhost:4000", {
      onBeforeLoad(win) {
        const mockGeolocation = {
          getCurrentPosition: (successCallback: PositionCallback) => {
            const position: GeolocationPosition = {
              coords: {
                latitude: 55.7558,
                longitude: 37.6173,
                accuracy: 10,
                altitude: null,
                altitudeAccuracy: null,
                heading: null,
                speed: null,
                toJSON: function () {
                  throw new Error("Function not implemented.");
                },
              },
              timestamp: Date.now(),
              toJSON: function () {
                throw new Error("Function not implemented.");
              },
            };
            setTimeout(() => successCallback(position), 100);
          },
          clearWatch: () => {},
          watchPosition: () => {},
        };

        Object.defineProperty(win.navigator, "geolocation", {
          value: mockGeolocation,
          writable: true,
          configurable: true,
        });
      },
    });
  });
});
