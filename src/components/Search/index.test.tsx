import { Provider } from "react-redux";
import { useElastic } from "@hooks/useElastic";
import { renderHook } from "@testing-library/react";

import { store } from "@store/index";
import { selectCitiesSuggestions } from "@store/selectors";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("@store/selectors", () => ({
  selectCitiesSuggestions: jest.fn(),
}));

const useSelectorMock = jest.spyOn(require("react-redux"), "useSelector");
const useDispatchMock = jest.spyOn(require("react-redux"), "useDispatch");

describe("useElastic hook", () => {
  const mockDispatch = jest.fn();
  const mockSuggestions = {
    data: [
      {
        name: "Moscow",
        state: "Moscow",
        country: "Russia",
        lat: 55.7558,
        lon: 37.6176,
      },
    ],
    coordinats: { latitude: 55.7558, longitude: 37.6176 },
    loading: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatchMock.mockReturnValue(mockDispatch);
    useSelectorMock.mockImplementation((selector) => {
      if (selector === selectCitiesSuggestions) {
        return mockSuggestions;
      }

      return null;
    });
  });

  test("should return initial values and functions", () => {
    const { result } = renderHook(() => useElastic(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.inputValue).toBe("");
    expect(result.current.showSuggestions).toBe(false);
    expect(result.current.suggestedCities).toEqual(mockSuggestions.data);
    expect(typeof result.current.handleInputChange).toBe("function");
    expect(typeof result.current.handleSuggestionClick).toBe("function");
    expect(typeof result.current.formatCityName).toBe("function");
    expect(typeof result.current.handleSearchCity).toBe("function");
    expect(typeof result.current.handleKeyDown).toBe("function");
  });

  test("should format city name correctly", () => {
    const { result } = renderHook(() => useElastic(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    const city = {
      name: "Moscow",
      state: "Moscow",
      country: "Russia",
      lat: 55.7558,
      lon: 37.6176,
    };

    expect(result.current.formatCityName(city)).toBe("Moscow, Moscow, Russia");
  });
});
