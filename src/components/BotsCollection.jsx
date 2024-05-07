import BotsCard from './BotsCard'; 

function BotsCollection({ bots, enlistBot, deleteBot }) {
  // Mapping over the bots array to create BotsCard components for each bot
  const botItem = bots.map((bot) => {
    // Returning a BotsCard component for each bot with necessary props
    return <BotsCard key={bot.id} bot={bot} clickEvent={enlistBot} deleteBot={deleteBot} />;
  });

  // Returning JSX with a grid layout containing botItem components
  return (
    <div className="grid grid-cols-4 gap-4 my-10 ">{botItem}</div>
  );
}

export default BotsCollection; 
