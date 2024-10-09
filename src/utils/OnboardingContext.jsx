import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState({
    userName: '',
    userNumber: localStorage.getItem('userNumber') || '', 
    gender: '',
    year: '',
    selectedHandicaps: {},
    selectedStyles: [],
  });

  useEffect(() => {
    if (onboardingData.userNumber) {
      localStorage.setItem('userNumber', onboardingData.userNumber);
    }
  }, [onboardingData.userNumber]);

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
