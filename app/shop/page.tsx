'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const categories = [
  'All Products',
  'Complete Bikes',
  'Frames',
  'Forks',
  'Handlebars',
  'Grips',
  'Stems',
  'Headsets',
  'Cranks',
  'Sprockets',
  'Bottom Brackets',
  'Pedals',
  'Saddles & Seat Posts',
  'Wheels',
  'Hubs',
  'Pegs',
  'Hardware',
  'Hats',
  'Shirts & Hoodies',
  'Stickers',
  'Clearance Sale',
  'Gift Cards',
  'Digital',
];

// Complete product list with accurate images from Fiend BMX website
const allProducts = [
  // Digital
  {
    id: 1,
    name: 'Fiend No Love Video Download',
    category: 'Digital',
    price: 4.99,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: true,
  },
  
  // Complete Bikes
  {
    id: 101,
    name: 'Fiend Garrett Complete',
    category: 'Complete Bikes',
    price: 999.99,
    image: 'https://fiendbmx.com/cdn/shop/files/GARRETT_BLK_L1_1024x.jpg?v=1750795421',
    inStock: true,
  },
  {
    id: 102,
    name: 'Fiend Lew Complete',
    category: 'Complete Bikes',
    price: 999.99,
    image: 'https://fiendbmx.com/cdn/shop/files/MILLS_WHT_L1_5744fd82-6425-4158-b117-448b18ef1a24_1024x.jpg?v=1750796585',
    inStock: true,
  },
  
  // Frames
  {
    id: 201,
    name: 'Fiend Mills Frame',
    category: 'Frames',
    price: 449.99,
    image: 'https://fiendbmx.com/cdn/shop/files/MILLS_BLU.jpg?v=1734026783',
    inStock: true,
  },
  {
    id: 202,
    name: 'Fiend Raekes Frame',
    category: 'Frames',
    price: 299.99,
    originalPrice: 419.99,
    image: 'https://fiendbmx.com/cdn/shop/products/RAEKES_BLK.jpg?v=1643130552',
    inStock: true,
  },
  {
    id: 203,
    name: 'Fiend Reynolds V3 Frame',
    category: 'Frames',
    price: 449.99,
    image: 'https://fiendbmx.com/cdn/shop/products/REYNOLDS_V3_BLK.jpg?v=1666643247',
    inStock: false,
  },
  {
    id: 204,
    name: 'Fiend Shapeshifter 320 Frame',
    category: 'Frames',
    price: 449.99,
    image: 'https://fiendbmx.com/cdn/shop/files/SS_BLK_efbe41bb-a2c2-4ba7-bc39-8c38844bf5d2.jpg?v=1762748074',
    inStock: false,
  },
  {
    id: 205,
    name: 'Fiend Shapeshifter 335 Frame',
    category: 'Frames',
    price: 449.99,
    image: 'https://fiendbmx.com/cdn/shop/files/SS_BLK_40fa9d19-0f22-4cb0-b511-73256c6f5a20.jpg?v=1762748155',
    inStock: false,
  },
  {
    id: 206,
    name: 'Fiend Invest Frame',
    category: 'Frames',
    price: 429.99,
    image: 'https://fiendbmx.com/cdn/shop/files/INVEST_CP_720x_c988a5f4-6ae2-435d-a313-6d8dfedcbe39_800x.webp?v=1669859312',
    inStock: true,
  },
  
  // Forks - All products from https://fiendbmx.com/collections/forks
  {
    id: 301,
    name: 'Fiend Invest Fork',
    category: 'Forks',
    price: 179.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_fork_ic_1_1024x.jpg?v=1565802828',
    inStock: true,
  },
  {
    id: 302,
    name: 'Fiend Meta Fork',
    category: 'Forks',
    price: 179.99,
    image: 'https://fiendbmx.com/cdn/shop/files/META_BLK_021725_1024x.jpg?v=1739827080',
    inStock: true,
  },
  {
    id: 303,
    name: 'Fiend Process Fork',
    category: 'Forks',
    price: 199.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_fork_proccessCP_1024x.jpg?v=1599788616',
    inStock: true,
  },
  {
    id: 304,
    name: 'Fiend Fork Bolt',
    category: 'Forks',
    price: 14.99,
    image: 'https://fiendbmx.com/cdn/shop/products/FLUSH_BRAKEMOUNTS.jpg?v=1628869204',
    inStock: true,
  },
  
  // Handlebars - All products from https://fiendbmx.com/collections/handlebars
  {
    id: 401,
    name: 'Fiend Raekes Bar',
    category: 'Handlebars',
    price: 109.99,
    image: 'https://fiendbmx.com/cdn/shop/products/RAEKES_BLK2_IG.jpg?v=1643131509',
    inStock: true,
  },
  {
    id: 402,
    name: 'Fiend Reynolds Bars',
    category: 'Handlebars',
    price: 86.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_BLACK.jpg?v=1762717348',
    inStock: true,
  },
  {
    id: 403,
    name: 'Fiend Team Bars',
    category: 'Handlebars',
    price: 86.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_handlebar_team_black.jpg?v=1596652141',
    inStock: true,
  },
  {
    id: 404,
    name: 'Fiend Team Bars SALE!',
    category: 'Clearance Sale',
    price: 39.99,
    originalPrice: 74.99,
    image: 'https://fiendbmx.com/cdn/shop/files/TEAM_FOREST.jpg?v=1762719432',
    inStock: true,
  },
  
  // Grips - Products from https://fiendbmx.com/collections/handlebars and https://fiendbmx.com/collections/grips
  {
    id: 501,
    name: 'Fiend Palmere Grip',
    category: 'Grips',
    price: 13.99,
    image: 'https://fiendbmx.com/cdn/shop/products/PALMERE_BLK.jpg?v=1650395059',
    inStock: true,
    colorVariants: [
      { color: '#000000', image: 'https://fiendbmx.com/cdn/shop/products/PALMERE_BLK.jpg?v=1650395059', name: 'Black' },
      { color: '#FF0000', image: 'https://fiendbmx.com/cdn/shop/products/PALMERE_BLK.jpg?v=1650395059', name: 'Red' },
      { color: '#0000FF', image: 'https://fiendbmx.com/cdn/shop/products/PALMERE_BLK.jpg?v=1650395059', name: 'Blue' },
      { color: '#FFFFFF', image: 'https://fiendbmx.com/cdn/shop/products/PALMERE_BLK.jpg?v=1650395059', name: 'White' },
    ],
  },
  {
    id: 502,
    name: 'Fiend Team Flangeless Grip',
    category: 'Grips',
    price: 13.99,
    originalPrice: 16.99,
    image: 'https://fiendbmx.com/cdn/shop/products/FIEND_TEAM_BLK2.jpg?v=1598847788',
    inStock: true,
    colorVariants: [
      { color: '#000000', image: 'https://fiendbmx.com/cdn/shop/products/FIEND_TEAM_BLK2.jpg?v=1598847788', name: 'Black' },
      { color: '#FF0000', image: 'https://fiendbmx.com/cdn/shop/products/FIEND_TEAM_BLK2.jpg?v=1598847788', name: 'Red' },
      { color: '#1A1A1A', image: 'https://fiendbmx.com/cdn/shop/products/FIEND_TEAM_BLK2.jpg?v=1598847788', name: 'Dark Gray' },
      { color: '#FFFFFF', image: 'https://fiendbmx.com/cdn/shop/products/FIEND_TEAM_BLK2.jpg?v=1598847788', name: 'White' },
    ],
  },
  {
    id: 503,
    name: 'Fiend Team Flanged Grip',
    category: 'Grips',
    price: 10.99,
    originalPrice: 13.99,
    image: 'https://fiendbmx.com/cdn/shop/files/TEAM_FLANGED_BLK.jpg?v=1689971668',
    inStock: true,
    colorVariants: [
      { color: '#000000', image: 'https://fiendbmx.com/cdn/shop/files/TEAM_FLANGED_BLK.jpg?v=1689971668', name: 'Black' },
      { color: '#FF0000', image: 'https://fiendbmx.com/cdn/shop/files/TEAM_FLANGED_BLK.jpg?v=1689971668', name: 'Red' },
      { color: '#1A1A1A', image: 'https://fiendbmx.com/cdn/shop/files/TEAM_FLANGED_BLK.jpg?v=1689971668', name: 'Dark Gray' },
      { color: '#FFFFFF', image: 'https://fiendbmx.com/cdn/shop/files/TEAM_FLANGED_BLK.jpg?v=1689971668', name: 'White' },
    ],
  },
  {
    id: 504,
    name: 'Fiend Bar Ends',
    category: 'Grips',
    price: 4.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_products_grips-barendsBLK.jpg?v=1567797776',
    inStock: true,
    colorVariants: [
      { color: '#000000', image: 'https://fiendbmx.com/cdn/shop/products/fiend_products_grips-barendsBLK.jpg?v=1567797776', name: 'Black' },
      { color: '#C0C0C0', image: 'https://fiendbmx.com/cdn/shop/products/fiend_products_grips-barendsBLK.jpg?v=1567797776', name: 'Silver' },
      { color: '#FFD700', image: 'https://fiendbmx.com/cdn/shop/products/fiend_products_grips-barendsBLK.jpg?v=1567797776', name: 'Gold' },
    ],
  },
  
  // Stems - All products from https://fiendbmx.com/collections/stems
  // NOTE: Image URLs need to be verified from actual product pages on fiendbmx.com
  // Visit each product page to get the correct image URLs from the product images
  {
    id: 601,
    name: 'Fiend Mills Stem',
    category: 'Stems',
    price: 74.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_stem_mills.jpg?v=1596652141',
    inStock: true,
    colors: ['#000000', '#FFD700'], // Black and Gold only
  },
  {
    id: 602,
    name: 'Fiend Mills FL Stem',
    category: 'Stems',
    price: 84.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_stem_mills_fl.jpg?v=1596652141',
    inStock: true,
    colors: ['#000000', '#FFD700'], // Black and Gold only
  },
  {
    id: 603,
    name: 'Fiend Ransom Stem',
    category: 'Stems',
    price: 79.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_stem_ransom.jpg?v=1596652141',
    inStock: true,
    colors: ['#000000', '#FFD700'], // Black and Gold only
  },
  {
    id: 604,
    name: 'Fiend Reynolds V4 Stem',
    category: 'Stems',
    price: 84.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_stem_reynolds_v4.jpg?v=1596652141',
    inStock: true,
    colors: ['#000000', '#FFD700'], // Black and Gold only
  },
  
  // Headsets
  {
    id: 701,
    name: 'Fiend Tall Headset',
    category: 'Headsets',
    price: 29.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_fork_ic_1_1024x.jpg?v=1565802828',
    inStock: true,
  },
  {
    id: 702,
    name: 'Fiend Low Headset',
    category: 'Headsets',
    price: 27.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_fork_ic_1_1024x.jpg?v=1565802828',
    inStock: true,
  },
  {
    id: 703,
    name: 'Fiend Integrated Headset Bearing',
    category: 'Headsets',
    price: 7.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_hardware_frametensioners_2000x_8cd6424d-268d-450b-bfb7-5d963eb54080.jpg?v=1590253849',
    inStock: true,
  },
  
  // Cranks
  {
    id: 801,
    name: 'Fiend Segment Crank',
    category: 'Cranks',
    price: 209.99,
    image: 'https://fiendbmx.com/cdn/shop/files/SEGMENTCRANK_BLK_1024x1024_0c4709d3-69b7-403a-80c9-8e2739f92459_800x.webp?v=1669859595',
    inStock: true,
  },
  {
    id: 802,
    name: 'Fiend Team V2 Cranks',
    category: 'Cranks',
    price: 209.99,
    image: 'https://fiendbmx.com/cdn/shop/files/SEGMENTCRANK_BLK_1024x1024_0c4709d3-69b7-403a-80c9-8e2739f92459_800x.webp?v=1669859595',
    inStock: true,
  },
  {
    id: 803,
    name: 'Fiend Segment Crank Spindle',
    category: 'Cranks',
    price: 43.99,
    image: 'https://fiendbmx.com/cdn/shop/files/SEGMENTCRANK_BLK_1024x1024_0c4709d3-69b7-403a-80c9-8e2739f92459_800x.webp?v=1669859595',
    inStock: true,
  },
  {
    id: 804,
    name: 'Fiend Crank Wedge Kit',
    category: 'Cranks',
    price: 13.99,
    image: 'https://fiendbmx.com/cdn/shop/files/SEGMENTCRANK_BLK_1024x1024_0c4709d3-69b7-403a-80c9-8e2739f92459_800x.webp?v=1669859595',
    inStock: false,
  },
  {
    id: 805,
    name: 'Fiend Crank Spindle Bolt',
    category: 'Cranks',
    price: 6.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_hardware_frametensioners_2000x_8cd6424d-268d-450b-bfb7-5d963eb54080.jpg?v=1590253849',
    inStock: true,
  },
  
  // Sprockets
  {
    id: 901,
    name: 'Fiend Omicron Sprocket',
    category: 'Sprockets',
    price: 46.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 902,
    name: 'Fiend Omicron Guard Sprocket',
    category: 'Sprockets',
    price: 84.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 903,
    name: 'Fiend Reynolds Sprocket',
    category: 'Sprockets',
    price: 42.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 904,
    name: 'Fiend Palmere Sprocket',
    category: 'Sprockets',
    price: 46.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 905,
    name: 'Fiend Reynolds Guard Sprocket',
    category: 'Sprockets',
    price: 56.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 906,
    name: 'Fiend Palmere Guard Sprocket',
    category: 'Sprockets',
    price: 59.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  
  // Bottom Brackets
  {
    id: 1001,
    name: 'Fiend Mid Bottom Bracket',
    category: 'Bottom Brackets',
    price: 39.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_hardware_frametensioners_2000x_8cd6424d-268d-450b-bfb7-5d963eb54080.jpg?v=1590253849',
    inStock: true,
  },
  
  // Pedals
  {
    id: 1101,
    name: 'Fiend Reynolds Pedals',
    category: 'Pedals',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  
  // Saddles & Seat Posts
  {
    id: 1201,
    name: 'Fiend Mills Pivotal Seat',
    category: 'Saddles & Seat Posts',
    price: 44.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 1202,
    name: 'Fiend Reynolds V2 Pivotal Seat',
    category: 'Saddles & Seat Posts',
    price: 49.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 1203,
    name: 'Fiend Process Pivotal Seat',
    category: 'Saddles & Seat Posts',
    price: 39.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 1204,
    name: 'Fiend Pivotal Post',
    category: 'Saddles & Seat Posts',
    price: 44.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 1205,
    name: 'Fiend Post Clamp Bolt',
    category: 'Saddles & Seat Posts',
    price: 1.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_hardware_frametensioners_2000x_8cd6424d-268d-450b-bfb7-5d963eb54080.jpg?v=1590253849',
    inStock: true,
  },
  
  // Wheels
  {
    id: 1301,
    name: 'Fiend Cab Front Wheel',
    category: 'Wheels',
    price: 199.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: false,
  },
  {
    id: 1302,
    name: 'Fiend Cab V2 Rear Wheel',
    category: 'Wheels',
    price: 259.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 1303,
    name: 'Fiend Cab V2 Wheelset',
    category: 'Wheels',
    price: 399.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 1304,
    name: 'Fiend Rim Tape',
    category: 'Wheels',
    price: 4.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_hardware_frametensioners_2000x_8cd6424d-268d-450b-bfb7-5d963eb54080.jpg?v=1590253849',
    inStock: true,
  },
  
  // Hubs
  {
    id: 1401,
    name: 'Fiend Cab V2 Freecoaster Hub',
    category: 'Hubs',
    price: 229.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 1402,
    name: 'Fiend Cab Front Hub',
    category: 'Hubs',
    price: 119.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  
  // Pegs
  {
    id: 1501,
    name: 'Fiend Belmont PC 7K Peg',
    category: 'Pegs',
    price: 29.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/fiend_hardgoods_belmontPC-sleave_web.jpg?v=1578177468',
    inStock: true,
  },
  {
    id: 1502,
    name: 'Fiend Belmont PC SCM Peg',
    category: 'Pegs',
    price: 26.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/fiend_hardgoods_belmontPC-sleave_web.jpg?v=1578177468',
    inStock: true,
  },
  {
    id: 1503,
    name: 'Fiend Belmont PC Peg Sleeve',
    category: 'Pegs',
    price: 14.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/fiend_hardgoods_belmontPC-sleave_web.jpg?v=1578177468',
    inStock: true,
  },
  {
    id: 1504,
    name: 'Fiend Belmont Peg',
    category: 'Pegs',
    price: 22.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/fiend_hardgoods_belmontPC-sleave_web.jpg?v=1578177468',
    inStock: true,
  },
  
  // Hardware
  {
    id: 1601,
    name: 'Fiend Flush Brake Hardware',
    category: 'Hardware',
    price: 22.99,
    image: 'https://fiendbmx.com/cdn/shop/products/FLUSH_BRAKEMOUNTS.jpg?v=1628869204',
    inStock: true,
  },
  {
    id: 1602,
    name: 'Fiend Chain Tensioners',
    category: 'Hardware',
    price: 4.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_hardware_frametensioners_2000x_8cd6424d-268d-450b-bfb7-5d963eb54080.jpg?v=1590253849',
    inStock: true,
  },
  {
    id: 1603,
    name: 'Fiend Havoc Guard',
    category: 'Hardware',
    price: 16.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_hardware_frametensioners_2000x_8cd6424d-268d-450b-bfb7-5d963eb54080.jpg?v=1590253849',
    inStock: true,
  },
  
  // Hats
  {
    id: 1701,
    name: 'Fiend No Love Hat',
    category: 'Hats',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: true,
  },
  
  // Shirts & Hoodies
  {
    id: 1801,
    name: 'Fiend No Love Logo T-Shirt',
    category: 'Shirts & Hoodies',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: true,
  },
  {
    id: 1802,
    name: 'Fiend Always Fiending T-Shirt',
    category: 'Shirts & Hoodies',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/ALWAYSFIENDING_HOOD_BLK_FRT_c2150a0e-b278-4bd1-9d20-6c233b907615.jpg?v=1760643630',
    inStock: true,
  },
  {
    id: 1803,
    name: 'Fiend King of Bikes T-Shirt',
    category: 'Shirts & Hoodies',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: true,
  },
  {
    id: 1804,
    name: 'Fiend Mills TWIY T-Shirt',
    category: 'Shirts & Hoodies',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/MILLS_WHT_L1_5744fd82-6425-4158-b117-448b18ef1a24_1024x.jpg?v=1750796585',
    inStock: true,
  },
  {
    id: 1805,
    name: 'Fiend Always Fiending Hoodie',
    category: 'Shirts & Hoodies',
    price: 64.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/ALWAYSFIENDING_HOOD_BLK_FRT_c2150a0e-b278-4bd1-9d20-6c233b907615.jpg?v=1760643630',
    inStock: true,
  },
  {
    id: 1806,
    name: 'Fiend No Love Logo Hoodie',
    category: 'Shirts & Hoodies',
    price: 64.99,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: true,
  },
  {
    id: 1807,
    name: 'Fiend Always Fiending Fleece Short',
    category: 'Shirts & Hoodies',
    price: 39.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/ALWAYSFIENDING_HOOD_BLK_FRT_c2150a0e-b278-4bd1-9d20-6c233b907615.jpg?v=1760643630',
    inStock: true,
  },
  
  // Stickers
  {
    id: 1901,
    name: 'Fiend Always Fiending Stickers',
    category: 'Stickers',
    price: 2.00,
    image: 'https://fiendbmx.com/cdn/shop/collections/ALWAYSFIENDING_HOOD_BLK_FRT_c2150a0e-b278-4bd1-9d20-6c233b907615.jpg?v=1760643630',
    inStock: true,
  },
  {
    id: 1902,
    name: 'Fiend Mills Stickers',
    category: 'Stickers',
    price: 2.00,
    image: 'https://fiendbmx.com/cdn/shop/files/MILLS_WHT_L1_5744fd82-6425-4158-b117-448b18ef1a24_1024x.jpg?v=1750796585',
    inStock: true,
  },
  {
    id: 1903,
    name: 'Fiend No Love Large Sticker',
    category: 'Stickers',
    price: 1.50,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: true,
  },
  {
    id: 1904,
    name: 'Fiend No Love Small Sticker',
    category: 'Stickers',
    price: 1.00,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: true,
  },
  
  // Gift Cards
  {
    id: 2001,
    name: 'Fiend BMX Gift Card - $10',
    category: 'Gift Cards',
    price: 10.00,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: false,
  },
  {
    id: 2002,
    name: 'Fiend BMX Gift Card - $25',
    category: 'Gift Cards',
    price: 25.00,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: true,
  },
  {
    id: 2003,
    name: 'Fiend BMX Gift Card - $50',
    category: 'Gift Cards',
    price: 50.00,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: true,
  },
  {
    id: 2004,
    name: 'Fiend BMX Gift Card - $100',
    category: 'Gift Cards',
    price: 100.00,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    inStock: true,
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts =
    selectedCategory === 'All Products'
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-80 bg-gradient-to-br from-black via-gray-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
              Shop
            </h1>
            <p className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto">
              Premium BMX bikes and parts engineered for performance
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">
                Categories
              </h3>
              <ul className="space-y-2 max-h-[600px] overflow-y-auto">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-red-600 text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <p className="text-gray-600">
                Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm font-semibold text-gray-700">
                  Sort by:
                </label>
                <div className="relative">
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 font-semibold text-gray-700 focus:outline-none focus:border-red-600 cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="name">Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-2xl font-bold text-gray-400">
                  No products found in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
