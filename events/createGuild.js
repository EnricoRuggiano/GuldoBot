const { Events } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	name: Events.GuildCreate,
	async execute(guild) 
	{
		let channelToWriteOn = await guild.channels.cache[0];
		let found = 0;
		await guild.channels.cache.map((channel) => 
		{
			if (found === 0) 
			{
				console.log(`channel  ${channel.name} has type ${channel.type}`)
				if (channel.type === 0) 
				{
					console.log('found');
					channelToWriteOn = channel;		
					found = 1;
				}
			}
		});

		await channelToWriteOn.send("https://tenor.com/view/green-goblin-throat-grab-norman-osborn-spiderman-gif-25570986")
	    await wait(1000);
		await channelToWriteOn.send("Avete commesso un grosso errore ad invitarmi in questo server!")

	},
};