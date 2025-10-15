export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  img?: string;
};

export const products: Product[] = [
  { id: "p1", name: "Auriculares XL", category: "Audio", price: 49.99, img: "/products/headphones.jpg" },
  { id: "p2", name: "Monitor 24\"", category: "Pantallas", price: 159.99, img: "/products/monitor.jpg" },
  { id: "p3", name: "Teclado Mecánico", category: "Periféricos", price: 89.99, img: "/products/keyboard.jpg" },
  { id: "p4", name: "Mouse Inalámbrico", category: "Periféricos", price: 29.99, img: "/products/mouse.jpg" },
  { id: "p5", name: "Barra de Sonido", category: "Audio", price: 129.99, img: "/products/soundbar.jpg" },
  { id: "p6", name: "Laptop 14\"", category: "Computadoras", price: 999.99, img: "/products/laptop.jpg" },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));
