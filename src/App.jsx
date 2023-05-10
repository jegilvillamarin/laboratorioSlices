import Template from "./componets/Template";
import { useSelector } from "react-redux";
import "./assets/css/styles.css";
import Login from "./componets/Login";

function App() {
  const { theme } = useSelector((state) => state.settings);
  const { token } = useSelector((state) => state.auth);

  return <div className={theme}>{token ? <Template /> : <Login />}</div>;
}

export default App;
