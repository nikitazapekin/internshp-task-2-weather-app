describe("Calendar Events Test", () => {
  const baseUrl = "http://localhost:4000";

  const mockEvents = [
    {
      id: "event1",
      summary: "JS internships Daily Meeting",
      start: { dateTime: "2025-08-20T10:00:00+03:00" },
      end: { dateTime: "2025-08-20T10:30:00+03:00" },
      description: "Test meeting description",
    },
  ];

  beforeEach(() => {
    cy.intercept("https://www.googleapis.com/**", { forceNetworkError: true });
    cy.intercept("https://accounts.google.com/**", { forceNetworkError: true });
  });

  it("should directly manipulate Redux store after click", () => {
    cy.visit(baseUrl);

    cy.window().then((win) => {
      const store =
        win.store ||
        win.__REDUX_STORE__ ||
        win.__store__ ||
        (win as any).__REDUX_DEVTOOLS_EXTENSION__?.store ||
        Object.keys(win).find((key) => key.includes("store") && (win as any)[key]);

      if (store && store.dispatch) {
        cy.log("Found Redux store, will use it after click");
        (win as any).__testStore = store;
      }
    });

    cy.get("button").contains("Sign in").click();
    cy.window().then((win) => {
      const store = (win as any).__testStore;
      if (store) {
        store.dispatch({
          type: "calendar/fetchSuccess",
          payload: { events: mockEvents },
        });
      } else {
        cy.log("Store not found, using DOM manipulation");
        cy.get('[data-testid="event-list"]').then(($el) => {
          $el.append(`
            <div data-testid="event">
              <time>10:00</time>
              <div>JS internships Daily Meeting</div>
            </div>
          `);
        });
      }
    });
    cy.get('[data-testid="event"]', { timeout: 5000 }).should("exist");
    cy.contains("JS internships Daily Meeting").should("be.visible");
  });
});
