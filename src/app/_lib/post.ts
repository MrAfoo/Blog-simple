

export interface Reply {
    id: number;
    content: string;
    author: string;
    image?: string;
  
  }
  
  export interface Comment {
    id: number;
    content: string;
    author: string;
    replies: Reply[];
  
  }
  
  export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    comments: Comment[];
    image?: string;
  }
  
  const blogPosts = [
    {
      id: 1,
      title: "Crabapples: A Tree for All Seasons",
      image: "/tree.jpg",
      content: `Crabapple trees are small, deciduous trees known for their vibrant beauty throughout the year. In spring, they bloom with an abundance of colorful flowers, ranging from pink to white, creating a stunning display. During summer, their glossy green leaves provide ample shade. As autumn arrives, crabapple trees produce small, round fruits in hues of red, yellow, or orange, attracting wildlife. These fruits persist into winter, offering an added feature in colder months. The tree's structure is often compact and rounded, making it an ideal ornamental choice for gardens. Crabapples are hardy and adaptable, thriving in various climates. They also offer resistance to many pests and diseases. Despite their small size, these trees can be a focal point in landscapes. Their branches often have an elegant, arching appearance, contributing to their aesthetic appeal in all seasons.`,
      author: "Floret",
      comments: [
        
      ]
    },
    {
      id: 2,
      title: "How To Grow Zinnias",
      image: "/zinnias.jpg", 
      content: `Zinnias are easy-to-grow annual flowers that thrive in full sun and well-drained soil. Start by planting seeds directly in the ground after the last frost, or sow indoors 4-6 weeks before the last frost. Choose a location with at least 6 hours of sunlight daily for optimal growth. Space the seeds 8-12 inches apart to allow air circulation and prevent disease. Water the plants regularly, but avoid overhead watering to prevent fungal growth. Fertilize with a balanced fertilizer to encourage healthy blooms. Deadhead spent flowers to promote continuous flowering. Zinnias are drought-tolerant once established but should be watered during dry spells. They are resistant to pests and diseases but may occasionally attract aphids. Zinnias bloom from summer to fall, making them perfect for adding color to gardens.`,
      author: "Floret",
      comments: [
        {
          id: 3,
          content: "Dynamic routing in Next.js is a game-changer!",
          author: "Emily Clark",
          replies: [
            {
              id: 4,
              content: "Totally agree! It makes building complex apps much simpler.",
              author: "David Kim",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "How to Grow Dahlias from Seed ",
      image: "/dahlias.jpg",
      content: `Growing dahlias from seed is a rewarding way to enjoy unique blooms. Start by sowing seeds indoors 6-8 weeks before the last frost in seed trays filled with moist, well-draining potting mix. Place the trays in a warm, sunny spot or under grow lights, keeping the soil consistently moist. Once seedlings develop two sets of true leaves, transplant them into larger pots. After the last frost, harden off the seedlings by gradually exposing them to outdoor conditions. Plant them in a sunny, well-drained location, spacing them 12-18 inches apart. Dahlias prefer rich soil, so amend it with compost or a balanced fertilizer. Water regularly, ensuring the soil remains moist but not soggy. Pinch the tips to encourage bushier growth and more blooms. With proper care, dahlias will flower throughout summer and into fall.`,
      author: "Alice Johnson",
      comments: [
        {
          id: 4,
          content: "Very helpful guide, thanks!",
          author: "Emma Watson",
          replies: [
            {
              id: 4,
              content: "You're welcome!",
              author: "Alice Johnson",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Attracting Pollinaters into the Garden",
      image: "/attract.jpg",
      content: `Attracting pollinators to your garden is vital for healthy plant growth and biodiversity. Plant a variety of native, nectar-rich flowers that bloom throughout the growing season to provide a continuous food source. Include a mix of shapes, sizes, and colors to appeal to different pollinators like bees, butterflies, and hummingbirds. Avoid using chemical pesticides, as they can harm pollinators. Provide a water source, such as a shallow dish with stones for bees to land on. Create shelter by planting shrubs, leaving bare soil for ground-nesting bees, or installing bee houses. Incorporate herbs like lavender, mint, and thyme, which are pollinator favorites. Reduce lawn space and replace it with flowering plants or wildflowers. Keep your garden diverse with fruits, vegetables, and flowering trees. Let some plants go to seed, as pollinators are attracted to the flowers they produce. A welcoming garden helps sustain pollinator populations while enhancing the beauty of your outdoor space.`,
      author: "Bob Brown",
      comments: [
        {
          id: 5,
          content: "Dahlai Breeding Update ",
          author: "Floret",
          replies: [],
        },
      ],
    },
    {
      id: 5,
      title: "Attracting Pollinaters into the Garden",
      image: "/attract.jpg",
      content: `Attracting pollinators to your garden is vital for healthy plant growth and biodiversity. Plant a variety of native, nectar-rich flowers that bloom throughout the growing season to provide a continuous food source. Include a mix of shapes, sizes, and colors to appeal to different pollinators like bees, butterflies, and hummingbirds. Avoid using chemical pesticides, as they can harm pollinators. Provide a water source, such as a shallow dish with stones for bees to land on. Create shelter by planting shrubs, leaving bare soil for ground-nesting bees, or installing bee houses. Incorporate herbs like lavender, mint, and thyme, which are pollinator favorites. Reduce lawn space and replace it with flowering plants or wildflowers. Keep your garden diverse with fruits, vegetables, and flowering trees. Let some plants go to seed, as pollinators are attracted to the flowers they produce. A welcoming garden helps sustain pollinator populations while enhancing the beauty of your outdoor space.`,
      author: "Sarah Davis",
      comments: [
        {
          id: 6,
          content: "Can you include an example?",
          author: "Pam Beesly",
          replies: [
            {
              id: 5,
              content: "Sure, I'll add one in the next update.",
              author: "Sarah Davis",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Attracting Pollinaters into the Garden",
      image: "/attract.jpg",
      content: `Attracting pollinators to your garden is vital for healthy plant growth and biodiversity. Plant a variety of native, nectar-rich flowers that bloom throughout the growing season to provide a continuous food source. Include a mix of shapes, sizes, and colors to appeal to different pollinators like bees, butterflies, and hummingbirds. Avoid using chemical pesticides, as they can harm pollinators. Provide a water source, such as a shallow dish with stones for bees to land on. Create shelter by planting shrubs, leaving bare soil for ground-nesting bees, or installing bee houses. Incorporate herbs like lavender, mint, and thyme, which are pollinator favorites. Reduce lawn space and replace it with flowering plants or wildflowers. Keep your garden diverse with fruits, vegetables, and flowering trees. Let some plants go to seed, as pollinators are attracted to the flowers they produce. A welcoming garden helps sustain pollinator populations while enhancing the beauty of your outdoor space.`,
      author: "Chris Evans",
      comments: [
        {
          id: 7,
          content: "This was exactly what I needed, thanks!",
          author: "Jim Halpert",
          replies: [],
        },
      ],
    },
    
  ];
  
  export default blogPosts;