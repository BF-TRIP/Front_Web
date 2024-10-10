import HistoryImage from '../assets/images/recommend1.png'; 
import HandicapImage from '../assets/images/recommend2.png';
import BusanImage2 from '../assets/images/chang.png'; 
import SachalImage from '../assets/images/sachal.png'; 

const tourData = [
  {
    image: HistoryImage,
    image2: BusanImage2,  
    title: '역사•문화유산 관광지',
    subtitle: '부산광역시',
    accessibility: {
      wheelchair: true,
      family: true,
      stroller: true,
      visual: true,
      hearing: true,
    },
  },
  {
    image: HandicapImage,
    image2: BusanImage2,  
    title: '장애인 전용 주차가능 관광지 리스트',
    subtitle: '제주특별자치도',
    accessibility: {
      wheelchair: true,
      family: true,
      stroller: true,
      visual: true,
      hearing: true,
    },
  },
  {
    image: SachalImage,
    image2: BusanImage2,  
    title: '고즈넉한 분위기 사찰',
    subtitle: '제주특별자치도',
    accessibility: {
      wheelchair: true,
      family: true,
      stroller: true,
      visual: true,
      hearing: true,
    },
  },
];

export default tourData;
