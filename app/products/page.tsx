import ContactForm from '../components/ContactForm';

export default function ProductsPage() {
  return (
    <main>
      <section className="products-hero">
        <div className="products-hero-container">
          <div className="products-hero-content">
            <h1 className="en">Our Products</h1>
            <h1 className="fi hidden">Tuotteemme</h1>
            <p className="en">Quality, durability and style—floors and terraces from Varatek</p>
            <p className="fi hidden">Laatua, kestävyyttä ja tyyliä—lattiat ja terassit Varatekilta</p>
          </div>
        </div>
      </section>

      <section className="products-content">
        <div className="container">
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">
                <img src="/images/icons/vinyl.svg" alt="Vinyl floors icon" />
              </div>
              <h2 className="en">Vinyl Floors</h2>
              <h2 className="fi hidden">Vinyylllattiat</h2>
              <p className="en">Beautiful: durable and unique solution</p>
              <p className="fi hidden">Kaunis: kaytäm-dilinen ja oduitnen rätkaisu</p>
              <ul className="product-features">
                <li className="en">Completely moisture resistant</li>
                <li className="fi hidden">Täysin kostaudenkestävä</li>
                <li className="en">Warm and comfortable underfoot</li>
                <li className="fi hidden">Lämmin ja mukava jalan alla</li>
                <li className="en">Easy to maintain and durable</li>
                <li className="fi hidden">Helppoholtoinen ja kestäva</li>
              </ul>
              <a href="#products-contact" className="product-link">
                <span className="en">See more</span>
                <span className="fi hidden">Katso lisää</span>
              </a>
            </div>

            <div className="product-card">
              <div className="product-icon">
                <img src="/images/icons/tarkett.svg" alt="Tarkett floors icon" />
              </div>
              <h2 className="en">Tarkett Floors</h2>
              <h2 className="fi hidden">Tarkett-lattiat</h2>
              <p className="en">The world's leading flooring brand, combining design and durability.</p>
              <p className="fi hidden">Maailman johtavä lattiamekki, joka ykolstää designin ja kestävvyden.</p>
              <ul className="product-features">
                <li className="en">Wide range of different types</li>
                <li className="fi hidden">Laaja mallisto eri tyyisihin</li>
                <li className="en">Reliability and long lifespan</li>
                <li className="fi hidden">Luotettavuus ja pitkä käyttoikä</li>
                <li className="en">Easy to install and care for</li>
                <li className="fi hidden">Helppo asentaa ja hvohäa</li>
              </ul>
              <a href="#products-contact" className="product-link">
                <span className="en">See more</span>
                <span className="fi hidden">Katso lisää</span>
              </a>
            </div>

            <div className="product-card">
              <div className="product-icon">
                <img src="/images/icons/decking.svg" alt="Composite decking icon" />
              </div>
              <h2 className="en">Composite Decking Boards</h2>
              <h2 className="fi hidden">Komposiittiterassilaudat</h2>
              <p className="en">Weather-resistant and maintenance-free choice for outdoor spaces.</p>
              <p className="fi hidden">Säänkestävä ja huoltovapaa vallima ulkotiloihin.</p>
              <ul className="product-features">
                <li className="en">Does not warp or rot</li>
                <li className="fi hidden">El väännyi el lahoa</li>
                <li className="en">Stylish appearance year after year</li>
                <li className="fi hidden">Tyylikäs ulkonakö vuodesta toiseen</li>
                <li className="en">Long lifespan and easy to install</li>
                <li className="fi hidden">Pitka käyttoikä ja helppo asentaa</li>
              </ul>
              <a href="#products-contact" className="product-link">
                <span className="en">See more</span>
                <span className="fi hidden">Katso lisää</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="products-contact" className="products-contact">
        <div className="container">
          <h2 className="en">Contact Us</h2>
          <h2 className="fi hidden">Ota Yhteyttä</h2>
          <p className="section-intro en">Get in touch for more information about our products and services.</p>
          <p className="section-intro fi hidden">Ota yhteyttä saadaksesi lisätietoja tuotteistamme ja palveluistamme.</p>
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
