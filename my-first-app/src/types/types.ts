export interface IActiveContext {
  isActive: boolean;
}
export interface IThemeContext {
  theme: string;
}

export interface IActiveInputBtnContext {
  isActive: boolean;
  SetIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
