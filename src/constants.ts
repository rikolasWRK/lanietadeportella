/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product } from "./types";

export const PRODUCT_CATALOG: Product[] = [
  // --- TORTAS DE VITRINA ---
  {
    id: "torta-rosa-macarons",
    name: "Torta Rosa de Macarons",
    category: "tortas",
    description: "Nuestra creación insignia. Delicado bizcocho de vainilla francesa embebido en almíbar de fresas, relleno con crema de chocolate blanco sedoso y decorado con flores naturales frescas y macarons artesanales.",
    price: 145,
    image: "/torta-mama.jpeg",
    tagline: "El corazón de cada celebración",
    ingredients: ["Harina de repostería premium", "Crema de chocolate blanco belga", "Fresas frescas seleccionadas", "Almendra molida para macarons", "Flores orgánicas comestibles"],
    features: ["Perfecto para cumpleaños", "Diseño sofisticado y femenino", "Hecho en el día de la entrega"]
  },
  {
    id: "torta-matilda",
    name: "Torta Matilda de Chocolate",
    category: "tortas",
    description: "Para los amantes del chocolate real. Tres capas de bizcocho húmedo de cacao de Tarapoto (70% pureza), relleno y cubierto de un fudge de olla cremoso e irresistible.",
    price: 135,
    image: "/cupcake-gigante.jpeg",
    tagline: "Un clásico de pura indulgencia",
    ingredients: ["Cacao orgánico de San Martín (70%)", "Mantequilla artesanal", "Leche condensada de olla", "Vainilla de vaina"],
    features: ["Intenso sabor a cacao", "Estructura sumamente húmeda", "Favorito de niños y adultos"]
  },
  {
    id: "torta-tres-leches-pisco",
    name: "Tres Leches al Pisco",
    category: "tortas",
    description: "Tradición con carácter peruano. Bizcochuelo extra esponjoso bañado en nuestra mezcla secreta de tres leches perfumadas con un toque selecto de Pisco Quebranta premium, coronado con merengue italiano tostado.",
    price: 125,
    image: "/torta-mama.jpeg",
    tagline: "Tradición con alma peruana",
    ingredients: ["Leche evaporada", "Leche condensada", "Crema de leche premium", "Pisco Quebranta selecto", "Merengue italiano tostado"],
    features: ["Textura sumamente jugosa", "Toque sutil de pisco", "Ideal para postre familiar"]
  },
  {
    id: "cheesecake-sauco",
    name: "Cheesecake Horneado de Saúco",
    category: "tortas",
    description: "La frescura de los Andes en Tarapoto. Base crocante de galletas de vainilla y mantequilla, relleno cremoso horneado lentamente de queso crema premium, cubierto con una mermelada rústica artesanal de saúco orgánico.",
    price: 120,
    image: "/cupcake-gigante.jpeg",
    tagline: "Equilibrio perfecto entre dulce y ácido",
    ingredients: ["Queso crema de alta densidad", "Mermelada rústica de saúco", "Galletas de mantequilla", "Ralladura de limón sutil"],
    features: ["Textura cremosa y densa", "Mermelada de frutas silvestres", "Postre fresco e ideal para la tarde"]
  },

  // --- CUPCAKES DE AUTOR ---
  {
    id: "cupcakes-amor",
    name: "Cupcakes de Amor de Autor",
    category: "cupcakes",
    description: "El regalo perfecto para expresar sentimientos. Seis deliciosos cupcakes de Red Velvet húmedo, coronados con un copete sedoso de frosting de queso crema y decorados con románticos toppers moldeados a mano.",
    price: 48,
    image: "/cupcakes-caja6.jpeg",
    tagline: "Pequeños bocados de afecto",
    ingredients: ["Bizcocho Red Velvet", "Mantequilla artesanal", "Queso crema premium", "Toppers de azúcar moldeados a mano"],
    features: ["Caja de regalo premium", "Toppers personalizados incluidos", "Ideal para aniversarios y mesarios"]
  },
  {
    id: "cupcakes-zanahoria",
    name: "Cupcakes de Zanahoria & Nueces",
    category: "cupcakes",
    description: "Esponjosos y aromáticos. Cupcakes preparados con zanahoria rallada fina, nueces picadas, canela de Ceilán, y nuez moscada, decorados con una flor de frosting y pecanas caramelizadas.",
    price: 42,
    image: "/cupcakes-caja3.jpeg",
    tagline: "Especias que calientan el alma",
    ingredients: ["Zanahorias dulces", "Nueces picadas", "Canela de Ceilán", "Frosting de queso crema", "Pecanas caramelizadas"],
    features: ["Contiene frutos secos", "Textura rústica y húmeda", "Ideal para acompañar con café"]
  },
  {
    id: "cupcakes-ferrero",
    name: "Cupcakes Ferrero & Avellanas",
    category: "cupcakes",
    description: "El súmmum del chocolate. Cupcakes de chocolate belga rellenos con un núcleo cremoso de Nutella, cubiertos con buttercream de chocolate y coronados con un bombón Ferrero Rocher y lluvia de avellanas tostadas.",
    price: 52,
    image: "/cupcake-individual.jpeg",
    tagline: "Un deleite crujiente y cremoso",
    ingredients: ["Chocolate belga", "Crema Nutella", "Bombones Ferrero Rocher", "Avellanas tostadas picadas"],
    features: ["Doble ración de chocolate", "Centro líquido/cremoso", "Topping premium crocante"]
  },

  // --- BOCADITOS FINOS ---
  {
    id: "macarons-paris-tarapoto",
    name: "Macarons de París a Tarapoto",
    category: "bocaditos",
    description: "Elegancia francesa con insumos locales. Caja surtida de doce macarons artesanales crujientes por fuera y masticables por dentro. Rellenos con ganaches infusionados con maracuyá, cacao de San Martín, coco y fresas.",
    price: 40,
    image: "/caja-regalo.jpeg",
    tagline: "El arte de la repostería francesa",
    ingredients: ["Harina de almendras extra fina", "Claras de huevo de corral", "Azúcar glass", "Rellenos frutales y ganaches de chocolate"],
    features: ["Libre de gluten de forma natural", "Sabores surtidos y vibrantes", "Presentación en estuche de boutique"]
  },
  {
    id: "trufas-cacao-tarapoto",
    name: "Trufas de Cacao San Martín",
    category: "bocaditos",
    description: "Pequeñas gemas de chocolate. Diez trufas elaboradas artesanalmente con ganache de cacao orgánico de Tarapoto (70%) infusionado con un toque sutil de café de especialidad y espolvoreadas con cacao puro.",
    price: 35,
    image: "/caja-regalo.jpeg",
    tagline: "La pureza de nuestra tierra",
    ingredients: ["Cacao orgánico local (70%)", "Crema de leche premium", "Mantequilla de pastura", "Polvo de cacao puro"],
    features: ["Intenso sabor artesanal", "Derretimiento sedoso en boca", "Ideal para regalo corporativo o personal"]
  },
  {
    id: "alfajores-maicena-premium",
    name: "Alfajores de Maicena Premium",
    category: "bocaditos",
    description: "Se deshacen en el paladar. Doce alfajores tradicionales de masa de maicena extra fina de mantequilla, rellenos generosamente con nuestro manjar blanco de olla cocinado por horas y espolvoreados con azúcar impalpable.",
    price: 30,
    image: "/caja-regalo.jpeg",
    tagline: "El sabor del dulce de hogar",
    ingredients: ["Mantequilla artesanal", "Fécula de maíz extra fina", "Manjar blanco casero de olla", "Azúcar impalpable"],
    features: ["Masa sumamente blanda", "Relleno abundante tradicional", "Libre de conservantes"]
  },

  // --- CAFÉ DON ANTONIO ---
  {
    id: "cafe-don-antonio-grano",
    name: "Café de Especialidad Don Antonio (250g)",
    category: "cafe",
    description: "Nuestra herencia cafetalera. Café de especialidad en grano o molido, variedad Arábica de origen único cosechada a más de 1,500 msnm en las zonas altas de la región San Martín. Tueste medio con notas de cata a chocolate, avellanas y un final cítrico de mandarina.",
    price: 38,
    image: "/cafe-taza.jpeg",
    tagline: "Tradición cafetalera de altura",
    ingredients: ["Café de especialidad Arábica 100% orgánico", "Origen: Provincias altas de San Martín", "Proceso: Lavado rústico"],
    features: ["Puntaje de taza >84 SCA", "Aroma sumamente fragante", "Tueste fresco semanal"]
  },
  {
    id: "capuccino-almendras",
    name: "Capuccino Don Antonio con Almendras",
    category: "cafe",
    description: "Cremoso y aromático. Doble shot de espresso Don Antonio combinado con leche de almendras emulsionada a la temperatura perfecta, decorado con arte latte y una lluvia ligera de cacao de Tarapoto.",
    price: 12,
    image: "/cafe-taza.jpeg",
    tagline: "El balance de la mañana",
    ingredients: ["Shot doble de espresso Don Antonio", "Leche de almendras emulsionada", "Polvo de cacao de San Martín"],
    features: ["Libre de lácteos", "Doble dosis de cafeína", "Servido caliente en taza de cerámica"]
  }
];

// --- OPTIONS FOR CUSTOM CAKE BUILDER ---
export const CAKE_SIZES = [
  { id: "size-mini", name: "Mini Torta", portions: "6 a 8 porciones", price: 75 },
  { id: "size-medium", name: "Torta Mediana", portions: "12 a 15 porciones", price: 135 },
  { id: "size-large", name: "Torta Grande", portions: "20 a 25 porciones", price: 195 },
  { id: "size-monumental", name: "Torta de Gala", portions: "35 a 40 porciones", price: 290 }
];

export const CAKE_BISCUITS = [
  { id: "biscuit-red-velvet", name: "Red Velvet", description: "Suave, húmedo con un ligero toque de cacao y color carmín clásico." },
  { id: "biscuit-chocolate-belga", name: "Chocolate Intenso", description: "Bizcocho súper húmedo elaborado con cacao orgánico de Tarapoto al 70%." },
  { id: "biscuit-vainilla", name: "Vainilla Francesa", description: "Bizcocho tradicional esponjoso perfumado con vainas de vainilla natural." },
  { id: "biscuit-zanahoria", name: "Zanahoria & Especias", description: "Bizcocho rústico de zanahoria con canela, nuez moscada y pecanas crujientes." }
];

export const CAKE_FILLINGS = [
  { id: "filling-manjar", name: "Manjar Blanco de Olla", description: "Dulce de leche tradicional cocinado lentamente para una textura súper cremosa." },
  { id: "filling-fudge-cacao", name: "Fudge Artesanal de Cacao", description: "Crema de chocolate espesa y brillante hecha en cocina de cobre tradicional." },
  { id: "filling-frutos-bosque", name: "Frutos del Bosque", description: "Mermelada rústica ácida de frambuesas, moras y saúco para contrastar dulzor." },
  { id: "filling-nutella", name: "Nutella & Avellanas", description: "Crema de cacao y avellanas untuosa combinada con avellanas tostadas picadas." }
];

export const CAKE_THEMES = [
  { id: "theme-pink-macaron", name: "Elegancia Rosa & Macarons", color: "#F7C4C1", description: "Fondo rosa pastel con flores comestibles, sprinkles delicados y macarons en la cima." },
  { id: "theme-chocolate-luxury", name: "Chocolatoso Premium", color: "#4E3629", description: "Glaseado rústico de chocolate oscuro, trufas artesanales y frutos del bosque frescos." },
  { id: "theme-cream-gold", name: "Crema Real & Pan de Oro", color: "#E9E3C8", description: "Fondo crema elegante con destellos dorados en pan de oro de 24k comestible y flores blancas." },
  { id: "theme-coral-party", name: "Fiesta Coral Vibrante", color: "#EB4329", description: "Decoración colorida con ondas de frosting coral, cerezas y toppers festivos alegres." }
];

// --- CONTACT INFO ---
export const CONTACT_WHATSAPP_NUMBER = "51984365755"; // Número principal WhatsApp
export const BRANCH_LOCATION = "Jr. Lamas 173, Tarapoto, San Martín, Perú";
export const BRANCH_HOURS = "Lunes a Sábado: 9:00 AM - 1:00 PM | 4:00 PM - 8:30 PM";
export const INSTAGRAM_USERNAME = "lanietadeportella";
export const BRAND_PHONE = "+51 984 365 755 / +51 942 951 403";
export const BRAND_EMAIL = "lanietadeportella@gmail.com";

