const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const midnightmovie = require('../gif/midnightmovie-guldo.json')
cascade_gif = require('../utils/cascade_gif');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('midnightmovie-guldo')
		.setDescription('Midnight Movie Guldo 🌃'),
	async execute(interaction) 
	{
		// custom intro
        await interaction.reply("OUR FEATURE PRESENTATION...");
        await wait(1000);
		await interaction.followUp("https://tenor.com/view/coming-soon-wrestling-grindhouse-gif-24840246");
		await wait(2000);
        await interaction.followUp("MIDNIGHT MOVIE GULDO 🌃");
		await wait(4000);
        await interaction.followUp("https://media.giphy.com/media/Y2DghjlMkJUDm/giphy.gif");
		await wait(4000);
		await interaction.followUp("ATTENZIONE IL PROGRAMMA E' CONSIGLIATO AD UN PUBBLICO ADULTO");
        await wait(1500);

		await cascade_gif(interaction, midnightmovie);
	},
};
