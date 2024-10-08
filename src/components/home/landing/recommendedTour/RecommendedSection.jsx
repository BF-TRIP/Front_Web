import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import SectionTitle from './SectionTitle';
import TourCardList from './TourCardList';
import recommendData from '../../../../utils/recommendData';

const SectionContainer = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  border-radius: 1rem;
  width: 100%;
`;

const RecommendedSection = ({ userName }) => { 
  return (
    <SectionContainer>
      <SectionTitle title={`${userName}님이 좋아할만한 관광지 리스트`} /> 
      <TourCardList tourData={recommendData} />
    </SectionContainer>
  );
};

RecommendedSection.propTypes = {
  userName: PropTypes.string.isRequired, 
};

export default RecommendedSection;
