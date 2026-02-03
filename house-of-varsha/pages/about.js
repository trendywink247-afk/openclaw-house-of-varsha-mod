import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 font-serif">
        <h1 className="text-4xl mb-6">About House of Varsha</h1>
        <section className="text-gray-700 font-sans leading-relaxed max-w-4xl mx-auto">
          <p className="mb-6">
            House of Varsha embodies the grace and heritage of traditional Indian craftsmanship blended with contemporary elegance. Our collection celebrates women’s boutique fashion, highlighting timeless beauty and story-driven designs.
          </p>
          <p className="mb-6">
            Founded with passion and a commitment to curated quality, House of Varsha offers limited, handcrafted collections that resonate with women who value aesthetic, graceful designs.
          </p>
          <img src="/images/about-heritage.jpg" alt="House of Varsha Heritage" className="w-full rounded-lg shadow-md mb-8" />
          <p>
            We believe in calm, premium experiences that tell a story through every piece. Join us in a journey of elegance that is personal and intentional.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
