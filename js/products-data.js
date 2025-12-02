// Products Database
// This file contains all product data for the Nourish menu

const products = [
  // Salads
  {
    id: 1,
    name: "Quinoa Power Salad",
    category: "Salads",
    price: 14.5,
    description:
      "Quinoa, chickpeas, cucumber, tomatoes, and feta with lemon dressing.",
    dietary: ["Gluten-Free"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
  },
  {
    id: 2,
    name: "Classic Caesar Salad",
    category: "Salads",
    price: 12.99,
    description:
      "Crisp romaine lettuce, parmesan, croutons, and Caesar dressing.",
    dietary: [],
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
  },
  {
    id: 3,
    name: "Avocado Power Salad",
    category: "Salads",
    price: 11.5,
    description: "Creamy avocado and zesty lime vinaigrette.",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
  },
  {
    id: 4,
    name: "Kale & Apple Salad",
    category: "Salads",
    price: 13.0,
    description:
      "Fresh kale, crisp apples, walnuts, and honey mustard dressing.",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400",
  },

  // Bowls
  {
    id: 5,
    name: "Avocado Harvest Bowl",
    category: "Bowls",
    price: 12.5,
    description:
      "Quinoa, avocado, roasted sweet potatoes, and a zesty lemon vinaigrette.",
    dietary: ["Vegan", "Gluten-Free"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHKtRMrOV-7cm5MMoMQmmUbd_cxDVIcsMpzJNYN4PtKVShUbQChfOB7Fn5vUadYIFYIxrLBTWzBphHkftaMpA6WpC9sbay829gp3SdcDoPPRZJVW8D8Z2yPOpY6YxD-U9Tp15yYzcOTCt8i51qU9EnW_a0lycLadD3kkdpYd8WUoX13Ei59IrNwnLbgXIZ6Tl3wfM_MfRCsLG-ClSis3wcQYti9eAg5w1wsR3C5j3DJvb5vclHCRRykaTJDc0Gc5mC0QYP8cbvx1M",
  },
  {
    id: 6,
    name: "Mediterranean Quinoa Bowl",
    category: "Bowls",
    price: 12.99,
    description: "Feta, olives, and lemon-herb dressing.",
    dietary: ["Gluten-Free"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
  },
  {
    id: 7,
    name: "Spicy Thai Noodle Bowl",
    category: "Bowls",
    price: 13.5,
    description: "Rich peanut sauce, rice noodles, and crisp vegetables.",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
  },
  {
    id: 8,
    name: "Teriyaki Tofu Bowl",
    category: "Bowls",
    price: 14.0,
    description: "Glazed tofu, brown rice, edamame, and teriyaki sauce.",
    dietary: ["Vegan"],
    image:
      "https://theavotree.co.nz/wp-content/uploads/2022/08/Teriyaki-tofu-sesame-avocado-rice-poke-bowl-6-scaled.jpg",
  },

  // Sandwiches
  {
    id: 9,
    name: "Green Goddess Sandwich",
    category: "Sandwiches",
    price: 10.0,
    description:
      "Smashed chickpea, avocado, and sprouts on toasted whole wheat.",
    dietary: ["Vegan"],
    image:
      "https://www.sunsetgrown.com/wp-content/uploads/2021/05/Sunset-Social-July-Green-Goddess-Sandwich-Web.jpg",
  },
  {
    id: 10,
    name: "Margherita Pizza",
    category: "Sandwiches",
    price: 15.5,
    description: "Fresh mozzarella, basil, and tomato on artisan crust.",
    dietary: [],
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400",
  },
  {
    id: 11,
    name: "Turkey & Avocado Wrap",
    category: "Sandwiches",
    price: 11.5,
    description:
      "Sliced turkey, fresh avocado, lettuce, and mayo in a whole wheat wrap.",
    dietary: [],
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
  },
  {
    id: 12,
    name: "Caprese Sandwich",
    category: "Sandwiches",
    price: 10.5,
    description:
      "Fresh mozzarella, tomatoes, basil, and balsamic glaze on ciabatta.",
    dietary: [],
    image:
      "https://ohsweetbasil.com/wp-content/uploads/balsamic-glaze-grilled-caprese-sandwich-recipe-6-scaled.jpg",
  },

  // Soups
  {
    id: 13,
    name: "Sunset Lentil Soup",
    category: "Soups",
    price: 8.0,
    description:
      "A hearty and warming soup with red lentils, carrots, and turmeric.",
    dietary: ["Vegan", "Gluten-Free"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3JhR0o4r89eOTMiwkiCGD2nsg7lHyyfXKNf2xNnfW9qaci8CH8_L4PiEJ1NElJNyUdDVh8ix3jhlknhkzzy6_O1xecmSPeRcl34FnOVJlxlPzUy68Ioc2KnTGdpdL0GpEX2-IMz0qFwkCUu0yq5oD_TCvHicXom7D1jVucsp-GdWlW8MuShZNR2CPzLJJt5vMKXlAwin2hRbfNR76ISNJ_LWIPBRyUVdXQdve0V6VohvtiOLfNL3xtrCQU4kFyeh-T-ao7AQuKik",
  },
  {
    id: 14,
    name: "Tomato Basil Soup",
    category: "Soups",
    price: 7.5,
    description: "Classic tomato soup with fresh basil and cream.",
    dietary: ["Gluten-Free"],
    image:
      "https://cdn.loveandlemons.com/wp-content/uploads/2020/09/tomato-basil-soup.jpg",
  },
  {
    id: 15,
    name: "Butternut Squash Soup",
    category: "Soups",
    price: 8.5,
    description: "Creamy roasted butternut squash with a hint of cinnamon.",
    dietary: ["Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400",
  },
  {
    id: 16,
    name: "Chicken Noodle Soup",
    category: "Soups",
    price: 9.0,
    description: "Homestyle chicken soup with vegetables and egg noodles.",
    dietary: [],
    image:
      "https://www.thelifejolie.com/wp-content/uploads/2023/01/Featured-Hearty-Chicken-Noodle-Soup-Recipe-The-Life-Jolie.jpg",
  },

  // Drinks
  {
    id: 17,
    name: "Berry Bliss Smoothie",
    category: "Drinks",
    price: 7.5,
    description: "A vibrant blend of mixed berries, banana, and almond milk.",
    dietary: ["Vegan", "Gluten-Free"],
    image:
      "https://s.lightorangebean.com/media/20250702051049/berry-bliss-smoothie_done.jpg",
  },
  {
    id: 18,
    name: "Green Detox Juice",
    category: "Drinks",
    price: 9.5,
    description: "A refreshing mix of kale, spinach, apple, and cucumber.",
    dietary: ["Vegan", "Gluten-Free"],
    image:
      "https://d3s8tbcesxr4jm.cloudfront.net/recipe-images/ic-1/vibrant-green-kale-and-apple-detox-juice.jpg",
  },
  {
    id: 19,
    name: "Mango Tango Smoothie",
    category: "Drinks",
    price: 8.0,
    description: "Sweet mango, pineapple, coconut milk, and a touch of lime.",
    dietary: ["Vegan", "Gluten-Free"],
    image:
      "https://www.herbalife.com/dmassets/global-reusable-assets/images/li-mango-protein-shake.jpg",
  },
  {
    id: 20,
    name: "Cold Brew Coffee",
    category: "Drinks",
    price: 4.5,
    description: "Smooth, rich cold brew coffee served over ice.",
    dietary: ["Vegan", "Gluten-Free"],
    image:
      "https://lifesimplified.gorenje.com/wp-content/uploads/2024/06/gorenje-blog-refreshing_cold_brew_coffee.jpg",
  },

  // Snacks
  {
    id: 21,
    name: "Hummus & Veggie Platter",
    category: "Snacks",
    price: 6.5,
    description: "Creamy hummus with fresh-cut vegetables and pita chips.",
    dietary: ["Vegan"],
    image:
      "https://www.eatingbirdfood.com/wp-content/uploads/2019/06/mezze-platter-2-670x907.jpg",
  },
  {
    id: 22,
    name: "Mixed Nuts & Seeds",
    category: "Snacks",
    price: 5.0,
    description:
      "A healthy mix of almonds, cashews, pumpkin seeds, and dried cranberries.",
    dietary: ["Vegan", "Gluten-Free", "Keto"],
    image:
      "https://nfcihospitality.com/wp-content/uploads/2024/09/Mixed-Nut-and-Seed-Smoothie-bowl.webp",
  },
  {
    id: 23,
    name: "Energy Balls",
    category: "Snacks",
    price: 4.0,
    description: "Oat, peanut butter, honey, and chocolate chip energy bites.",
    dietary: [],
    image:
      "https://www.lurch.de/media/b1/99/26/1693407966/energy-schoko-kokos-rezept.jpg?ts=1753778525",
  },
  {
    id: 24,
    name: "Kale Chips",
    category: "Snacks",
    price: 5.5,
    description: "Crispy baked kale chips seasoned with sea salt.",
    dietary: ["Vegan", "Gluten-Free", "Keto"],
    image:
      "https://fodmap-publicsite-us-east-2.s3.amazonaws.com/production/media/images/Kale_Chips.original.jpg",
  },

  // Wraps
  {
    id: 25,
    name: "Roasted Veggie Wrap",
    category: "Wraps",
    price: 10.99,
    description: "Seasonal vegetables with hummus in a spinach tortilla.",
    dietary: ["Vegan"],
    image:
      "https://i0.wp.com/s.lightorangebean.com/media/20240914163108/Roasted-Veggie-Hummus-Wrap_-done.png?resize=480%2C270&quality=80&ssl=1",
  },
  {
    id: 26,
    name: "Mediterranean Wrap",
    category: "Wraps",
    price: 11.5,
    description:
      "Grilled chicken, feta, olives, cucumbers, and tzatziki sauce.",
    dietary: [],
    image:
      "https://sailorbailey.com/wp-content/uploads/2024/05/Mediterranean-Chicken-WrapsKey.jpg",
  },
  {
    id: 27,
    name: "Buffalo Cauliflower Wrap",
    category: "Wraps",
    price: 10.5,
    description:
      "Spicy buffalo cauliflower, lettuce, tomato, and ranch dressing.",
    dietary: ["Vegan"],
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400",
  },
  {
    id: 28,
    name: "Asian Fusion Wrap",
    category: "Wraps",
    price: 12.0,
    description: "Teriyaki chicken, cabbage slaw, and sesame ginger dressing.",
    dietary: [],
    image:
      "https://www.nzherald.co.nz/resizer/v2/HNT2JAVOENGPDCYPVAP7IN6VOE.jpg?auth=0c94e4eb137814ffd5c46a22ad47eac8c82a054604bdaa2686021ba090c6bf2f&width=640&height=427&quality=70&smart=true",
  },
];
