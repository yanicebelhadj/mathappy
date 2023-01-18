import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// import HomePage from "./routes/HomePage"
import DashBoard from './routes/DashBoard';
import CoursePresentationPage from "./routes/CoursePresentationPage"
import SearchPage from "./routes/SearchPage"
import FichePage from "./routes/FichePage"

import LateralNavbar from "./components/lateral-navbar/lateral-navbar.component"
import Header from "./components/header/header.component"
import MethodMath from './routes/MethodMath';
import CoursePage from './routes/CoursePage';
import ExercicesPage from './routes/ExercicesPage';

function App() {

  return (
    <div className="App">
     <Router>
        <LateralNavbar />
        <Header />
        <Routes>
          <Route path='/' exact element={<DashBoard />} />
          <Route path='/SearchPage' exact element={<SearchPage />} />
          <Route path="/:id" element={<CoursePresentationPage />} />
          <Route path='/:id/La-fiche' element={<FichePage />} />
          <Route path='/:id/MethodMath' element={<MethodMath />} />
          <Route path='/:id/Le-cours' element={<CoursePage />} />
          <Route path='/:id/Exercices' element={<ExercicesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
