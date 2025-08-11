import { createReducer } from "@reduxjs/toolkit";
import type { CurrentCoordinatsState } from "@types/coordinatsTypes";

import { setCoordinats } from "@store/actions/currentCoordinatsAction";

const initialState: CurrentCoordinatsState = {
  latitude: 0,
  longitude: 0,
};

export const currentCoordinatsReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCoordinats, (state, action) => {
    state.latitude = action.payload.latitude;
    state.longitude = action.payload.longitude;
  });
});
