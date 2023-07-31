import { useSelector } from "react-redux";
import "./App.css";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import "./styles/styles.css";

function App() {
  const { isLoading } = useSelector((store) => store.mainReducer);
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {isLoading && <Loading />}
    </div>
  );
}

export default App;
