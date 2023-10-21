import {
  About,
  BackToTop,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
} from './components';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
