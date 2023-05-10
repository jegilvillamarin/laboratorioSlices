import React, { useState } from "react";
import { setLang, setTheme } from "../store/slices/settings/SettingsSlices";
import { translation } from "../assets/translation";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/slices/auth/AuthSlices";

const Login = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.settings);
  const [user, setUser] = useState("");
  const [correo, setCorreo] = useState("");
  const createSession = () => {
    const token = "123456789";
    dispatch(login({ id: user, correo: correo, token: token }));
  };

  return (
    <div>
      <input
        onChange={(e) => setUser(e.target.value)}
        type="text"
        placeholder={translation[lang].placeHolderId}
      />
      <input
        onChange={(e) => setCorreo(e.target.value)}
        type="email"
        placeholder={translation[lang].placeHolderCorreo}
      />
      <button onClick={createSession}>{translation[lang].textIngresar}</button>
    </div>
  );
};

export default Login;
