import Image from "next/image";
import Header from "./components/Header";
import { Main } from "next/document";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Services />
      <AboutUs />
      <Footer />
    </main>
  );
}
