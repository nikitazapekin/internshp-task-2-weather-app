describe("GeolocationComponent", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000");
  });

  it("should show geolocation turn off message when permission is denied", () => {
    cy.window().then((win) => {
      const mockGeolocation = {
        getCurrentPosition: (
          successCallback: PositionCallback,
          errorCallback?: PositionErrorCallback
        ) => {
          if (errorCallback) {
            const error: GeolocationPositionError = {
              code: 1,
              message: "User denied Geolocation",
              PERMISSION_DENIED: 1,
              POSITION_UNAVAILABLE: 2,
              TIMEOUT: 3,
            };
            errorCallback(error);
          }
        },
      };

      Object.defineProperty(win.navigator, "geolocation", {
        value: mockGeolocation,
        writable: true,
      });
    });

    cy.get('[data-testid="geolocation-is-turn-off"]').should("exist");
  });
});
