import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

function App() {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed insert-0 bg-fixed bg-center"></div>
      <div className="relative mt-3 z-10">
        <Navbar />
        <Hero />
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <Projects />
          <Skills />
          <Education />
        </Suspense>
        <Contact />
      </div>
    </main>
  );
}

export default App;
