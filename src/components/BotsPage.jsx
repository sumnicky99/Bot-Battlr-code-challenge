import { useState, useEffect } from "react";
import BotsCollection from "./BotsCollection";
import YourBotArmy from "./YourBotArmy";

function BotsPage() {
  // State to hold bots data
  const [bots, setBots] = useState([]);

  // Function to fetch bots data from server
  function fetchData() {
    return fetch(`http://localhost:3000/bots`)
      .then((resp) => resp.json())
      .then((data) => {
        // Update state with fetched data
        setBots(data);
      });
  }

  // Effect hook to fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  function enlistBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: true } : b)));
  }

  function removeBot(bot) {
    setBots(bots.map((b) => (b.id === bot.id ? { ...b, army: false } : b)));
  }

  // Function to delete a bot from the list
  function deleteBot(bot) {
    // Filter out the bot to be deleted
    const deletedBot = bots.filter((b) => b.id !== bot.id);
    // Update state with filtered bots
    setBots((bots) => deletedBot);
  }

  // Render YourBotArmy and BotsCollection components with respective props
  return (
    <div>
      <YourBotArmy 
        bots={bots.filter((b) => b.army)}
        removeBot={removeBot}
        deleteBot={deleteBot}
      />
      <BotsCollection 
        bots={bots}
        enlistBot={enlistBot} 
        deleteBot={deleteBot}
      />
    </div>
  )
}

export default BotsPage;
