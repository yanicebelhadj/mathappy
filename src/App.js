import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import DashBoard from './routes/DashBoard/DashBoard';
import CoursePresentationPage from "./routes/CoursePresentationPage/CoursePresentationPage"
import SearchPage from "./routes/SearchPage/SearchPage"
import FichePage from "./routes/FichePage/FichePage"
import MethodMath from './routes/MethodMath/MethodMath';
import CoursePage from './routes/CoursePage/CoursePage';
import ExercicesPage from './routes/ExercicesPage';
import LandingPage from './routes/LandingPage/LandingPage';
import CompetencesPage from './routes/CompetencesPage/CompetencesPage';

import { Provider } from "react-redux";
import { store } from "./store/redux";
import Navigation from './components/navigation/navigation.component.jsx';
import SignIn from './routes/SignIn/SignIn.jsx';
import SignUp from './routes/SignUp/SignUp.jsx';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/math' exact element={<LandingPage />} />
            <Route path='/SignIn' exact element={<SignIn />} />
            <Route path='/SignUp' exact element={<SignUp />} />  
            <Route path='/' element={<Navigation /> }>
              <Route index element={<DashBoard />} />
              <Route path='/SearchPage' exact element={<SearchPage />} />
              <Route path="/:id" element={<CoursePresentationPage />} />
              <Route path='/La-fiche/:id' element={<FichePage />} />
              <Route path='/MethodMath/:id' element={<MethodMath />} />
              <Route path='/maths/:id' element={<CompetencesPage />} />
              <Route path='/Exercices/:id' element={<ExercicesPage />} />
              <Route path='/le-cours/:id' element={<CoursePage />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
