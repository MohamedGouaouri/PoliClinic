import './assets/styles/App.css';
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <div className="App">
        <Router>
            <SideBar />
            <Routes >
                <Route path={"/"} exact={true} element={<HomePage />}/>
                <Route path={"/stats"} exact={true} element={<StatsPage />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
