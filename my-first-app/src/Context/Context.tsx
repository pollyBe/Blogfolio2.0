//TODO. going to rewrite it as slices

import { createContext } from "react";
import { IActiveContext, IThemeContext, IActiveInputBtnContext } from "../types/types";

export const MyContext = createContext("");
export const Obj = createContext({});

export const ActiveInputBtnContext = createContext<IActiveInputBtnContext | null>(null)

export const ActiveContext = createContext<IActiveContext | null>(null);
export const ThemeContext = createContext<IThemeContext | null>(null);
