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

		function shuffle(arr) { arr.sort(() => Math.random() - 0.5); }
		function randomRange(min, max) { return Math.random() * (max - min) + min; }

		let count = 0;
		let reaction = 0;
		const MAX = 50;
		const TIME_MIN = 4000;
		const TIME_MAX = 10000;
		let REACTION_THRESHOLD = Math.floor(randomRange(3, Math.floor(MAX/2)));

		// vai con le gif ora
		while (count < MAX && gif.length > 0)
		{
			shuffle(gif);
			await interaction.followUp(gif.pop());
			await wait(randomRange(TIME_MIN, TIME_MAX));
			reaction += 1;
			count += 1;
		}

	},
};
