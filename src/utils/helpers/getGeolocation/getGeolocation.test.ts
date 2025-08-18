import { GEOLOCATION_TEST } from "@constants";

import { getUserLocation } from "./getGeolocation";

const { DESCRIPTION, IT, MOCKS } = GEOLOCATION_TEST;
const { RESOLVES_WITH_COORDS, REJECTS_PERMISSION_DENIED, REJECTS_POSITION_UNAVAILABLE } = IT;
const { COORDS, ERRORS, ERROR_MESSAGES } = MOCKS;

describe(`${DESCRIPTION}`, () => {
  beforeAll(() => {
    Object.defineProperty(global.navigator, "geolocation", {
      value: {
        getCurrentPosition: jest.fn(),
      },
      writable: true,
    });
  });

  it(`${RESOLVES_WITH_COORDS}`, async () => {
    (navigator.geolocation.getCurrentPosition as jest.Mock).mockImplementationOnce((success) =>
      success({ coords: COORDS })
    );

    const coords = await getUserLocation();

    expect(coords).toEqual(COORDS);
  });

  it(`${REJECTS_PERMISSION_DENIED}`, async () => {
    (navigator.geolocation.getCurrentPosition as jest.Mock).mockImplementationOnce((_, error) =>
      error(ERRORS.PERMISSION_DENIED)
    );

    await expect(getUserLocation()).rejects.toThrow(ERROR_MESSAGES.PERMISSION_DENIED);
  });

  it(`${REJECTS_POSITION_UNAVAILABLE}`, async () => {
    (navigator.geolocation.getCurrentPosition as jest.Mock).mockImplementationOnce((_, error) =>
      error(ERRORS.POSITION_UNAVAILABLE)
    );

    await expect(getUserLocation()).rejects.toThrow(ERROR_MESSAGES.POSITION_UNAVAILABLE);
  });
});
