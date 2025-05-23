import { Outlet } from "react-router";
import Narbar from "./Components/Narbar/Narbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Context/useAuth";

function App() {

  return (
    <>
     <UserProvider>
    <Narbar />
    <Outlet />
    <ToastContainer />
    </UserProvider>
    </>
  );
}

export default App;
