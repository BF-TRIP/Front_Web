import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState({
    userName: localStorage.getItem('userName') || '',  
    uuid: localStorage.getItem('uuid') || '', 
    gender: '',
    year: '',
    selectedHandicaps: {},
    selectedStyles: [],
  });

  useEffect(() => {
    if (onboardingData.userName) {
      localStorage.setItem('userName', onboardingData.userName);  
    }
    if (onboardingData.uuid) {
      localStorage.setItem('uuid', onboardingData.uuid); 
    }
  }, [onboardingData.userName, onboardingData.uuid]);

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
