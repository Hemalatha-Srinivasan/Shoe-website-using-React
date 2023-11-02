import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1 className="welcome-heading">Welcome to Fila</h1>
        <center><p>If I ever let my head down,it will be to admire my shoes</p></center>
      </header>
      <section className="about">
        <h2>About Us</h2>
      <p >&nbsp;Established in the year of freedom, 1947, Fila Shoes opened up as a footwear store in Colaba, Mumbai and over seven decades, the brand has become a common name in Indian households. Recognised for their skilled craftsmanship, unmatched quality and style quotient, they have the best shoes catering to the diverse tastes of Indian men, women and kids. Metro Shoes is the country’s top footwear brand and is proud of its network of shoe stores in over 100+ cities and an online store providing exclusive fashion footwear and accessories.

</p>
 <p>
  &nbsp;The Metro Shoes Online Range
Metro is dedicated to designing stylish shoes and accessories that are fashionable and comfortable for customers. Crafted to perfection, Metro’s branded shoes and accessories never fail to amaze. Take a look through our store of online shoes and accessories to bring home a box of joy!
 </p>
        
      </section>

      <section className="programs">
        <h2>Products</h2>
        <p>
          Explore our wide range of products, from Fila and more.
        </p>
        <button>View Products</button>
      </section>

      <section className="admissions">
        <h2>Offers</h2>
        <p>
          Know about our discounts and offers for this festival season.
        </p>
        <button>Festo Feast</button>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>        <p>
          Have questions or need assistance? Contact our support team.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
