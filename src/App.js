
import { CORE_CONCEPTS } from './data.js';
import './App.css';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';





function App() {
  function handleSelect(selectedbutton){
    // selectedButton => Components, Props, State, Jsx
    console.log(selectedbutton);
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* this is a bigger version */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            /> */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
              <h2>Examples</h2>
              <menu>
               <TabButton onSelect={()=> handleSelect('Components')}>Components </TabButton>
               <TabButton onSelect={()=> handleSelect('JSX')}>JSX </TabButton>
               <TabButton onSelect={()=> handleSelect('Props')}>Props </TabButton>
               <TabButton onSelect={()=> handleSelect('State')}>State </TabButton>
              </menu>
              Dynamic Content
        </section>
      </main>
    </div>
  );
} 

export default App;
