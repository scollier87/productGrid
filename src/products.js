// products.js

import katanaIce from './assets/LaSportiveKatanaIce1.webp'
import katanaIce2 from './assets/LaSportivaKatanaIce2.webp'
import tcPro from './assets/LaSportivaTCPro1.webp';
import tcPro2 from './assets/LaSportivaTCPro2.webp'
import aspect from './assets/BlackDiamondAspect1.webp';
import aspect2 from './assets/BlackDiamondAspect2.webp'
import finale from './assets/LaSportivaFinale1.webp';
import finale2 from './assets/LaSportivaFinale2.webp'
import tarantulace from './assets/LaSportivaTarantulace1.webp'
import tarantulace2 from './assets/LaSportivaTarantulace2.webp'
import drago from './assets/ScarpaDrago1.webp'
import drago2 from './assets/ScarpaDrago2.webp'
import solutionComp from './assets/LaSportivaSolutionComp1.webp'
import solutionComp2 from './assets/LaSportivaSolutionComp2.webp'


const products = [
    { id: 1, name: 'Katana Ice, La Sportiva', price: 219, imageUrl: katanaIce, hoverImageUrl: katanaIce2},
    { id: 2, name: 'TC Pro, La Sportiva', price: 219, imageUrl: tcPro, hoverImageUrl: tcPro2},
    { id: 3, name: 'Aspect, Black Diamond', price: 160, imageUrl: aspect, hoverImageUrl: aspect2 },
    { id: 4, name: 'Finale, La Sportiva', price: 129, imageUrl: finale, hoverImageUrl: finale2 },
    { id: 5, name: 'Tarantulace, La Sportiva', price: 89, imageUrl: tarantulace, hoverImageUrl: tarantulace2 },
    { id: 6, name: 'Drago, Scarpa', price: 219, imageUrl: drago, hoverImageUrl: drago2 },
    { id: 7, name: 'Solution Comp, La Sportiva', price: 209, imageUrl: solutionComp, hoverImageUrl: solutionComp2 },
    // Add more products as needed
  ];

  export default products;
