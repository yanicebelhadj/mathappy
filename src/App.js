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
            <Route path='/' element={<Navigation />}>
              <Route index element={<DashBoard />} />
              <Route path='/SearchPage' exact element={<SearchPage />} />
              <Route path="/:id" element={<CoursePresentationPage />} />
              <Route path='/:id/La-fiche' element={<FichePage />} />
              <Route path='/:id/MethodMath' element={<MethodMath />} />
              <Route path='/:id/Le-cours' element={<CoursePage />} />
              <Route path='/:id/Exercices' element={<ExercicesPage />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
