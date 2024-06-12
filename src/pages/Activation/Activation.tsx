import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { activateUser } from "../../store/userSlice.ts";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { ActivateUser } from "../../Types/Types";

const Activation = () => {
  const activation = useParams();
  //используется для получения параметров маршрута,
  //в данном случае параметра `activation`,
  // который содержит информацию о пользователе, которого нужно активироват
  const dispatch = useDispatch<ThunkDispatch<ActivateUser, unknown, Action>>();
  // для отправки экшена `activateUser` с параметром `activation` в стор Redux.
  //Экшен-криэйтор `activateUser` должен вызываться при монтировании
  //компонента (`useEffect`), поэтому массив зависимостей пустой (`[]`).
  useEffect(() => {
    dispatch(activateUser(activation as unknown as ActivateUser));
  }, []);
  return <div>Activation</div>;
};
export default Activation;

//Данный код реализует страницу активации пользователя.
//Когда пользователь переходит на эту страницу по определенной
// ссылке (содержащей параметры активации), компонент `Activation`
//получает эти параметры, отправляет экшен активации пользователя в Redux стор
//и отображает сообщение об активации.
