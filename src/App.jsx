import { useState } from "react";
import data from "./data"
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <div>
          <List people={people} />
        </div>
        <button type="button" className="btn btn-block" onClick={()=>setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
