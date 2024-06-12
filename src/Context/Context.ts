import { createContext } from "react";
import { IActiveContext, ITheme } from "../Types/Types";

export const TitleContext = createContext("");
export const ActiveContext = createContext<IActiveContext | undefined>(
  undefined
);
//Создает контекст под названием `ThemeContext` и инициализирует его пустым объектом, соответствующим интерфейсу `ITheme`
export const ThemeContext = createContext<ITheme>({} as ITheme);

export default createContext({
  themes: {},
  theme: {},
  setTheme: () => {},
});
