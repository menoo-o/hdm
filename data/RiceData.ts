type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  variants?: string[]; // optional
  protein: string;
  cookTime: string;
};

const riceProducts: Product[] = [
  {
    id: 1,
    title: "Basmati Extra Long Grain",
    description:
      "Premium quality Basmati with extra-long slender grains, aromatic fragrance, and fluffy texture after cooking. Ideal for biryani and pulao.",
    image: "/rice/basmati-long.webp",
    variants: ["1121"],
    protein: "8g per 100g",
    cookTime: "15–20 minutes",
  },
  {
    id: 2,
    title: "Basmati Short Grain",
    description:
      "Aromatic short-grain Basmati rice with a slightly chewy texture. Perfect for traditional dishes, desserts, and everyday meals.",
    image: "/rice/basmati-short.jpg",
    protein: "7g per 100g",
    cookTime: "12–15 minutes",
  },
  {
    id: 3,
    title: "Basmati B1",
    description:
      "Affordable, good-quality Basmati with medium-long grains and classic aroma, suitable for daily cooking.",
    image: "/rice/basmatib1.jpg",
    protein: "7.5g per 100g",
    cookTime: "14–18 minutes",
  },
  {
    id: 4,
    title: "Sella",
    description:
      "Parboiled Basmati rice that retains its shape and texture well after cooking. Great for commercial kitchens and large gatherings.",
    image: "/rice/sella.jpg",
    protein: "8g per 100g",
    cookTime: "20–25 minutes",
  },
];

export default riceProducts;
