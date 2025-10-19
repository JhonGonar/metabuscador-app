export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  img?: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Auriculares XL",
    category: "Audio",
    price: 49.99,
    img: "/products/headphones.jpg",
    description:
      "Auriculares XL (Audio): auriculares confortables y potentes diseñados para ofrecer un sonido claro y graves equilibrados. Ideales para escuchar música, llamadas y uso diario con buena relación calidad-precio.",
  },
  {
    id: "p2",
    name: "Monitor 24\"",
    category: "Pantallas",
    price: 159.99,
    img: "/products/monitor.jpg",
    description:
      "Monitor 24\" (Pantallas): pantalla de 24 pulgadas con colores nítidos y buen contraste, pensada para trabajo y entretenimiento. Excelente para productividad y multimedia en espacios de trabajo domésticos.",
  },
  {
    id: "p3",
    name: "Teclado Mecánico",
    category: "Periféricos",
    price: 89.99,
    img: "/products/keyboard.jpg",
    description:
      "Teclado Mecánico (Periféricos): teclado robusto con interruptores mecánicos que ofrecen respuesta táctil y durabilidad. Perfecto para quienes escriben mucho o buscan una experiencia de juego más precisa.",
  },
  {
    id: "p4",
    name: "Mouse Inalámbrico",
    category: "Periféricos",
    price: 29.99,
    img: "/products/mouse.jpg",
    description:
      "Mouse Inalámbrico (Periféricos): ratón ligero y ergonómico con conectividad inalámbrica estable, ideal para uso diario en oficina y portátil. Batería de larga duración y diseño compacto.",
  },
  {
    id: "p5",
    name: "Barra de Sonido",
    category: "Audio",
    price: 129.99,
    img: "/products/soundbar.jpg",
    description:
      "Barra de Sonido (Audio): sistema compacto que mejora significativamente el audio de tu TV o escritorio, ofreciendo diálogos más claros y una escena sonora más envolvente.",
  },
  {
    id: "p6",
    name: "Laptop 14\"",
    category: "Computadoras",
    price: 999.99,
    img: "/products/laptop.jpg",
    description:
      "Laptop 14\" (Computadoras): portátil ligero y potente para productividad y movilidad, con buena autonomía y rendimiento equilibrado para tareas profesionales y multimedia.",
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));
