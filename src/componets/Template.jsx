import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLang, setTheme } from "../store/slices/settings/SettingsSlices";
import { logout } from "../store/slices/auth/AuthSlices";
import { translation } from "../assets/translation";

const Template = () => {
  const dispatch = useDispatch();
  const { lang, theme } = useSelector((state) => state.settings);
  const changeLanguage = () => {
    lang === "es" ? dispatch(setLang("en")) : dispatch(setLang("es"));
  };
  const changeTheme = () => {
    theme === "light"
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"));
  };
  return (
    <div>
      <h1>{translation[lang].title}</h1>
      <h2>{translation[lang].description}</h2>
      <button onClick={changeLanguage}>
        {translation[lang].changeLanguage}
      </button>
      <button onClick={changeTheme}>{translation[lang].changeTheme}</button>
      <button onClick={() => dispatch(logout())}>
        {translation[lang].textLogout}
      </button>
    </div>
  );
};

export default Template;
