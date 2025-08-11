import { createAction } from "@reduxjs/toolkit";
import type { CurrentCoordinatsState } from "@types/coordinatsTypes";

export const setCoordinats = createAction<CurrentCoordinatsState>("coordinats");
