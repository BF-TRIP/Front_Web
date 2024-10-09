import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import TourCardList from './TourCardList';
import recommendData from '../../../../utils/recommendData';

const SectionContainer = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  border-radius: 1rem;
  width: 100%;
`;

const RecommendedSection = () => {
  return (
    <SectionContainer>
      <SectionTitle title="OO님이 좋아할만한 관광지 리스트" />
      <TourCardList tourData={recommendData} />
    </SectionContainer>
  );
};

export default RecommendedSection;