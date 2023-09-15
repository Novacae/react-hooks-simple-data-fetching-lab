// create your App component here
import react, { useEffect, useState } from "react";

function App() {
  const Api = `https://dog.ceo/api/breeds/image/random`;
  const [isloading, setIskoading] = useState(true);
  const [dogs, setDogs] = useState(``);

  useEffect(() => {
    const getDogs = async () => {
      try {
        const res = await fetch(Api);
        const resp = await res.json();
        setDogs(resp);
        setIskoading(false);
      } catch (error) {
        console.log("error dawg", error);
        setIskoading(false);
      }
    };
    getDogs();
  }, []);

  return (
    <div>
      {isloading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={"https://images.dog.ceo/breeds/bulldog-english/mami.jpg"}
          alt="A Random Dog"
        />
      )}
    </div>
  );
}
export default App;
