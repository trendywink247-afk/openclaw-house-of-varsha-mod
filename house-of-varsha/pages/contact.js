import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 font-sans text-gray-700">
        <h1 className="text-4xl font-serif mb-6">Contact Us</h1>
        <section className="max-w-3xl">
          <p className="mb-6">
            For inquiries and orders, reach out to us directly through WhatsApp or follow us on Instagram.
          </p>
          <div className="flex space-x-6 mb-6">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition">
              WhatsApp
            </a>
            <a href="https://instagram.com/houseofvarsha" target="_blank" rel="noopener noreferrer" className="bg-pink-400 hover:bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold transition">
              Instagram
            </a>
          </div>
          <p>
            We look forward to connecting with you and sharing the story of House of Varsha.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
