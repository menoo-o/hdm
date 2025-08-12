type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  variants?: string[]; // optional
  protein: string;
  cookTime: string;
};

const productsData: Product[] = [
  {
    id: 2,
    title: "Daal Chana",
    description: "Premium chickpeas available in regular, super, and jumbo variants.",
    image: "/products/daal-chaana.webp",
    variants: ["Regular", "Super", "Jumbo"],
    protein: "19g per 100g",
    cookTime: "30–40 mins",
  },
  {
    id: 3,
    title: "Daal Masoor (Sabit)",
    description: "Whole red lentils with skin, great for robust cooking.",
    image: "/products/masoor-sabit.webp",
    protein: "25g per 100g",
    cookTime: "25–30 mins",
  },
  {
    id: 4,
    title: "Daal Malka Masoor",
    description: "Split red lentils, uniform size, cooks fast, ideal for bulk kitchens.",
    image: "/products/masoor-malka.webp",
    protein: "24g per 100g",
    cookTime: "10–15 mins",
  },
  {
    id: 5,
    title: "Daal Moong (Sabit)",
    description: "Whole green moong beans, perfect for traditional recipes.",
    image: "/products/daal-moong-sabat.webp",
    protein: "23g per 100g",
    cookTime: "30–35 mins",
  },
  {
    id: 6,
    title: "Daal Moong (Chilka)",
    description: "Split moong with skin, preferred in desi-style dals.",
    image: "/products/daal-moong-chilka.webp",
    protein: "24g per 100g",
    cookTime: "20–25 mins",
  },
  {
    id: 7,
    title: "Daal Moong (Washed)",
    description: "Skinless split moong, fast cooking, bulk-friendly packaging.",
    image: "/products/daal-moong-wash.webp",
    protein: "25g per 100g",
    cookTime: "10–15 mins",
  },
  {
    id: 8,
    title: "Red Beans",
    description: "Large red rajma beans, consistent quality for restaurant use.",
    image: "/products/red-beans.webp",
    protein: "22g per 100g",
    cookTime: "45–60 mins",
  },
  {
    id: 9,
    title: "Brown Beans (Chitri)",
    description: "Popular Pakistani variety, used in mixed dals and gravies.",
    image: "/products/chitri-lobia.jpg",
    protein: "21g per 100g",
    cookTime: "40–50 mins",
  },
  {
    id: 10,
    title: "White Beans",
    description: "Soft-cooking variety for soups and bulk meal prep.",
    image: "/products/white-beans.webp",
    protein: "21g per 100g",
    cookTime: "35–45 mins",
  },
  {
    id: 11,
    title: "Daal Mash (Chilka)",
    description: "Split urad dal with skin, ideal for hearty dals.",
    image: "/products/daal-mash-chilka.webp",
    protein: "24g per 100g",
    cookTime: "25–30 mins",
  },
  {
    id: 12,
    title: "Daal Mash (Sabit)",
    description: "Whole urad beans, preferred for fermentation-based dishes.",
    image: "/products/mash-sabit.jpg",
    protein: "25g per 100g",
    cookTime: "30–35 mins",
  },
  {
    id: 13,
    title: "Black Chana",
    description: "Kala chana in bareek and motta varieties. Bulk available.",
    image: "/products/kala-chana.webp",
    variants: ["Bareek", "Motta"],
    protein: "20g per 100g",
    cookTime: "35–45 mins",
  },
  {
    id: 14,
    title: "White Chana",
    description: "Desi chickpeas available in bareek and motta sizes.",
    image: "/products/white-chana.webp",
    variants: ["Bareek", "Motta"],
    protein: "19g per 100g",
    cookTime: "30–40 mins",
  },
];

export default productsData;
