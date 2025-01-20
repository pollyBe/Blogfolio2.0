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

export interface IPost {
  id?: number;
  image: string;
  text?: string;
  date?: string;
  lesson_num?: number;
  title: string;
  description: string;
  isFavourite?: boolean;
}
