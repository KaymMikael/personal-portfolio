import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <main>
        <About />
        <Skills />
        <Education />
        <Projects/>
      </main>
    </div>
  );
}

export default App;
