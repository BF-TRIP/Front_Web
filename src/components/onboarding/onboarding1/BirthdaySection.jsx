import styled from 'styled-components';
import PropTypes from 'prop-types';
import number3Icon from '../../../assets/images/number3.png'; 

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
`;

const Icon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.5rem;
  margin-left: -0.6rem;
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;
`;

const DateInputContainer = styled.div`
  display: flex;
  gap: 0.75rem; /* 년, 월, 일 칸 간격 */
  margin-top: 0.5rem;
`;

const YearInput = styled.input`
  display: flex;
  width: 8.125rem;
  height: 3.375rem;
  padding: 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border: 1px solid var(--Color-7, #F1F1F1);
  background: var(--Color-7, #F1F1F1);
  box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
  border-radius: 0.625rem;
  box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  outline: none;
  text-align: center;
`;

const MonthInput = styled.input`
  display: flex;
  width: 5.625rem;
  height: 3.375rem;
  padding: 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border: 1px solid var(--Color-7, #F1F1F1);
  background: var(--Color-7, #F1F1F1);
  box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
  border-radius: 0.625rem;
  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  outline: none;
  text-align: center;
`;

const DayInput = styled.input`
  display: flex;
  width: 5.625rem;
  height: 3.375rem;
  padding: 0.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border: 1px solid var(--Color-7, #F1F1F1);
  background: var(--Color-7, #F1F1F1);
  box-shadow: 0px 4px 12.1px 0px rgba(0, 0, 0, 0.06);
  border-radius: 0.625rem;
  color: #333;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  outline: none;
  text-align: center;
`;

const BirthdaySection = ({ year, month, day, onYearChange, onMonthChange, onDayChange }) => {
  return (
    <SectionContainer>
      <Icon src={number3Icon} alt="3번 아이콘" />
      <Title>생년월일을 알려주세요!</Title>
      <DateInputContainer>
        <YearInput 
          type="text" 
          placeholder="년도" 
          value={year} 
          onChange={onYearChange} 
          maxLength={4} // 최대 4글자 (년도)
        />
        <MonthInput 
          type="text" 
          placeholder="월" 
          value={month} 
          onChange={onMonthChange} 
          maxLength={2} // 최대 2글자 (월)
        />
        <DayInput 
          type="text" 
          placeholder="일" 
          value={day} 
          onChange={onDayChange} 
          maxLength={2} // 최대 2글자 (일)
        />
      </DateInputContainer>
    </SectionContainer>
  );
};

BirthdaySection.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  onYearChange: PropTypes.func.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onDayChange: PropTypes.func.isRequired,
};

export default BirthdaySection;
