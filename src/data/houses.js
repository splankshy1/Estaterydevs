const houses = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    ],
    title: "High-Rise Townhouse",
    status: "For Rent",
    price: "$1,239",
    location: "12 Fire Service, Owerri, Imo",
    beds: 4,
    baths: 3,
    garage: 2,
    yearBuilt: 2022,
    sqft: 1800,
    landAreaSize: "3766 Sq Ft",
    rooms: 5,
    propertyId: "HZ24",
    rating: 4,
    reviews: 2,
    amenities: ["HVAC", "Barbeque", "Laundry", "Dryer"],
    description: "A beautifully updated home with an open floor plan, modern kitchen, and spacious backyard perfect for entertaining.",
    agent: {
      name: "Rachel Dan",
      phone: "0485 326 258",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    ],
    title: "High-Rise Townhouse",
    status: "For Rent",
    price: "$1,239",
    location: "456 Oak Avenue, Njaba, Imo",
    beds: 4,
    baths: 3,
    garage: 2,
    yearBuilt: 2021,
    sqft: 2400,
    landAreaSize: "4200 Sq Ft",
    rooms: 6,
    propertyId: "HZ25",
    rating: 5,
    reviews: 4,
    amenities: ["HVAC", "Laundry", "Dryer"],
    description: "Spacious family home in a quiet neighborhood, featuring hardwood floors, a finished basement, and a two-car garage.",
    agent: {
      name: "Rachel Dan",
      phone: "0485 326 258",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    ],
    title: "High-Rise Townhouse",
    status: "For Rent",
    price: "$1,239",
    location: "789 Ninety-nine Lane, Orlu, Imo",
    beds: 4,
    baths: 3,
    garage: 1,
    yearBuilt: 2019,
    sqft: 1100,
    landAreaSize: "2000 Sq Ft",
    rooms: 4,
    propertyId: "HZ26",
    rating: 4,
    reviews: 1,
    amenities: ["HVAC", "Laundry"],
    description: "Cozy starter home close to downtown, with a renovated kitchen and a private patio.",
    agent: {
      name: "Rachel Dan",
      phone: "0485 326 258",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    ],
    title: "High-Rise Townhouse",
    status: "For Rent",
    price: "$1,239",
    location: "Southwestern Ontario, Ontario, Canada",
    beds: 4,
    baths: 3,
    garage: 2,
    yearBuilt: 2022,
    sqft: 1200,
    landAreaSize: "1800 Sq Ft",
    rooms: 5,
    propertyId: "HZ27",
    rating: 4,
    reviews: 2,
    amenities: ["HVAC", "Barbeque", "Laundry", "Dryer"],
    description: "Modern townhouse with sleek finishes and great natural light throughout.",
    agent: {
      name: "Rachel Dan",
      phone: "0485 326 258",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    ],
    title: "High-Rise Townhouse",
    status: "For Rent",
    price: "$1,239",
    location: "Southwestern Ontario, Ontario, Canada",
    beds: 4,
    baths: 3,
    garage: 2,
    yearBuilt: 2022,
    sqft: 1200,
    landAreaSize: "1800 Sq Ft",
    rooms: 5,
    propertyId: "HZ28",
    rating: 5,
    reviews: 3,
    amenities: ["HVAC", "Barbeque", "Laundry", "Dryer"],
    description: "Modern townhouse with sleek finishes and great natural light throughout.",
    agent: {
      name: "Rachel Dan",
      phone: "0485 326 258",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
    ],
    title: "High-Rise Townhouse",
    status: "For Rent",
    price: "$1,239",
    location: "Southwestern Ontario, Ontario, Canada",
    beds: 4,
    baths: 3,
    garage: 2,
    yearBuilt: 2022,
    sqft: 1200,
    landAreaSize: "1800 Sq Ft",
    rooms: 5,
    propertyId: "HZ29",
    rating: 4,
    reviews: 2,
    amenities: ["HVAC", "Barbeque", "Laundry", "Dryer"],
    description: "Modern townhouse with sleek finishes and great natural light throughout.",
    agent: {
      name: "Rachel Dan",
      phone: "0485 326 258",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  }
];

export default houses;
