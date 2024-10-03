import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import locationIcon from '../../../assets/images/location.svg'; // 주소 옆 아이콘 이미지

const TitleSectionContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlaceName = styled.div`
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 2.25rem */
  letter-spacing: -0.0175rem;
`;

const Description = styled.div`
  margin-top: 0.31rem;
  color: var(--Color-6, #2E2E2E);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.3125rem */
  letter-spacing: -0.0175rem;
`;

const MoreButton = styled.span`
  color: var(--Color-3, #949494);
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 1.3125rem */
  letter-spacing: -0.00963rem;
  cursor: pointer;
  margin-left: 0.2rem;
`;

const Divider = styled.div`
  width: 21.875rem;
  height: 0.0625rem;
  background-color: #F5F5F5;
  margin: 0.8rem 0; 
`;

const AddressRow = styled.div`
  display: flex;
  align-items: center;
`;

const AddressIcon = styled.img`
  width: 0.85175rem;
  height: 1.064rem;
  flex-shrink: 0;
  margin-right: 0.5rem;
`;

const AddressText = styled.span`
  color: var(--Color-6, #2E2E2E);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 1.5rem */
  letter-spacing: -0.02081rem;
`;

const TitleSection = ({ placeName, description, address }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // 설명이 길면 일정 글자수만큼 자르고, 더보기 버튼 표시
  const maxDescriptionLength = 68; // 자를 길이 설정
  const shortenedDescription = description.length > maxDescriptionLength && !isExpanded 
    ? description.substring(0, maxDescriptionLength) + '...' 
    : description;

  return (
    <TitleSectionContainer>
      <PlaceName>{placeName}</PlaceName>
      <Description>
        {shortenedDescription}
        {description.length > maxDescriptionLength && (
          <MoreButton onClick={toggleExpand}>
            {isExpanded ? '간략히' : '더보기'}
          </MoreButton>
        )}
      </Description>
      <Divider /> {/* 구분선 추가 */}
      <AddressRow>
        <AddressIcon src={locationIcon} alt="Location" />
        <AddressText>{address}</AddressText>
      </AddressRow>
    </TitleSectionContainer>
  );
};

TitleSection.propTypes = {
  placeName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default TitleSection;
