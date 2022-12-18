import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomePage from "./routes/HomePage"

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
     <Router>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
