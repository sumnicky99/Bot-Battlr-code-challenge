import BotsCard from './BotsCard'; 

function YourBotArmy({ bots, removeBot, deleteBot }) {
  // Mapping over the bots array to create BotsCard components for each bot in the army
  const botsArmy = bots.map((bot) => {

    return (
      <BotsCard
        key={bot.id}
        bot={bot}
        clickEvent={removeBot}
        deleteBot={deleteBot}
      />
    );
  });

  // Returning JSX with a grid layout containing botsArmy components
  return (
    <div className='bg-lime-300 rounded-md'>
      <div className="grid grid-cols-4 gap-4 my-10 ">
        {botsArmy}
      </div>
    </div>
  );
}

export default YourBotArmy; 
