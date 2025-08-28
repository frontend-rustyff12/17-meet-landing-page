import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main className="main-wrapper">
        <Hero />
        <MainContent />
      </main>
      <Footer />
    </>
  );
}

export default App;
