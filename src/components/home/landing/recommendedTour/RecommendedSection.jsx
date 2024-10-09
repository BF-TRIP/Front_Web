import styled from 'styled-components';
import PropTypes from 'prop-types'; 
import SectionTitle from './SectionTitle';
import TourCardList from './TourCardList';

const SectionContainer = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  border-radius: 1rem;
  width: 100%;
`;

const RecommendedSection = ({ userName, recommendedLocations }) => { 
  return (
    <SectionContainer>
      <SectionTitle title={`${userName}님이 좋아할만한 관광지 리스트`} /> 
      <TourCardList tourData={recommendedLocations} /> {/* recommendedLocations 데이터를 전달 */}
    </SectionContainer>
  );
};

RecommendedSection.propTypes = {
  userName: PropTypes.string.isRequired,
  recommendedLocations: PropTypes.arrayOf(PropTypes.object).isRequired, 
};

export default RecommendedSection;
