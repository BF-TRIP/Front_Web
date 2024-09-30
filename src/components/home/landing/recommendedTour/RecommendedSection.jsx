import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import TourCardList from './TourCardList';
import recommendData from '../../../../utils/recommendData';

const SectionContainer = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 0; 
  border-radius: 1rem;
  width: 100%;
`;

const SectionTitleWrapper = styled.div`
  margin-bottom: -0.5rem; 
`;

const RecommendedSection = () => {
  return (
    <SectionContainer>
      <SectionTitleWrapper>
        <SectionTitle title="OO님이 좋아할만한 관광지 리스트" />
      </SectionTitleWrapper>
      <TourCardList tourData={recommendData} />
    </SectionContainer>
  );
};

export default RecommendedSection;
