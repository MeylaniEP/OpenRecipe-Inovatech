import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div
        className="d-flex flex-column"
        style={{ backgroundColor: "#FAF9F6" }}
      >
        <div className="mb-5">
          <Header />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
