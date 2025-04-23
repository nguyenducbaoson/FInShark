import { Outlet } from "react-router";
import Narbar from "./Components/Narbar/Narbar";

function App() {

  return (
    <>
    <Narbar />
    <Outlet />
    </>
  );
}

export default App;
