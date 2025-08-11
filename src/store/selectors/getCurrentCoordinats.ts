import type { RootState } from "..";

export const selectCurrentCoordinats = (state: RootState) => state.coordinatsReducer;
