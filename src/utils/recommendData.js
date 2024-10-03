import BusanImage from '../assets/images/Busan.png'; 
import BusanImage2 from '../assets/images/chang.png'; 

const tourData = [
  {
    image: BusanImage,
    image2: BusanImage2,  
    title: '부산 2박 3일 코스',
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
    image: BusanImage,
    image2: BusanImage2,  
    title: '제주 3박 4일 코스',
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
    image: BusanImage,
    image2: BusanImage2, 
    title: '서울 1박 2일 코스',
    subtitle: '서울특별시',
    accessibility: {
      wheelchair: true,
      family: true,
      stroller: true,
      visual: false,
      hearing: true,
    },
  },
];

export default tourData;
