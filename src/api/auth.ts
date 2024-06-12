export interface SignUpInfo {
  username: string;
  email: string;
  password: string;
  cource_group: number;
}

export interface SignInInfo {
  email: string;
  password: string;
}

const URL = "https://studapi.teachmeskills.by/auth/users/";
const POST = "POST"; //метод запроса
const CONTENT = "application/json; charset=UTF-8"; //указывает на тип содержимого запроса.
const XCSRFToken =
  "2u9EiabuRdAvpzVVsb1AyBCN4NHiCd5Ea3MCV5Pzj5kaopDjEW0Dqhmb3jXgmn3p"; //представляет собой токен, который может использоваться для аутентификации запроса.

const register = async (info: SignUpInfo) => {
  const payload = {
    method: POST,
    body: JSON.stringify(info),
    headers: {
      "Content-type": CONTENT,
      "X-CSRFToken": XCSRFToken,
    },
  };

  return await fetch(URL, payload);
};

const login = async (info: SignInInfo) => {
  const payload = {
    method: POST,
    body: JSON.stringify(info),
    headers: {
      "Content-type": CONTENT,
      "X-CSRFToken": XCSRFToken,
    },
  };

  return await fetch(URL, payload);
};

const logout = async () => {
  return Promise.resolve(true);
};
//Затем определяются три асинхронные функции: register, login и logout.
// Функция register принимает информацию SignUpInfo, создает payload с
//методом POST, телом запроса, заголовками и выполняет запрос к указанному URL.
// Функция login принимает информацию SignInInfo и выполнет запрос к API с теми же параметрами,
//что и в функции register. Функция logout просто возвращает Promise с true.
const AuthApi = {
  register,
  login,
  logout,
};

export default AuthApi;
