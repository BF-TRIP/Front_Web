import GlobalStyle from './styles/globalStyle'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Course from './pages/course/Course';
import RecommendedList from './pages/home/list/RecommendedList';
import Detail from './pages/home/detail/Detail'; 
import Savelist from './pages/savelist/Savelist'; 
import Addlist from './pages/savelist/Addlist'; 
import Test from './pages/test/test';
import OnboardingFirstPage from './pages/onboarding/OnboardingFirstPage';
import OnboardingSecondPage from './pages/onboarding/OnboardingSecondPage';
import OnboardingThirdPage from './pages/onboarding/OnboardingThirdPage';
import OnboardingFinalPage from './pages/onboarding/OnboardingFinalPage';

import { OnboardingProvider } from './utils/OnboardingContext';

function App() {
  return (
    <OnboardingProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/recommended-list" element={<RecommendedList />} />
          <Route path="/detail" element={<Detail />} /> 
          <Route path="/save-list" element={<Savelist />} /> 
          <Route path="/add-list" element={<Addlist />} /> 
          <Route path="/test" element={<Test />} /> 
          <Route path="/onboarding-first" element={<OnboardingFirstPage />} />
          <Route path="/onboarding-second" element={<OnboardingSecondPage />} />
          <Route path="/onboarding-third" element={<OnboardingThirdPage />} />
          <Route path="/onboarding-final" element={<OnboardingFinalPage />} />
        </Routes>
      </Router>
    </OnboardingProvider>
  );
}

export default App;
