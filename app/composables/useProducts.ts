export const useProducts = () => {
  const products = [
    {
      id: 1,
      name: "BASE BLACK T-SHIRT",
      price: 1999,
      images: [
        "/shirt.png",
        "https://i.pinimg.com/736x/e0/9f/f5/e09ff521a9e25eff8cd6613f7f6a8c1a.jpg",
        "https://i.pinimg.com/736x/3a/d7/4f/3ad74f329d8fee1757fabcf19df527a0.jpg"
      ],
      description: "I WAKE UP WITH ONLY ONE THING ON MY MIND",
      sizes: ["S", "M", "L"],
      color: "Black",
      inStock: true,
      category: "T-shirts"
    },
    {
      id: 2,
      name: "VINTAGE GRAPHIC TEE",
      price: 2299,
      images: [
        "https://i.pinimg.com/1200x/ab/b8/2a/abb82ab9fdbe9977d51b9434c1521385.jpg",
        "https://i.pinimg.com/564x/7c/8d/9e/7c8d9e0f1a2b3c4d5e6f7g8h9i0j1k2l.jpg",
        "https://i.pinimg.com/736x/3a/4b/5c/3a4b5c6d7e8f9g0h1i2j3k4l5m6n7o8p.jpg",
        "https://i.pinimg.com/564x/9f/0e/1d/9f0e1d2c3b4a5z6y7x8w9v0u1t2s3r4q.jpg"
      ],
      description: "Classic vintage design with bold graphics",
      sizes: ["S", "M", "L", "XL"],
      color: "Navy",
      inStock: true,
      category: "T-shirts"
    },
    {
      id: 3,
      name: "LONG SLEEVE GRAPHIC",
      price: 2499,
      images: [
        "https://i.pinimg.com/736x/4b/ec/12/4bec12cbda21c3378ecfcc97b51a55f8.jpg",
        "https://i.pinimg.com/1200x/7a/78/df/7a78dfb0976c8e4043d1c4f588eb6d19.jpg",
        "https://i.pinimg.com/736x/1e/7a/3d/1e7a3d403ad1682ecaede5719f467405.jpg"
      ],
      description: "Premium long sleeve with artistic print",
      sizes: ["M", "L", "XL"],
      color: "Black",
      inStock: false,
      category: "Long Sleeves"
    },
    {
      id: 4,
      name: "OVERSIZED CREW NECK",
      price: 2799,
      images: [
        "https://i.pinimg.com/1200x/51/a8/63/51a863b0072146ea56a8f16c0c4a922e.jpg",
        "https://i.pinimg.com/736x/6n/7o/8p/6n7o8p9q0r1s2t3u4v5w6x7y8z9a0b1c.jpg"
      ],
      description: "Comfortable oversized fit with statement design",
      sizes: ["S", "M", "L"],
      color: "Charcoal",
      inStock: true,
      category: "Sweatshirts"
    },
    {
      id: 5,
      name: "RETRO PRINT SHIRT",
      price: 1899,
      images: [
        "https://i.pinimg.com/1200x/02/bb/6f/02bb6f171d7d46d77d1494c41a8a8e12.jpg",
        "https://i.pinimg.com/736x/e0/9f/f5/e09ff521a9e25eff8cd6613f7f6a8c1a.jpg",
        "https://i.pinimg.com/736x/3a/d7/4f/3ad74f329d8fee1757fabcf19df527a0.jpg",
        "https://i.pinimg.com/736x/a5/b9/ed/a5b9edec9b383bb5d1f6d517a85bba6e.jpg"
      ],
      description: "Retro-inspired design with modern fit",
      sizes: ["S", "M", "L", "XL"],
      color: "Dark Blue",
      inStock: true,
      category: "T-shirts"
    },
    {
      id: 6,
      name: "GLAMOUR COLLECTION TEE",
      price: 2199,
      images: [
        "https://i.pinimg.com/1200x/87/73/c5/8773c5d52759f2a906d1d54f3319b78d.jpg",
        "https://i.pinimg.com/736x/a3/c8/29/a3c829605106f19c524d003017ba5479.jpg",
        "https://i.pinimg.com/1200x/02/bb/6f/02bb6f171d7d46d77d1494c41a8a8e12.jpg"
      ],
      description: "Exclusive collection piece with unique artwork",
      sizes: ["M", "L"],
      color: "Black",
      inStock: true,
      category: "T-shirts"
    }
  ];

  const getProduct = (id: number) => {
    return products.find((product) => product.id === id);
  }

  return {
    products,
    getProduct
  }
}