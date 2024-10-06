import GlobalStyle from './styles/globalStyle'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Course from './pages/course/Course';
import Onboarding from './pages/onboarding/Onboarding1';
import RecommendedList from './pages/home/list/RecommendedList';
import Detail from './pages/home/detail/Detail'; 
import Savelist from './pages/savelist/Savelist'; 
import Addlist from './pages/savelist/Addlist'; 
import Test from './pages/test/test';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/on-boarding1" element={<Onboarding />} />
        <Route path="/recommended-list" element={<RecommendedList />} />
        <Route path="/detail" element={<Detail />} /> 
        <Route path="/save-list" element={<Savelist />} /> 
        <Route path="/add-list" element={<Addlist />} /> 
        <Route path="/test" element={<Test />} /> 
      </Routes>
    </Router>
  );
}

export default App;
