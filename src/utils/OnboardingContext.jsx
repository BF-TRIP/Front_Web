import { createContext, useState } from 'react';
import PropTypes from 'prop-types'; 

export const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState({
    userName: '',
    gender: '',
    year: '',
    month: '',
    day: '',
    selectedHandicaps: {},
    selectedStyles: [],
  });

  const updateOnboardingData = (key, value) => {
    setOnboardingData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <OnboardingContext.Provider value={{ onboardingData, updateOnboardingData }}>
      {children}
    </OnboardingContext.Provider>
  );
};

OnboardingProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
