import { getUserLocation } from "./getGeolocation";

describe("getUserLocation function", () => {
  beforeAll(() => {
    Object.defineProperty(global.navigator, "geolocation", {
      value: {
        getCurrentPosition: jest.fn(),
      },
      writable: true,
    });
  });

  it("should resolve with coordinates when geolocation is successful", async () => {
    const mockCoords = {
      latitude: 55.7558,
      longitude: 37.6176,
    };

    (navigator.geolocation.getCurrentPosition as jest.Mock).mockImplementationOnce((success) =>
      success({ coords: mockCoords })
    );

    const coords = await getUserLocation();

    expect(coords).toEqual(mockCoords);
  });

  it("should reject with correct error message when permission is denied", async () => {
    const mockError = {
      code: 1,
      message: "User denied Geolocation",
      PERMISSION_DENIED: 1,
      POSITION_UNAVAILABLE: 2,
      TIMEOUT: 3,
    };

    (navigator.geolocation.getCurrentPosition as jest.Mock).mockImplementationOnce((_, error) =>
      error(mockError)
    );

    await expect(getUserLocation()).rejects.toThrow("User denied the request for Geolocation.");
  });

  it("should reject with correct error message when position is unavailable", async () => {
    const mockError = {
      code: 2,
      message: "Position unavailable",
      PERMISSION_DENIED: 1,
      POSITION_UNAVAILABLE: 2,
      TIMEOUT: 3,
    };

    (navigator.geolocation.getCurrentPosition as jest.Mock).mockImplementationOnce((_, error) =>
      error(mockError)
    );

    await expect(getUserLocation()).rejects.toThrow("Location information is unavailable.");
  });
});
