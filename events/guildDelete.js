const { Events } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	name: Events.GuildDelete,
	async execute(guild) 
	{
		// does not work
		// let channelToWriteOn = await guild.channels.cache[0];
		// let found = 0;
		// await guild.channels.cache.map((channel) => 
		// {
		// 	if (found === 0) 
		// 	{
		// 		console.log(`channel  ${channel.name} has type ${channel.type}`)
		// 		if (channel.type === 0) 
		// 		{
		// 			console.log('found');
		// 			channelToWriteOn = channel;		
		// 			found = 1;
		// 		}
		// 	}
		// });

		// await channelToWriteOn.send("https://tenor.com/view/spider-man-norman-osborn-surprised-you-cant-do-this-to-me-gif-24182893")
		// await channelToWriteOn.send("Alla fine i polli hanno preso il comando in questo server...")
	    // await wait(1000);
		// await channelToWriteOn.send("https://tenor.com/view/norman-osborn-angry-gif-24732285")
		// await channelToWriteOn.send("SIETE SOLO DEI POLLI, DEI POLLI!!! CO-CO COO COO!!")

	},
};