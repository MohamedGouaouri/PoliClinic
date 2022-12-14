import './assets/styles/App.css';
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import StatsPage from "./pages/StatsPage";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import PatientsPage from "./pages/PatientsPage";

function App() {
    LogRocket.init("ayi6g2/learn");
    setupLogRocketReact(LogRocket);
    return (
    <div className="App">
        <Router>
            <SideBar />
            <Routes >
                <Route path={"/"} exact={true} element={<HomePage />}/>
                <Route path={"/stats"} exact={true} element={<StatsPage />}/>
                <Route path={"/patients"} exact={true} element={<PatientsPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
