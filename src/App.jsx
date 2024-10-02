import GlobalStyle from './styles/globalStyle'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Course from './pages/course/Course';
import Onboarding from './pages/onboarding/Onboarding1';
import NearbyList from './pages/home/list/NearbyList';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/on-boarding1" element={<Onboarding />} />
        <Route path="/nearby-list" element={<NearbyList />} />
      </Routes>
    </Router>
  );
}

export default App;
