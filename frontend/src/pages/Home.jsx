import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/images/2675511-hd_1920_1080_24fps.mp4";
import dealOfTheDayImg from "../assets/images/deal of the day.jpg";

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
];

// Example categories
const categories = [
  { name: "Electronics", icon: "bi-phone", desc: "Latest gadgets", link: "/products/electronics" },
  { name: "Fashion", icon: "bi-bag", desc: "Trendy styles", link: "/products/fashion" },
  { name: "Home", icon: "bi-house", desc: "Essentials & decor", link: "/products/home" },
  { name: "Sports", icon: "bi-bicycle", desc: "Gear & equipment", link: "/products/sports" }, // <-- Changed here
];
const testimonialsMock = [
  {
    name: "Amit Sharma",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "BuyBliss made my shopping experience so easy and fun! Fast delivery and great prices."
  },
  {
    name: "Priya Singh",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The customer support is amazing. I love the variety of products available!"
  },
  {
    name: "Rahul Verma",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    quote: "I always find the best deals here. Highly recommended to everyone!"
  }
];

function Home() {
   const [testimonials] = useState(testimonialsMock);
  // Place this inside your Home component, before the return statement
const [featuredProducts, setFeaturedProducts] = useState([
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹2,999",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    desc: "High-quality wireless headphones with noise cancellation.",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹4,999",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    desc: "Track your fitness and notifications on the go.",
    badge: "Deal"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "₹1,499",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    desc: "Portable speaker with powerful bass.",
    badge: "New"
  },
  {
    id: 4,
    name: "DSLR Camera",
    price: "₹29,999",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    desc: "Capture stunning photos with this DSLR.",
    badge: "Featured"
  }
]);

  

  return (
    <div className="container">

      {/* Hero Section */}

<div className="row align-items-center mb-5 position-relative">
  <div className="col-md-6 text-center text-md-start">
    <h1 className="display-4 fw-bold mb-3">Welcome to BuyBliss!</h1>
    <p className="lead mb-4">
      Your one-stop shop for amazing products at unbeatable prices. Fast delivery, secure checkout, and top-notch service.
    </p>
    <Link to="/products" className="btn btn-primary btn-lg">
      <i className="bi bi-shop-window me-2"></i>Shop Now
    </Link>
  </div>
  
  <div className="col-md-6 hero-video-col position-relative d-flex align-items-center justify-content-center">
  <video
    src={heroVideo}
    className="hero-video"
    autoPlay
    loop
    muted
    playsInline
    poster="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
  />
  {/* Optional: Overlay for readability */}
  
  <div className="hero-video-overlay"></div>
</div>

    
</div>



      {/* Categories Section */}
      <section className="mb-5 why-choose-us-section p-4 rounded">
  <h2 className="text-center mb-2 fw-bold" style={{letterSpacing: "1px"}}>Shop by Category</h2>
  <p className="text-center text-muted mb-4" style={{maxWidth: 600, margin: "0 auto"}}>
    Explore a world of products tailored for every lifestyle. Find your favorites or discover something new!
  </p>
  <div className="row justify-content-center">
    {categories.map((cat) => (
      <div className="col-6 col-md-3 mb-4" key={cat.name}>
        <Link to={cat.link} className="category-card d-block text-center p-4 shadow-sm rounded h-100">
          <div className="mb-2">
            <i className={`bi ${cat.icon} display-4 category-icon`} style={{color: "var(--primary)"}}></i>
          </div>
          <div className="fw-bold mb-1">{cat.name}</div>
          <div className="small text-muted">{cat.desc}</div>
        </Link>
      </div>
    ))}
  </div>
</section>


      {/* Featured Products Section */}
      <section className="mb-5 why-choose-us-section p-4 rounded">
  <h2 className="text-center mb-2 fw-bold" style={{letterSpacing: "1px"}}>Featured Products</h2>
  <p className="text-center text-muted mb-4" style={{maxWidth: 600, margin: "0 auto"}}>
    Hand-picked favorites, trending now, and exclusive deals—shop our top selections!
  </p>
  <div className="row justify-content-center">
    {featuredProducts.length === 0 ? (
      <div className="text-center text-muted py-5">Loading products...</div>
    ) : (
      featuredProducts.map((product) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={product._id || product.id}>
          <div className="card h-100 shadow-sm border-0 position-relative product-card">
            {product.badge && (
              <span className="badge bg-accent text-primary-dark position-absolute top-0 start-0 m-2 px-3 py-2 rounded-pill" style={{fontSize: "0.85rem", zIndex:2}}>
                {product.badge}
              </span>
            )}
            <img
              src={product.img || product.image || "https://via.placeholder.com/160"}
              alt={product.name}
              className="card-img-top"
              style={{objectFit: "cover", height: "160px", borderRadius: "0.75rem 0.75rem 0 0"}}
            />
            <div className="card-body text-center">
              <h5 className="card-title mb-1">{product.name}</h5>
              <div className="fw-bold mb-2" style={{color: "var(--primary)"}}>{product.price}</div>
              <p className="card-text text-muted small">{product.desc || product.description}</p>
              <Link to={`/product/${product._id || product.id}`} className="btn btn-outline-primary btn-sm mt-2">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))
    )}
  </div>
</section>




      {/* Why Choose Us Section */}
      <section className="mb-5 why-choose-us-section p-4 rounded">
  <h2 className="text-center mb-4">Why Shop With BuyBliss?</h2>
  <div className="row text-center">
    <div className="col-md-3 mb-3">
      <i className="bi bi-truck display-5 why-icon mb-2"></i>
      <h6>Fast Delivery</h6>
      <p className="small">Lightning-fast shipping across India.</p>
    </div>
    <div className="col-md-3 mb-3">
      <i className="bi bi-shield-check display-5 why-icon mb-2"></i>
      <h6>Secure Checkout</h6>
      <p className="small">100% safe and secure payments.</p>
    </div>
    <div className="col-md-3 mb-3">
      <i className="bi bi-gift display-5 why-icon mb-2"></i>
      <h6>Best Offers</h6>
      <p className="small">Unbeatable prices & exclusive deals.</p>
    </div>
    <div className="col-md-3 mb-3">
      <i className="bi bi-headset display-5 why-icon mb-2"></i>
      <h6>24/7 Support</h6>
      <p className="small">Friendly support, always ready to help.</p>
    </div>
  </div>
</section>

<section className="container my-5">
  <div className="row align-items-center deal-of-the-day rounded p-4">
    <div className="col-md-8">
      <h3 className="fw-bold mb-1" style={{ color: "var(--primary-dark)" }}>Deal of the Day</h3>
      <p className="mb-2" style={{ color: "var(--primary)" }}>
        <span className="badge bg-danger me-2">30% OFF</span>
        Grab trending sneakers at a steal—hurry, offer ends soon!
      </p>
      <p className="small text-danger mb-2">⏰ 05:23:12 left</p>
      <Link to="/product/3" className="btn btn-primary btn-sm">
        Shop Deal
      </Link>
    </div>
    <div className="col-md-4 text-center mt-3 mt-md-0">
      <img
        src={dealOfTheDayImg}
        alt="Deal of the Day"
        className="img-fluid rounded deal-img-fit"
        style={{ background: "var(--background)" }}
      />
    </div>
  </div>
</section>



      {/* Testimonials Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row justify-content-center">
          {testimonials.map((t, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="testimonial-card p-4 rounded shadow-sm h-100">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <strong>{t.name}</strong>
                  </div>
                </div>
                <blockquote className="blockquote mb-0">
                  <p className="mb-0">{t.quote}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>
<section className="container my-5">
      <h2 className="text-center mb-4" style={{ color: "var(--primary-dark)" }}>
        Our Trusted Partners
      </h2>
      <div className="row justify-content-center align-items-center g-4">
        {brands.map((logo, idx) => (
          <div className="col-4 col-md-2 text-center" key={idx}>
            <img
              src={logo}
              alt="Brand"
              style={{
                maxHeight: "40px",
                maxWidth: "120px",
                filter: "grayscale(100%)",
                background: "var(--background)",
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border: "1px solid var(--accent)"
              }}
            />
          </div>
        ))}
      </div>
    </section>
      {/* Newsletter Signup Section */}
      <section className="newsletter-section text-center bg-primary text-white p-5 rounded mb-5">
        <h2 className="mb-3">Stay Updated!</h2>
        <p className="mb-4">Subscribe to our newsletter for exclusive offers and the latest arrivals.</p>
        <form className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-light btn-lg w-100">
              Subscribe
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Home;
