import axios from "axios";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState([]);

  const addRecord = async () => {
    try {
      const randomId = Math.floor(Math.random() * 10) + 1;
      const response = await axios.get(
        `https://swapi.dev/api/people/${randomId}/`
      );

      const newPeople = {
        id: randomId,
        name: response.data.name,
      };

      setPeople([...people, newPeople]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRecord = async (id) => {
    setPeople(people.filter((people) => people.id !== id));
  };

  return (
    <div className="App">
      <>
        <button onClick={addRecord}>Add Record</button>

        <table
          border="1"
          style={{ borderCollapse: "collapse", padding: "10px" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {people.map((people) => (
              <tr key={people.id}>
                <td>{people.name}</td>
                <td>
                  <button onClick={() => deleteRecord(people.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default App;
