import {
  About,
  BackToTop,
  Contact,
  Footer,
  Header,
  Hero,
  Portfolio,
} from './components';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
