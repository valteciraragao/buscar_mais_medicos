import { ToastContainer } from "react-toastify";
import { Global } from "./assets/globalStyle/global.style";
import Router from "./router/router";

function App() {
  return (
    <>
      <ToastContainer />
      <Global />
      <Router />
    </>
  );
}

export default App;
