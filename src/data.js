export const categories = [
  "Tea & Coffee", "Rolls", "Breakfast", "Indian Veg", "Indian Non-Veg", 
  "Chinese Noodles", "Chinese Rice", "Snacks & Starters", "Momos", "Combos"
];

export const menuItems = [
  {
    id: 1,
    name: "Chicken Noodles",
    category: "Chinese Noodles",
    price: "180",
    description: "Wok-tossed noodles with tender chicken and seasonal veggies.",
    tags: ["Popular", "Spicy"],
    image: "/src/assets/images/hero.png"
  },
  {
    id: 2,
    name: "Butter Chicken",
    category: "Indian Non-Veg",
    price: "320",
    description: "Rich and creamy tomato-based curry with succulent chicken pieces.",
    tags: ["Signature", "Mild"],
    image: "/src/assets/images/butter-chicken.png"
  },
  {
    id: 3,
    name: "Chilli Paneer",
    category: "Snacks & Starters",
    price: "240",
    description: "Crispy paneer cubes tossed in a spicy Indo-Chinese sauce.",
    tags: ["Veg", "Spicy"],
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Chicken Roll",
    category: "Rolls",
    price: "120",
    description: "Grilled chicken wrapped in a soft paratha with onions and sauces.",
    tags: ["Bestseller"],
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Chicken Lollipop",
    category: "Snacks & Starters",
    price: "280",
    description: "Juicy chicken wings shaped like lollipops, fried to perfection.",
    tags: ["Popular"],
    image: "/src/assets/images/signature.png"
  },
  {
    id: 6,
    name: "Steamed Momos",
    category: "Momos",
    price: "100",
    description: "Traditional Himalayan dumplings filled with seasoned chicken.",
    tags: ["Authentic"],
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 7,
    name: "Masala Chai",
    category: "Tea & Coffee",
    price: "30",
    description: "Traditional spiced Indian tea.",
    tags: ["Classic"],
    image: "/src/assets/images/masala-chai.png"
  },
  {
    id: 8,
    name: "Aloo Paratha",
    category: "Breakfast",
    price: "80",
    description: "Stuffed wheat flatbread with spicy potato filling.",
    tags: ["Veg"],
    image: "https://images.unsplash.com/photo-1601050690597-df056fb1d745?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 9,
    name: "Veg Fried Rice",
    category: "Chinese Rice",
    price: "150",
    description: "Fluffy rice wok-fried with fresh vegetables.",
    tags: ["Veg"],
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 10,
    name: "Dal Makhani",
    category: "Indian Veg",
    price: "220",
    description: "Creamy black lentils slow-cooked overnight.",
    tags: ["Veg", "Rich"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800"
  }
];

export const featuredDishes = [
  menuItems[0], menuItems[1], menuItems[3], menuItems[4]
];

export const features = [
  {
    title: "Tasty & Affordable",
    description: "Premium taste doesn't have to break the bank. Quality ingredients at great prices.",
    icon: "Utensils"
  },
  {
    title: "Cozy Ambience",
    description: "Perfect lighting and comfortable seating for your best dining experience.",
    icon: "Coffee"
  },
  {
    title: "Good for Groups",
    description: "Spacious seating arrangements ideal for family gatherings and friends.",
    icon: "Users"
  },
  {
    title: "Fast Service",
    description: "Your food served hot and fresh within minutes. No long waits.",
    icon: "Zap"
  }
];

export const combos = [
  {
    id: "veg-combo",
    name: "Veg Party Pack",
    price: "499",
    items: ["2 Veg Rolls", "1 Paneer Butter Masala", "2 Naan", "1 Coke"],
    description: "Perfect for a duo who loves veggies.",
    image: "/src/assets/images/combo.png"
  },
  {
    id: "non-veg-combo",
    name: "Non-Veg Feast",
    price: "799",
    items: ["1 Butter Chicken", "2 Chicken Biryani", "4 Garlic Naan", "1 Coke 1.25L"],
    description: "The ultimate treat for meat lovers.",
    image: "/src/assets/images/nonveg-feast.png"
  }
];
