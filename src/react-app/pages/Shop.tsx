import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProductCard from '@/react-app/components/ProductCard';

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
];

const allProducts = [
  // Complete Bikes
  {
    id: 1,
    name: 'Fiend Garrett Complete',
    category: 'Complete Bikes',
    price: 999.99,
    image: 'https://fiendbmx.com/cdn/shop/files/GARRETT_BLK_L1.jpg?v=1750795421',
    inStock: true,
  },
  {
    id: 2,
    name: 'Fiend Lew Complete',
    category: 'Complete Bikes',
    price: 999.99,
    image: 'https://fiendbmx.com/cdn/shop/files/MILLS_WHT_L1_5744fd82-6425-4158-b117-448b18ef1a24.jpg?v=1750796585',
    inStock: true,
  },

  // Frames
  {
    id: 3,
    name: 'Fiend Mills Frame',
    category: 'Frames',
    price: 449.99,
    image: 'https://fiendbmx.com/cdn/shop/files/MILLS_BLU.jpg?v=1734026783',
    inStock: true,
  },
  {
    id: 4,
    name: 'Fiend Raekes Frame',
    category: 'Frames',
    price: 299.99,
    originalPrice: 419.99,
    image: 'https://fiendbmx.com/cdn/shop/products/RAEKES_BLK.jpg?v=1643130552',
    inStock: true,
  },
  {
    id: 5,
    name: 'Fiend Reynolds V3 Frame',
    category: 'Frames',
    price: 449.99,
    image: 'https://fiendbmx.com/cdn/shop/products/REYNOLDS_V3_BLK.jpg?v=1666643247',
    inStock: false,
  },
  {
    id: 6,
    name: 'Fiend Shapeshifter 320 Frame',
    category: 'Frames',
    price: 449.99,
    image: 'https://fiendbmx.com/cdn/shop/files/SS_BLK_efbe41bb-a2c2-4ba7-bc39-8c38844bf5d2.jpg?v=1762748074',
    inStock: false,
  },
  {
    id: 7,
    name: 'Fiend Shapeshifter 335 Frame',
    category: 'Frames',
    price: 449.99,
    image: 'https://fiendbmx.com/cdn/shop/files/SS_BLK_40fa9d19-0f22-4cb0-b511-73256c6f5a20.jpg?v=1762748155',
    inStock: false,
  },
  {
    id: 8,
    name: 'Fiend Chain Tensioners',
    category: 'Frames',
    price: 4.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_hardware_frametensioners_2000x_8cd6424d-268d-450b-bfb7-5d963eb54080.jpg?v=1590253849',
    inStock: false,
  },
  {
    id: 9,
    name: 'Fiend Flush Brake Hardware',
    category: 'Frames',
    price: 22.99,
    image: 'https://fiendbmx.com/cdn/shop/products/FLUSH_BRAKEMOUNTS.jpg?v=1628869204',
    inStock: true,
  },

  // Forks
  {
    id: 10,
    name: 'Fiend Invest Fork',
    category: 'Forks',
    price: 179.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_fork_ic_1_1024x.jpg?v=1565802828',
    inStock: true,
  },
  {
    id: 11,
    name: 'Fiend Meta Fork',
    category: 'Forks',
    price: 179.99,
    image: 'https://fiendbmx.com/cdn/shop/files/META_BLK_021725_1024x.jpg?v=1739827080',
    inStock: true,
  },
  {
    id: 12,
    name: 'Fiend Process Fork',
    category: 'Forks',
    price: 199.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_fork_proccessCP_1024x.jpg?v=1599788616',
    inStock: true,
  },
  {
    id: 13,
    name: 'Fiend Fork Bolt',
    category: 'Forks',
    price: 14.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Handlebars
  {
    id: 14,
    name: 'Fiend Raekes Bar',
    category: 'Handlebars',
    price: 109.99,
    image: 'https://fiendbmx.com/cdn/shop/products/RAEKES_BLK2_IG.jpg?v=1643131509',
    inStock: true,
  },
  {
    id: 15,
    name: 'Fiend Reynolds Bars',
    category: 'Handlebars',
    price: 86.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_BLACK.jpg?v=1762717348',
    inStock: true,
  },
  {
    id: 16,
    name: 'Fiend Team Bars',
    category: 'Handlebars',
    price: 86.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_handlebar_team_black.jpg?v=1596652141',
    inStock: true,
  },

  // Grips
  {
    id: 17,
    name: 'Fiend Palmere Grip',
    category: 'Grips',
    price: 13.99,
    image: 'https://fiendbmx.com/cdn/shop/products/PALMERE_BLK.jpg?v=1650395059',
    inStock: true,
  },
  {
    id: 18,
    name: 'Fiend Team Flanged Grip',
    category: 'Grips',
    price: 10.99,
    image: 'https://fiendbmx.com/cdn/shop/files/TEAM_FLANGED_BLK.jpg?v=1689971668',
    inStock: true,
  },
  {
    id: 19,
    name: 'Fiend Team Flangeless Grip',
    category: 'Grips',
    price: 13.99,
    image: 'https://fiendbmx.com/cdn/shop/products/FIEND_TEAM_BLK2.jpg?v=1598847788',
    inStock: true,
  },
  {
    id: 20,
    name: 'Fiend Bar Ends',
    category: 'Grips',
    price: 4.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_products_grips-barendsBLK.jpg?v=1567797776',
    inStock: true,
  },

  // Stems
  {
    id: 21,
    name: 'Fiend Mills Stem',
    category: 'Stems',
    price: 79.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 22,
    name: 'Fiend Mills FL Stem',
    category: 'Stems',
    price: 84.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 23,
    name: 'Fiend Ransom Stem',
    category: 'Stems',
    price: 74.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 24,
    name: 'Fiend Reynolds V4 Stem',
    category: 'Stems',
    price: 84.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Headsets
  {
    id: 25,
    name: 'Fiend Tall Headset',
    category: 'Headsets',
    price: 29.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 26,
    name: 'Fiend Low Headset',
    category: 'Headsets',
    price: 27.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 27,
    name: 'Fiend Integrated Headset Bearing',
    category: 'Headsets',
    price: 7.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Cranks
  {
    id: 28,
    name: 'Fiend Segment Crank',
    category: 'Cranks',
    price: 189.99,
    image: 'https://fiendbmx.com/cdn/shop/files/SEGMENTCRANK_BLK_1024x1024_0c4709d3-69b7-403a-80c9-8e2739f92459_800x.webp?v=1669859595',
    inStock: true,
  },
  {
    id: 29,
    name: 'Fiend Team V2 Cranks',
    category: 'Cranks',
    price: 209.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 30,
    name: 'Fiend Segment Crank Spindle',
    category: 'Cranks',
    price: 29.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 31,
    name: 'Fiend Crank Spindle Bolt',
    category: 'Cranks',
    price: 6.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 32,
    name: 'Fiend Crank Wedge Kit',
    category: 'Cranks',
    price: 13.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Sprockets
  {
    id: 33,
    name: 'Fiend Omicron Guard Sprocket',
    category: 'Sprockets',
    price: 54.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 34,
    name: 'Fiend Omicron Sprocket',
    category: 'Sprockets',
    price: 46.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 35,
    name: 'Fiend Palmere Sprocket',
    category: 'Sprockets',
    price: 49.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 36,
    name: 'Fiend Palmere Guard Sprocket',
    category: 'Sprockets',
    price: 59.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 37,
    name: 'Fiend Reynolds Sprocket',
    category: 'Sprockets',
    price: 49.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 38,
    name: 'Fiend Reynolds Guard Sprocket',
    category: 'Sprockets',
    price: 56.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 39,
    name: 'Fiend Havoc Guard',
    category: 'Sprockets',
    price: 16.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 40,
    name: 'Fiend Havoc Guard Bolts',
    category: 'Sprockets',
    price: 6.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 41,
    name: 'Fiend Sprocket Adaptor',
    category: 'Sprockets',
    price: 9.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 42,
    name: 'Fiend Half Link Chain',
    category: 'Sprockets',
    price: 29.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Bottom Brackets
  {
    id: 43,
    name: 'Fiend Mid Bottom Bracket',
    category: 'Bottom Brackets',
    price: 39.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Pedals
  {
    id: 44,
    name: 'Fiend Reynolds Pedals',
    category: 'Pedals',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Saddles & Seat Posts
  {
    id: 45,
    name: 'Fiend Mills Pivotal Seat',
    category: 'Saddles & Seat Posts',
    price: 44.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 46,
    name: 'Fiend Reynolds V2 Pivotal Seat',
    category: 'Saddles & Seat Posts',
    price: 49.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 47,
    name: 'Fiend Process Pivotal Seat',
    category: 'Saddles & Seat Posts',
    price: 39.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 48,
    name: 'Fiend Pivotal Post',
    category: 'Saddles & Seat Posts',
    price: 44.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 49,
    name: 'Fiend Post Clamp Bolt',
    category: 'Saddles & Seat Posts',
    price: 1.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Wheels
  {
    id: 50,
    name: 'Fiend Cab Front Wheel',
    category: 'Wheels',
    price: 209.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 51,
    name: 'Fiend Cab V2 Rear Wheel',
    category: 'Wheels',
    price: 259.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 52,
    name: 'Fiend Cab V2 Wheelset',
    category: 'Wheels',
    price: 449.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 53,
    name: 'Fiend Rim Tape',
    category: 'Wheels',
    price: 4.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Hubs
  {
    id: 54,
    name: 'Fiend Cab V2 Freecoaster Hub',
    category: 'Hubs',
    price: 229.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 55,
    name: 'Fiend Cab Front Hub',
    category: 'Hubs',
    price: 119.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 56,
    name: 'Fiend Half Cab v2 Hub Guard',
    category: 'Hubs',
    price: 14.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 57,
    name: 'Fiend Full Cab v2 Hub Guard',
    category: 'Hubs',
    price: 11.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 58,
    name: 'Fiend Cab Front Hub Guards',
    category: 'Hubs',
    price: 9.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 59,
    name: 'Fiend Cab V1 Freecoaster Clutch',
    category: 'Hubs',
    price: 19.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 60,
    name: 'Fiend Cab Replacement Bearings',
    category: 'Hubs',
    price: 14.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 61,
    name: 'Fiend Front Hub Bolts',
    category: 'Hubs',
    price: 12.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 62,
    name: 'Fiend Axle Nuts',
    category: 'Hubs',
    price: 9.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 63,
    name: 'Fiend Cab V1 Driver Lock Nut',
    category: 'Hubs',
    price: 4.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 64,
    name: 'Fiend Cab V2 Freecoaster Axle',
    category: 'Hubs',
    price: 26.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 65,
    name: 'Fiend Cab V2 Hub Bearings',
    category: 'Hubs',
    price: 9.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 66,
    name: 'Fiend Cab V2 Hub Collars',
    category: 'Hubs',
    price: 9.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 67,
    name: 'Fiend Cab V2 Freecoaster Driver/Clutch',
    category: 'Hubs',
    price: 49.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 68,
    name: 'Fiend Cab V2 Freecoaster Clutch',
    category: 'Hubs',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 69,
    name: 'Fiend Cab V2 Freecoaster Clutch Bushing',
    category: 'Hubs',
    price: 12.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 70,
    name: 'Fiend Cab SG Stainless Spokes',
    category: 'Hubs',
    price: 29.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Pegs
  {
    id: 71,
    name: 'Fiend Belmont PC 7K Peg',
    category: 'Pegs',
    price: 29.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/fiend_hardgoods_belmontPC-sleave_web.jpg?v=1578177468',
    inStock: true,
  },
  {
    id: 72,
    name: 'Fiend Belmont PC SCM Peg',
    category: 'Pegs',
    price: 26.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/fiend_hardgoods_belmontPC-sleave_web.jpg?v=1578177468',
    inStock: true,
  },
  {
    id: 73,
    name: 'Fiend Belmont PC Peg Sleeve',
    category: 'Pegs',
    price: 14.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/fiend_hardgoods_belmontPC-sleave_web.jpg?v=1578177468',
    inStock: true,
  },
  {
    id: 74,
    name: 'Fiend Belmont Peg',
    category: 'Pegs',
    price: 22.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/fiend_hardgoods_belmontPC-sleave_web.jpg?v=1578177468',
    inStock: true,
  },

  // Hardware
  {
    id: 75,
    name: 'Fiend Crank Spindle Bolt',
    category: 'Hardware',
    price: 6.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 76,
    name: 'Fiend Chain Tensioners',
    category: 'Hardware',
    price: 4.99,
    image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_hardware_frametensioners_2000x_8cd6424d-268d-450b-bfb7-5d963eb54080.jpg?v=1590253849',
    inStock: true,
  },
  {
    id: 77,
    name: 'Fiend Cab V1 Driver Lock Nut',
    category: 'Hardware',
    price: 4.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 78,
    name: 'Fiend Axle Nuts',
    category: 'Hardware',
    price: 9.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 79,
    name: 'Fiend Cab V2 Freecoaster Axle',
    category: 'Hardware',
    price: 26.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 80,
    name: 'Fiend Cab V2 Hub Collars',
    category: 'Hardware',
    price: 9.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 81,
    name: 'Fiend Cab V2 Freecoaster Clutch',
    category: 'Hardware',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 82,
    name: 'Fiend Flush Brake Hardware',
    category: 'Hardware',
    price: 22.99,
    image: 'https://fiendbmx.com/cdn/shop/products/FLUSH_BRAKEMOUNTS.jpg?v=1628869204',
    inStock: true,
  },
  {
    id: 83,
    name: 'Fiend Havoc Guard',
    category: 'Hardware',
    price: 16.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 84,
    name: 'Fiend Cab SG Stainless Spokes',
    category: 'Hardware',
    price: 29.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Shirts & Hoodies
  {
    id: 85,
    name: 'Fiend No Love Logo T-Shirt',
    category: 'Shirts & Hoodies',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 86,
    name: 'Fiend Always Fiending T-Shirt',
    category: 'Shirts & Hoodies',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 87,
    name: 'Fiend King of Bikes T-Shirt',
    category: 'Shirts & Hoodies',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 88,
    name: 'Fiend Mills TWIY T-Shirt',
    category: 'Shirts & Hoodies',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 89,
    name: 'Fiend Ransom T-Shirt',
    category: 'Shirts & Hoodies',
    price: 24.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 90,
    name: 'Fiend Always Fiending Hoodie',
    category: 'Shirts & Hoodies',
    price: 64.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/ALWAYSFIENDING_HOOD_BLK_FRT_c2150a0e-b278-4bd1-9d20-6c233b907615.jpg?v=1760643630',
    inStock: true,
  },
  {
    id: 91,
    name: 'Fiend No Love Logo Hoodie',
    category: 'Shirts & Hoodies',
    price: 64.99,
    image: 'https://fiendbmx.com/cdn/shop/collections/ALWAYSFIENDING_HOOD_BLK_FRT_c2150a0e-b278-4bd1-9d20-6c233b907615.jpg?v=1760643630',
    inStock: true,
  },
  {
    id: 92,
    name: 'Fiend Always Fiending Fleece Short',
    category: 'Shirts & Hoodies',
    price: 39.99,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Stickers
  {
    id: 93,
    name: 'Fiend Always Fiending Stickers',
    category: 'Stickers',
    price: 2.00,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 94,
    name: 'Fiend Mills Stickers',
    category: 'Stickers',
    price: 2.00,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 95,
    name: 'Fiend No Love Large Sticker',
    category: 'Stickers',
    price: 1.50,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },
  {
    id: 96,
    name: 'Fiend No Love Small Sticker',
    category: 'Stickers',
    price: 1.00,
    image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350',
    inStock: true,
  },

  // Clearance Sale
  {
    id: 97,
    name: 'Fiend Team Bars SALE!',
    category: 'Clearance Sale',
    price: 39.99,
    image: 'https://fiendbmx.com/cdn/shop/files/TEAM_FOREST.jpg?v=1762719432',
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
              <ul className="space-y-2">
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
