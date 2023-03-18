import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Hamza  Store</title>
        <meta name="description" content="موضة ساعات ✈  إشتري عبر الإنترنت ساعات بأفضل سعر   في الجزائر ✓ الدفع ببطاقة بنكية أو عند التسليم ✈ إشتري الآن."/>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout