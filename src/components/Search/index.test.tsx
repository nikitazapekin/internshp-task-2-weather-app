import { Provider } from "react-redux";
import { useElastic } from "@hooks/useElastic";
import { ELASTIC_HOOK_TEST, ELASTIC_SEARCH_MOCKS } from "@mocks";
import { renderHook } from "@testing-library/react";

import { store } from "@store/index";
import { selectCitiesSuggestions } from "@store/selectors";

const { DESCRIPTION, IT, INITIAL_VALUES } = ELASTIC_HOOK_TEST;
const { RETURNS_INITIAL_VALUES, FORMATS_CITY_NAME } = IT;
const { DISPATCH, SUGGESTIONS, CITY, FORMATTED_CITY_NAME } = ELASTIC_SEARCH_MOCKS;

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

describe(`${DESCRIPTION}`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useDispatchMock.mockReturnValue(DISPATCH);
    useSelectorMock.mockImplementation((selector) => {
      if (selector === selectCitiesSuggestions) {
        return SUGGESTIONS;
      }

      return null;
    });
  });

  test(`${RETURNS_INITIAL_VALUES}`, () => {
    const { result } = renderHook(() => useElastic(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.inputValue).toBe(INITIAL_VALUES.INPUT_VALUE);
    expect(result.current.showSuggestions).toBe(INITIAL_VALUES.SHOW_SUGGESTIONS);
    expect(result.current.suggestedCities).toEqual(SUGGESTIONS.data);
    expect(typeof result.current.handleInputChange).toBe("function");
    expect(typeof result.current.handleSuggestionClick).toBe("function");
    expect(typeof result.current.formatCityName).toBe("function");
    expect(typeof result.current.handleSearchCity).toBe("function");
    expect(typeof result.current.handleKeyDown).toBe("function");
  });

  test(`${FORMATS_CITY_NAME}`, () => {
    const { result } = renderHook(() => useElastic(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.formatCityName(CITY)).toBe(FORMATTED_CITY_NAME);
  });
});
