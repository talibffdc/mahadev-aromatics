export const COMPANY = {
  name: "Mahadev Aromatic",
  tagline: "Custom Fragrance Development & Aroma Testing Laboratory",
  phone: "+91 98765 43210",
  email: "info@mahadevaromatic.com",
  whatsapp: "919876543210",
  address: "Plot No. 42, Industrial Area Phase II, Kannauj, Uttar Pradesh 209725, India",
  city: "Kannauj",
  state: "Uttar Pradesh",
  country: "India",
  website: "https://mahadevaromatic.com",
  founded: "2005",
  experience: "20+",
  clientsServed: "500+",
  fragrancesDeveloped: "10,000+",
  labCertifications: ["ISO 9001:2015", "GMP Certified", "IFRA Compliant"],
} as const

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Clients", href: "/clients" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const

export const SERVICES = [
  {
    title: "GCMS & GLC Analysis",
    slug: "gcms-glc-analysis",
    shortDescription: "Advanced gas chromatography-mass spectrometry for precise identification of fragrance compounds and raw material purity testing.",
    description: "Our state-of-the-art GCMS (Gas Chromatography-Mass Spectrometry) and GLC (Gas-Liquid Chromatography) laboratory provides comprehensive analytical services for the fragrance industry. We identify and quantify individual components in complex fragrance mixtures with exceptional precision, enabling accurate reverse engineering, quality control, and regulatory compliance.",
    icon: "FlaskConical",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    benefits: [
      "Precise compound identification with 99.9% accuracy",
      "Full compositional breakdown of fragrance blends",
      "Raw material purity and adulteration testing",
      "Regulatory compliance documentation (IFRA, EU, REACH)",
      "Rapid turnaround with detailed analytical reports",
      "Expert interpretation by certified chemists",
    ],
    industries: ["Perfumery", "Cosmetics", "Personal Care", "Home Care"],
    faqs: [
      { question: "What is GCMS analysis?", answer: "GCMS (Gas Chromatography-Mass Spectrometry) is an analytical technique that separates and identifies individual chemical compounds in complex mixtures. It combines gas chromatography's separation power with mass spectrometry's identification capability to provide detailed compositional analysis of fragrance materials." },
      { question: "How long does a GCMS report take?", answer: "Standard GCMS analysis reports are delivered within 3-5 business days. Rush analysis with 24-hour turnaround is available for urgent requirements at an additional fee." },
      { question: "Can GCMS reverse engineer a fragrance?", answer: "Yes, GCMS analysis can identify and quantify the individual components of a fragrance blend, providing a detailed compositional breakdown. This information serves as the foundation for recreation or reformulation of existing fragrances." },
    ],
  },
  {
    title: "Custom Fragrance Development",
    slug: "custom-fragrance-development",
    shortDescription: "Bespoke fragrance creation by expert perfumers tailored to your brand identity, target market, and product application.",
    description: "Our team of experienced perfumers crafts unique fragrances from concept to final formulation. Whether you need a signature scent for a luxury perfume line or a functional fragrance for household products, we develop custom formulations that align with your brand identity, market positioning, and budget requirements. Every fragrance undergoes rigorous stability and performance testing.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80",
    benefits: [
      "Dedicated perfumer assigned to your project",
      "Unlimited fragrance modifications until approval",
      "Stability testing across various product bases",
      "Cost-optimized formulations without compromising quality",
      "Scalable from lab samples to industrial production",
      "Complete documentation and regulatory support",
    ],
    industries: ["Perfumery", "Personal Care", "Cosmetics", "Home Care", "Air Care"],
    faqs: [
      { question: "How does the custom fragrance process work?", answer: "We begin with a detailed brief covering your brand identity, target audience, and product application. Our perfumers then create initial concepts (typically 3-5 variants), which go through iterative refinement based on your feedback until we achieve the perfect fragrance." },
      { question: "What is the minimum order for custom fragrances?", answer: "We offer flexible minimum orders starting from 25kg for initial production runs. Sample quantities are available during the development phase at no additional cost." },
      { question: "How long does fragrance development take?", answer: "A typical custom fragrance development cycle takes 4-8 weeks from brief to final approval, depending on complexity and number of revision rounds. Rush development is available for time-sensitive projects." },
    ],
  },
  {
    title: "Fragrance Matching & Recreation",
    slug: "fragrance-matching-recreation",
    shortDescription: "Precision reverse engineering and matching of existing fragrances using advanced analytical and olfactory techniques.",
    description: "Combining advanced GCMS analysis with the expertise of our trained perfumers, we offer highly accurate fragrance matching and recreation services. Whether you need to replicate a discontinued favorite, match a competitor's product, or create a cost-effective alternative to an existing fragrance, our matching process achieves remarkable fidelity while respecting intellectual property guidelines.",
    icon: "Repeat",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
    benefits: [
      "95%+ accuracy in fragrance matching",
      "GCMS-backed analytical precision",
      "Cost-effective alternatives to premium fragrances",
      "IP-compliant recreation methodology",
      "Performance testing in target product base",
      "Quick turnaround on matching projects",
    ],
    industries: ["Perfumery", "Personal Care", "Cosmetics", "Home Care"],
    faqs: [
      { question: "How accurate is fragrance matching?", answer: "Our fragrance matching process typically achieves 95% or higher accuracy. We combine analytical data from GCMS with expert olfactory evaluation to ensure both chemical composition and sensory profile are faithfully reproduced." },
      { question: "Is fragrance recreation legal?", answer: "Yes, fragrance matching and recreation is a standard and legal industry practice. We follow ethical guidelines and do not infringe on patented formulations. Our approach focuses on creating inspired alternatives rather than exact copies of trademarked compositions." },
    ],
  },
  {
    title: "Raw Material Testing & QC",
    slug: "raw-material-testing",
    shortDescription: "Comprehensive quality control and purity testing for essential oils, aroma chemicals, and fragrance raw materials.",
    description: "Ensure the quality and authenticity of your fragrance raw materials with our comprehensive testing services. We provide purity analysis, adulteration detection, and quality certification for essential oils, aroma chemicals, and natural extracts. Our laboratory follows international standards to deliver reliable results that support your supply chain integrity.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    benefits: [
      "Essential oil purity and authenticity verification",
      "Aroma chemical specification compliance testing",
      "Adulterant and contaminant detection",
      "Batch-to-batch consistency monitoring",
      "Certificate of Analysis (COA) issuance",
      "Regulatory compliance support",
    ],
    industries: ["Perfumery", "Cosmetics", "Personal Care", "Pharmaceutical"],
    faqs: [
      { question: "What raw materials can you test?", answer: "We test the full spectrum of fragrance raw materials including essential oils, aroma chemicals, natural extracts, absolutes, resins, and synthetic intermediates. Our capabilities cover both natural and synthetic materials used in perfumery and flavoring." },
      { question: "Do you provide Certificates of Analysis?", answer: "Yes, we issue comprehensive Certificates of Analysis (COA) for all tested materials. Each COA includes detailed analytical data, specification compliance, and our quality assessment, formatted to meet international trade and regulatory requirements." },
    ],
  },
  {
    title: "Industrial Fragrance Solutions",
    slug: "industrial-fragrance-solutions",
    shortDescription: "Large-scale fragrance production, compounding, and supply for FMCG manufacturers and industrial applications.",
    description: "From concept to container, we provide end-to-end fragrance solutions for industrial-scale manufacturing. Our compounding facility handles large-volume fragrance production with consistent quality, while our technical team provides formulation support for challenging product bases. We serve FMCG manufacturers, contract fillers, and industrial product companies with reliable supply and technical expertise.",
    icon: "Factory",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    benefits: [
      "Large-scale compounding up to 50 MT/month",
      "Consistent batch-to-batch quality",
      "Technical support for product formulation",
      "Flexible MOQ and packaging options",
      "Just-in-time delivery capability",
      "Dedicated account management",
    ],
    industries: ["Home Care", "Personal Care", "Air Care", "Industrial"],
    faqs: [
      { question: "What is your production capacity?", answer: "Our compounding facility has a capacity of 50 metric tons per month across multiple production lines. We can scale from small specialty batches to large industrial volumes to meet diverse customer needs." },
      { question: "Do you offer private labeling?", answer: "While we primarily operate as a B2B fragrance supplier, we do offer private label fragrance products for select partners. Please contact us to discuss your specific requirements and we can tailor a solution." },
    ],
  },
] as const

export const INDUSTRIES = [
  {
    title: "Fine Perfumery",
    slug: "fine-perfumery",
    description: "Creating signature scents for luxury perfume houses and designer fragrance brands. From eau de parfum to niche artisanal collections.",
    products: ["Eau de Parfum", "Eau de Toilette", "Cologne", "Attar", "Niche Perfumes"],
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
  },
  {
    title: "Personal Care",
    slug: "personal-care",
    description: "Fragrances engineered for body wash, shampoo, deodorant, and skincare products with optimal performance and stability.",
    products: ["Body Wash", "Shampoo", "Conditioner", "Deodorant", "Body Lotion"],
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
  },
  {
    title: "Home Care",
    slug: "home-care",
    description: "Long-lasting fragrances for detergents, fabric softeners, surface cleaners, and dishwashing products.",
    products: ["Detergent", "Fabric Softener", "Surface Cleaner", "Dishwash", "Floor Cleaner"],
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&q=80",
  },
  {
    title: "Cosmetics",
    slug: "cosmetics",
    description: "Subtle, skin-safe fragrances for color cosmetics, skincare formulations, and beauty products.",
    products: ["Skincare", "Lip Care", "Face Cream", "Sunscreen", "Makeup"],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  },
  {
    title: "Air Care",
    slug: "air-care",
    description: "High-impact fragrances for air fresheners, candles, diffusers, and environmental scenting solutions.",
    products: ["Air Freshener", "Candles", "Reed Diffusers", "Car Freshener", "Incense"],
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80",
  },
  {
    title: "Industrial",
    slug: "industrial",
    description: "Functional fragrances for industrial cleaning products, institutional applications, and specialty chemicals.",
    products: ["Industrial Cleaner", "Institutional Products", "Specialty Chemicals", "Agarbatti"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
  },
] as const

export const PRODUCT_CATEGORIES = [
  { name: "Perfumes & Attars", icon: "Droplets" },
  { name: "Body Sprays", icon: "Wind" },
  { name: "Shampoo & Hair Care", icon: "Sparkle" },
  { name: "Soaps & Body Wash", icon: "Bath" },
  { name: "Detergents", icon: "Shirt" },
  { name: "Air Fresheners", icon: "Leaf" },
  { name: "Candles & Diffusers", icon: "Flame" },
  { name: "Cosmetics", icon: "Palette" },
] as const

export const CLIENTS = [
  { name: "Luxe Fragrances", category: "Perfumery" },
  { name: "CleanHome India", category: "Home Care" },
  { name: "PureGlow Cosmetics", category: "Cosmetics" },
  { name: "AromaLux", category: "Air Care" },
  { name: "FreshWave Products", category: "Personal Care" },
  { name: "Heritage Perfumers", category: "Perfumery" },
  { name: "BrightClean Industries", category: "Home Care" },
  { name: "NaturEssence", category: "Personal Care" },
  { name: "ScentCraft Studios", category: "Perfumery" },
  { name: "VitalCare Labs", category: "Cosmetics" },
  { name: "AirBliss Solutions", category: "Air Care" },
  { name: "EverFresh FMCG", category: "Home Care" },
] as const

export const TESTIMONIALS = [
  {
    quote: "Mahadev Aromatic has been our trusted fragrance partner for over 8 years. Their GCMS analysis capabilities and perfumery expertise are unmatched in the industry.",
    author: "Rajesh Kumar",
    role: "Head of R&D",
    company: "Luxe Fragrances Pvt. Ltd.",
  },
  {
    quote: "The custom fragrance they developed for our premium body wash line exceeded our expectations. Truly world-class development and unparalleled attention to detail.",
    author: "Priya Sharma",
    role: "Product Director",
    company: "PureGlow Cosmetics",
  },
  {
    quote: "Their raw material testing services have been instrumental in maintaining our supply chain quality. We rely on their analytical expertise for every batch.",
    author: "Amit Patel",
    role: "Quality Manager",
    company: "CleanHome India",
  },
] as const

export const BLOG_CATEGORIES = [
  "Perfume Science",
  "Fragrance Development",
  "GCMS Analysis",
  "Aroma Chemistry",
  "Industry Insights",
] as const

export const BLOG_POSTS = [
  {
    title: "Understanding GCMS Analysis in Modern Perfumery",
    slug: "understanding-gcms-analysis-modern-perfumery",
    excerpt: "Explore how Gas Chromatography-Mass Spectrometry revolutionizes fragrance analysis, enabling precise identification of hundreds of compounds in complex aromatic blends.",
    content: `Gas Chromatography-Mass Spectrometry (GCMS) has fundamentally transformed how the fragrance industry approaches analysis, quality control, and product development. This powerful analytical technique combines the separation capabilities of gas chromatography with the identification power of mass spectrometry.

## How GCMS Works in Fragrance Analysis

In fragrance analysis, a sample is first vaporized and carried through a chromatographic column by an inert gas. Different compounds in the mixture separate based on their molecular properties, emerging from the column at different times (retention times). Each separated compound then enters the mass spectrometer, which fragments and analyzes it to produce a unique mass spectrum - essentially a molecular fingerprint.

## Applications in the Fragrance Industry

GCMS finds applications across the entire fragrance value chain:

- **Quality Control**: Verifying the composition and purity of raw materials
- **Reverse Engineering**: Analyzing competitor products to understand their composition
- **Regulatory Compliance**: Identifying allergens and restricted substances
- **Natural vs. Synthetic**: Distinguishing between natural and synthetic ingredients
- **Batch Consistency**: Ensuring production consistency across manufacturing runs

## The Future of Fragrance Analytics

With advances in AI and machine learning, GCMS data analysis is becoming increasingly sophisticated, enabling faster identification and more nuanced interpretation of complex fragrance compositions.`,
    category: "GCMS Analysis",
    author: "Dr. Vikram Singh",
    authorRole: "Head of Analytical Chemistry",
    date: "2025-12-15",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    readTime: "6 min read",
  },
  {
    title: "The Art and Science of Custom Fragrance Development",
    slug: "art-science-custom-fragrance-development",
    excerpt: "Discover the intricate process behind creating bespoke fragrances, from initial brief to final formulation, blending artistic intuition with scientific precision.",
    content: `Custom fragrance development sits at the fascinating intersection of art and science. Creating a bespoke scent requires not just chemical knowledge but also creative intuition, market understanding, and technical expertise.

## The Development Process

### 1. The Brief
Every great fragrance begins with a clear brief. This document captures the brand identity, target audience, desired scent profile, and practical requirements like stability and cost parameters.

### 2. Concept Creation
Our perfumers translate the brief into 3-5 initial concepts, each exploring different olfactory directions. This creative phase draws on decades of experience and an extensive palette of raw materials.

### 3. Refinement
Based on client feedback, the chosen direction undergoes iterative refinement. Each modification is carefully documented and tested to ensure the fragrance performs in the intended product base.

### 4. Stability Testing
Before final approval, the fragrance undergoes rigorous stability testing in the target product formulation, ensuring performance over the product's intended shelf life.

## Why Custom Fragrances Matter

In an increasingly competitive market, a unique fragrance can be a powerful brand differentiator. Custom fragrances create emotional connections that generic scents simply cannot achieve.`,
    category: "Fragrance Development",
    author: "Anita Desai",
    authorRole: "Senior Perfumer",
    date: "2025-11-28",
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80",
    readTime: "5 min read",
  },
  {
    title: "Essential Oils vs. Aroma Chemicals: A Comprehensive Guide",
    slug: "essential-oils-vs-aroma-chemicals",
    excerpt: "A deep dive into the differences between natural essential oils and synthetic aroma chemicals, their applications, and how modern perfumery leverages both.",
    content: `The world of fragrance raw materials is broadly divided into two categories: natural essential oils and synthetic aroma chemicals. Understanding their differences is crucial for anyone involved in fragrance development.

## Natural Essential Oils

Essential oils are concentrated plant extracts obtained through distillation, cold pressing, or solvent extraction. They contain complex mixtures of hundreds of individual compounds.

**Advantages:**
- Rich, complex scent profiles
- Consumer appeal for "natural" positioning
- Therapeutic properties in some cases

**Challenges:**
- Supply variability and cost fluctuation
- Batch-to-batch inconsistency
- Potential allergen content
- Sustainability concerns for some sources

## Synthetic Aroma Chemicals

Aroma chemicals are individual compounds produced through chemical synthesis. They can replicate natural scent molecules or create entirely new olfactory experiences.

**Advantages:**
- Consistent quality and supply
- Cost-effective at scale
- Novel scent possibilities
- Better sustainability profile in many cases

## The Modern Approach

Today's best fragrances combine both natural and synthetic materials. This approach leverages the complexity of naturals with the precision and creativity of synthetics, creating scents that are both beautiful and commercially viable.`,
    category: "Aroma Chemistry",
    author: "Dr. Vikram Singh",
    authorRole: "Head of Analytical Chemistry",
    date: "2025-11-10",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    readTime: "7 min read",
  },
  {
    title: "Fragrance Trends Shaping the FMCG Industry in 2026",
    slug: "fragrance-trends-fmcg-2026",
    excerpt: "From sustainable scenting to AI-driven formulation, discover the key fragrance trends that will define FMCG product development in the coming year.",
    content: `The FMCG fragrance landscape is evolving rapidly, driven by changing consumer preferences, technological advances, and sustainability imperatives. Here are the key trends shaping the industry.

## 1. Sustainable Scenting

Consumers increasingly demand environmentally responsible products. This translates to fragrances made with sustainably sourced materials, biodegradable ingredients, and reduced carbon footprints.

## 2. Functional Fragrances

Beyond just smelling good, fragrances are increasingly expected to deliver functional benefits - mood enhancement, stress relief, and even cognitive performance improvements.

## 3. AI-Assisted Formulation

Machine learning algorithms are being used to predict consumer preferences, optimize formulations, and accelerate the development cycle. This doesn't replace the perfumer but enhances their capabilities.

## 4. Clean Label Transparency

Consumers want to know what's in their products. Brands are responding with greater ingredient transparency and cleaner formulations.

## 5. Cultural Fragrance Fusion

Global connectivity is driving demand for scents that blend olfactory traditions from different cultures, creating unique cross-cultural fragrance experiences.

## Implications for Brands

Staying ahead of these trends requires a fragrance partner with both technical capability and market insight. At Mahadev Aromatic, we combine analytical excellence with creative innovation to help brands navigate this evolving landscape.`,
    category: "Industry Insights",
    author: "Anita Desai",
    authorRole: "Senior Perfumer",
    date: "2025-10-22",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
    readTime: "5 min read",
  },
  {
    title: "The Science Behind Fragrance Longevity and Sillage",
    slug: "science-fragrance-longevity-sillage",
    excerpt: "Understanding the molecular mechanisms that determine how long a fragrance lasts and how far it projects, and how perfumers engineer these properties.",
    content: `Two of the most important characteristics of any fragrance are its longevity (how long it lasts) and its sillage (how far it projects). Both are determined by the molecular properties of the fragrance ingredients.

## Molecular Weight and Volatility

The key factor in fragrance longevity is molecular weight. Lighter molecules evaporate quickly (top notes), while heavier molecules linger longer (base notes). A well-constructed fragrance balances all three note categories:

- **Top Notes**: Light, volatile molecules that create the first impression
- **Heart Notes**: Medium-weight molecules forming the fragrance's character
- **Base Notes**: Heavy molecules providing lasting foundation

## Engineering Longevity

Perfumers use several techniques to enhance longevity:

1. **Fixatives**: Heavy molecules that slow the evaporation of lighter ingredients
2. **Encapsulation**: Technology that releases fragrance compounds gradually
3. **Molecular Modification**: Structural changes to increase molecular weight while preserving scent character

## The Role of Product Base

The product formulation significantly affects fragrance performance. Oil-based products typically offer better longevity than water-based ones, while the pH, surfactant system, and other ingredients can all impact how a fragrance performs.

## Testing and Optimization

At Mahadev Aromatic, we use advanced analytical techniques alongside trained sensory panels to evaluate and optimize fragrance performance in every product application.`,
    category: "Perfume Science",
    author: "Dr. Vikram Singh",
    authorRole: "Head of Analytical Chemistry",
    date: "2025-10-05",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    readTime: "6 min read",
  },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Brief & Consultation",
    description: "We begin with an in-depth consultation to understand your brand, target market, product application, and fragrance preferences.",
  },
  {
    step: 2,
    title: "Analysis & Development",
    description: "Our perfumers create initial fragrance concepts using GCMS-guided formulation, ensuring precision and creativity in every blend.",
  },
  {
    step: 3,
    title: "Testing & Refinement",
    description: "Selected concepts undergo rigorous stability testing and iterative refinement based on your feedback until perfection is achieved.",
  },
  {
    step: 4,
    title: "Production & Delivery",
    description: "Approved fragrances move to industrial-scale production with consistent quality, flexible packaging, and reliable delivery.",
  },
] as const

export const USP_ITEMS = [
  {
    title: "Expert Perfumers",
    description: "Our team of professionally trained perfumers brings decades of combined experience in fine and functional fragrance creation.",
    icon: "Crown",
  },
  {
    title: "Advanced GCMS Lab",
    description: "State-of-the-art analytical laboratory equipped with the latest GCMS and GLC instrumentation for precise compositional analysis.",
    icon: "Microscope",
  },
  {
    title: "Industrial Scale",
    description: "From 1kg lab samples to 50MT monthly production, we scale seamlessly to meet your manufacturing requirements.",
    icon: "TrendingUp",
  },
  {
    title: "Custom Solutions",
    description: "Every fragrance is tailored to your specific needs - no off-the-shelf solutions. Your brand deserves a unique olfactory identity.",
    icon: "Gem",
  },
] as const
