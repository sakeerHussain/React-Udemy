import { EXAMPLES } from './data.js';
import { CORE_CONCEPTS } from './data.js';
import './App.css';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';




function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');


  
  function handleSelect(selectedButton){
    // selectedButton => Components, Props, State, Jsx
      setSelectedTopic(selectedButton)
      console.log(selectedTopic);
  }
  console.log("App components are executing");

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
               <TabButton onSelect={()=> handleSelect('components')}>Components </TabButton>
               <TabButton onSelect={()=> handleSelect('jsx')}>JSX </TabButton>
               <TabButton onSelect={()=> handleSelect('props')}>Props </TabButton>
               <TabButton onSelect={()=> handleSelect('state')}>State </TabButton>
              </menu>
              {/* {selectedTopic} */}
        </section>

        <section id='tab-content'>
          <h2>{EXAMPLES[selectedTopic].title}</h2>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </section>
      </main>
    </div>
  );
} 

export default App;
