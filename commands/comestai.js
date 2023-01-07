const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const guldo = require('../gif/guldo.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('come-stai')
		.setDescription('Bella, guldo come stai oggi?'),
	async execute(interaction) 
	{
		let answer = null;
		let answers = [];
		if (interaction.user.username.match(/LalalaCiccio/))
		{
			answers = guldo.filter(elem => elem.atteggiamento =='positivo');
		}
		else
		{
			answers = guldo.filter(elem=>elem.atteggiamento=='negativo');
		}

		let i = Math.floor(Math.random() * answers.length);
		answer = answers[i]; 

		await interaction.reply(answer['come-stai']);
        await wait(2000);
        await interaction.followUp(answer['link']);
    },
};
