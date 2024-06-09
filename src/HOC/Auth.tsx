import { Navigate, useLocation } from "react-router-dom";
//`useLocation` используется для получения текущего местоположения в истории браузера.
import { IChildren } from "../Types/Types";
import { useAuth } from "../hook/useAuth";

const Auth = ({ children }: IChildren) => {
  const location = useLocation(); //для получения текущего местоположения в истории браузера
  const { isAuth } = useAuth() || {};
  //Если `useAuth` возвращает `undefined`, значение `isAuth` устанавливается в `undefined` (путем логического ИЛИ с пустым объектом).
  if (!isAuth) {
    return <Navigate to={"/login"} state={{ from: location }} />;
    //если isAuth не равно false или undf то возрващается компонента Navigate
    //чтобы выернуться в это же место после автор используется state
  }
  return children;
};
export default Auth;
