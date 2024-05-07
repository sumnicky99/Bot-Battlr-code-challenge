
function BotsCard({ bot, clickEvent, deleteBot }) {

  // Rendering JSX for the BotsCard component

  return (
    <div className="shadow-xl" onClick={() => clickEvent(bot)}>
      <div className="w-full place-items-center">
        {/* Displaying the bot's avatar */}
        <img
          src={bot.avatar_url}
          alt=""
          className="w-full h-[250px] object-cover"
        />

        <div>
          {/* Displaying bot information: name, health, damage, armor */}
          <h4 className="font-bold text-xl">{bot.name}</h4>
          <h4 className="font-bold text-xl">Health: {bot.health}</h4>
          <h4 className="font-bold text-xl">Damage: {bot.damage}</h4>
          <h4 className="font-bold text-xl">Armor: {bot.armor}</h4>
          <h5>Catchphrase: <small>{bot.catchphrase}</small></h5>

          {/* Button to delete the bot */}
          <button className="bg-red-500 rounded-md"
            onClick={(event) => {
              // Preventing event propagation to the parent div
              event.stopPropagation();
              // Invoking the deleteBot function with the bot as an argument
              deleteBot(bot);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BotsCard; 
