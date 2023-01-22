import AuthProvider from "./context/AuthContext";
import MainPage from "./pages/mainPage/MainPage";
import GlobalStyle from "./styles/Global Styles CSS";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="App">
        <AuthProvider>
          <GlobalStyle />
          <MainPage />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
