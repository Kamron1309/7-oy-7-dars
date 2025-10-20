// import React from 'react';
// import { ConfigProvider } from 'antd';
// import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import Features from './components/Features/Features';
// import Partners from './components/Partners/Partners';
// import Process from './components/Process/Process';
// import Pricing from './components/Pricing/Pricing';
// import Testimonials from './components/Testimonials/Testimonials';
// import FAQ from './components/FAQ/FAQ';
// import Footer from './components/Footer/Footer';
// import './index.css';

// function App() {
//   return (
//     <I18nextProvider i18n={i18n}>
//       <ConfigProvider>
//         <div className="App">
//           <Header />
//           <Hero />
//           <Features />
//           <Partners />
//           <Process />
//           <Pricing />
//           <Testimonials />
//           <FAQ />
//           <Footer />
//         </div>
//       </ConfigProvider>
//     </I18nextProvider>
//   );
// }

// export default App;


import React from 'react';
import { ConfigProvider } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import RelocatedProfessions from './components/RelocatedProfessions/RelocatedProfessions';
import Features from './components/Features/Features';
import Partners from './components/Partners/Partners';
import Process from './components/Process/Process';
import Pricing from './components/Pricing/Pricing';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider>
        <div className="App">
          <Header />
          <Hero />
          <RelocatedProfessions />
          <Features />
          <Partners />
          <Process />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Footer />
        </div>
      </ConfigProvider>
    </I18nextProvider>
  );
}

export default App;