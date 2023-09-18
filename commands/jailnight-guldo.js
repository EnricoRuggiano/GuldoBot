const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const jailnight = require('../gif/jailnight-guldo.json')
const dialog_gif   = require('../utils/dialog_gif');
const cascade_gif  = require('../utils/cascade_gif');
songs_helper = require('../utils/songs_helper');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jailnight-guldo')
		.setDescription('Jail Night Guldo 🏜️'),
	async execute(interaction) 
	{
		// custom intro
        await interaction.reply("JAIL NIGHT GULDO 🏜️");
        await wait(1000);
		await interaction.followUp("https://tenor.com/view/playing-slide-guitar-aerosmith-rag-doll-song-solo-playing-playing-instrument-gif-23513935");
        await wait(1500);

		await songs_helper(interaction, jailnight);
		await dialog_gif(interaction, jailnight, 'cop', 'thief', 3);
        await cascade_gif(interaction, jailnight, 20);
	},
};
