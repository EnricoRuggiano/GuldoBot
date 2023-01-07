const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const midnightmovie = require('../gif/midnightmovie-guldo.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('midnightmovie-guldo')
		.setDescription('Midnight Movie Guldo 🌃'),
	async execute(interaction) 
	{

		let songs = midnightmovie.songs;
		let gif = midnightmovie.gif;
		let intro = midnightmovie.intro;

		// intro
        await interaction.reply(intro.messaggio);
        await wait(2000);
        await interaction.followUp(intro.gif);
        await wait(5000);

		// songs
		// for(let s of songs)
		// {
		// 	await interaction.followUp(s);
		// 	await wait(2000);
		// }

		// vai con le gif ora
		for(let g of gif)
		{
			await interaction.followUp(g);
			await wait(Math.random() * (8000 - 2000) + 1000);
		}

	},
};
