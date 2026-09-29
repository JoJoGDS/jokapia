export const productCategories = [
  "Tout le catalogue",
  "Électricité",
  "Réseaux & informatique",
  "Énergie solaire",
  "Équipement professionnel",
] as const

export type ProductCategory = (typeof productCategories)[number]

export type Product = {
  id: string
  name: string
  category: Exclude<ProductCategory, "Tout le catalogue">
  description: string
  price: number
  stock: number
  image: string
  imageAlt: string
  badge?: string
}

// Contenu de démonstration : remplacer ces références, tarifs et stocks par l'inventaire réel.
export const products: Product[] = [
  {
    id: "cable-2-5",
    name: "Câble électrique 2,5 mm²",
    category: "Électricité",
    description: "Câble cuivre pour installations intérieures et circuits de prises.",
    price: 1.8,
    stock: 240,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Électricien travaillant sur une installation",
    badge: "Stock disponible",
  },
  {
    id: "disjoncteur-20a",
    name: "Disjoncteur modulaire 20 A",
    category: "Électricité",
    description: "Protection fiable des circuits, format compact pour tableau électrique.",
    price: 12,
    stock: 34,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Équipements et câblage électriques",
  },
  {
    id: "tableau-electrique",
    name: "Tableau électrique 12 modules",
    category: "Électricité",
    description: "Boîtier robuste pour organiser les protections de votre installation.",
    price: 48,
    stock: 8,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Installation électrique dans un bâtiment",
  },
  {
    id: "routeur-wifi6",
    name: "Routeur Wi-Fi 6 double bande",
    category: "Réseaux & informatique",
    description: "Une connexion rapide et stable pour la maison ou le bureau.",
    price: 89,
    stock: 12,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Routeur et équipement réseau",
    badge: "Populaire",
  },
  {
    id: "cable-cat6",
    name: "Câble réseau Cat 6 — 305 m",
    category: "Réseaux & informatique",
    description: "Bobine pour le câblage structuré des réseaux Ethernet gigabit.",
    price: 145,
    stock: 6,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Câbles et équipement de réseau informatique",
  },
  {
    id: "switch-8-ports",
    name: "Commutateur réseau 8 ports",
    category: "Réseaux & informatique",
    description: "Étendez votre réseau local grâce à huit ports Ethernet gigabit.",
    price: 52,
    stock: 19,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Composants électroniques pour réseau",
  },
  {
    id: "panneau-solaire-450",
    name: "Panneau solaire monocristallin 450 W",
    category: "Énergie solaire",
    description: "Module haute performance pour une installation solaire résidentielle.",
    price: 178,
    stock: 16,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Panneaux solaires sous le soleil",
    badge: "Nouveau",
  },
  {
    id: "onduleur-3kva",
    name: "Onduleur hybride 3 kVA",
    category: "Énergie solaire",
    description: "Gérez votre production solaire et votre alimentation de secours.",
    price: 620,
    stock: 4,
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Panneaux solaires installés sur un toit",
  },
  {
    id: "batterie-lithium-5kwh",
    name: "Batterie lithium 5 kWh",
    category: "Énergie solaire",
    description: "Stockez l’énergie produite pour l’utiliser quand vous en avez besoin.",
    price: 1150,
    stock: 0,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Équipement de stockage électrique",
  },
  {
    id: "ordinateur-portable-pro",
    name: "Ordinateur portable professionnel",
    category: "Équipement professionnel",
    description: "Un poste de travail polyvalent pour vos tâches du quotidien.",
    price: 740,
    stock: 7,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Ordinateur portable ouvert sur un bureau",
    badge: "Garantie 1 an",
  },
  {
    id: "ecran-24",
    name: "Écran Full HD 24 pouces",
    category: "Équipement professionnel",
    description: "Écran net et confortable, adapté au travail de bureau.",
    price: 165,
    stock: 11,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Écran d’ordinateur sur un bureau",
  },
  {
    id: "imprimante-multifonction",
    name: "Imprimante multifonction Wi-Fi",
    category: "Équipement professionnel",
    description: "Impression, numérisation et copie dans un format adapté au bureau.",
    price: 215,
    stock: 3,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Imprimante de bureau",
  },
]
