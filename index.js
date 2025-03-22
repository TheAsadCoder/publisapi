const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/food/fruits", (req, res) => {
  res.json({
    success: true,
    status: 200,
    data: [
      {
        id: 1,
        name: "Apple",
        category: "Fruits",
        price: 120,
        quantity: 100,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_640.jpg",
        description: "A sweet, crisp fruit perfect for snacking or baking.",
      },
      {
        id: 2,
        name: "Banana",
        category: "Fruits",
        price: 130,
        quantity: 150,
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/10/18/09/50/fruit-6720597_640.jpg",
        description: "A soft, creamy fruit that's great for smoothies and snacks.",
      },
      {
        id: 3,
        name: "Orange",
        category: "Fruits",
        price: 90,
        quantity: 200,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_640.jpg",
        description: "A juicy, tangy fruit rich in vitamin C.",
      },
      {
        id: 4,
        name: "Strawberry",
        category: "Fruits",
        price: 150,
        quantity: 80,
        imageUrl:
          "https://cdn.pixabay.com/photo/2022/05/27/10/35/strawberry-7224875_640.jpg",
        description: "A sweet, red berry perfect for desserts and salads.",
      },
      {
        id: 5,
        name: "Grapes",
        category: "Fruits",
        price: 300,
        quantity: 120,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/08/17/09/57/fruit-bowl-1600003_640.jpg",
        description: "Small, juicy fruits that are great for snacking and making wine.",
      },
      {
        id: 6,
        name: "Pineapple",
        category: "Fruits",
        price: 500,
        quantity: 60,
        imageUrl:
          "https://cdn.pixabay.com/photo/2019/05/27/15/18/umbrella-4232928_640.jpg",
        description: "A tropical fruit with a sweet and tangy flavor.",
      },
      {
        id: 7,
        name: "Mango",
        category: "Fruits",
        price: 80,
        quantity: 200,
        imageUrl:
          "https://cdn.pixabay.com/photo/2020/05/15/00/11/mango-5171747_640.jpg",
        description: "A juicy, sweet fruit that's perfect for smoothies and desserts.",
      },
      {
        id: 8,
        name: "Watermelon",
        category: "Fruits",
        price: 70,
        quantity: 250,
        imageUrl:
          "https://cdn.pixabay.com/photo/2020/05/21/18/15/watermelon-5201959_640.jpg",
        description: "A refreshing, hydrating fruit perfect for hot summer days.",
      },
      {
        id: 9,
        name: "Blueberry",
        category: "Fruits",
        price: 50,
        quantity: 300,
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/09/08/05/36/fruit-6605641_640.jpg",
        description: "Small, sweet berries that are great for baking and snacking.",
      },
      {
        id: 10,
        name: "Peach",
        category: "Fruits",
        price: 200,
        quantity: 100,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/07/21/22/11/apricots-2527193_1280.jpg",
        description: "A juicy, sweet fruit with a soft, fuzzy skin.",
      },
      {
        id: 11,
        name: "Cherry",
        category: "Fruits",
        price: 60,
        quantity: 400,
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/06/15/23/27/cherries-3477927_640.jpg",
        description: "Small, sweet fruits that are perfect for snacking and baking.",
      },
      {
        id: 12,
        name: "Kiwi",
        category: "Fruits",
        price: 80,
        quantity: 350,
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/10/17/16/44/kiwi-6718889_640.jpg",
        description: "A small, tangy fruit with a fuzzy skin and green flesh.",
      },
      {
        id: 13,
        name: "Papaya",
        category: "Fruits",
        price: 40,
        quantity: 500,
        imageUrl:
          "https://cdn.pixabay.com/photo/2023/01/27/13/12/papaya-7748668_1280.jpg",
        description: "A tropical fruit with a sweet, musky flavor.",
      },
      {
        id: 14,
        name: "Plum",
        category: "Fruits",
        price: 250,
        quantity: 50,
        imageUrl:
          "https://cdn.pixabay.com/photo/2022/07/02/17/29/cherry-plum-7297682_640.jpg",
        description: "A juicy, sweet fruit with a smooth skin and a pit inside.",
      },
      {
        id: 15,
        name: "Pear",
        category: "Fruits",
        price: 100,
        quantity: 150,
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/07/05/23/12/pear-3519397_640.jpg",
        description: "A sweet, juicy fruit with a smooth skin and a grainy texture.",
      },
      {
        id: 16,
        name: "Pomegranate",
        category: "Fruits",
        price: 300,
        quantity: 80,
        imageUrl:
          "https://cdn.pixabay.com/photo/2022/10/03/08/09/pomegranate-7495289_640.jpg",
        description: "A fruit with a tough outer skin and juicy, seed-filled interior.",
      },
      {
        id: 17,
        name: "Lemon",
        category: "Fruits",
        price: 20,
        quantity: 600,
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/01/23/18/20/lemon-squeezer-609273_640.jpg",
        description: "A tangy, acidic fruit perfect for adding flavor to dishes.",
      },
      {
        id: 18,
        name: "Coconut",
        category: "Fruits",
        price: 150,
        quantity: 90,
        imageUrl:
          "https://cdn.pixabay.com/photo/2016/07/06/20/56/coconut-1501334_1280.jpg",
        description: "A tropical fruit with a hard shell and sweet, creamy flesh.",
      },
      {
        id: 19,
        name: "Avocado",
        category: "Fruits",
        price: 200,
        quantity: 70,
        imageUrl:
          "https://cdn.pixabay.com/photo/2024/01/09/22/11/avocado-8498520_1280.jpg",
        description: "A creamy, nutrient-rich fruit perfect for salads and spreads.",
      },
      {
        id: 20,
        name: "Guava",
        category: "Fruits",
        price: 60,
        quantity: 300,
        imageUrl:
          "https://cdn.pixabay.com/photo/2022/01/26/03/20/fruits-6967739_1280.jpg",
        description: "A tropical fruit with a sweet, musky flavor and a soft, grainy texture.",
      },
    ],
    message: "Fruit items retrieved successfully",
  });
});

// Error handling middleware
app.use((_, res) => {
  res.status(404).json({ success: false, status: 400, message: "Not Found" });
});

app.use((err, _, res) => {
  console.error(err.stack);
  res.status(500).json({ success: false, status: 500, error: err.message });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("API endpoints:");
  console.log(`GET /api/food/items`);
});
