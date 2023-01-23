const { SlashCommandBuilder } = require('discord.js');
const victoria = require('../gif/victoria-guldo.json')
const guldo = require('../gif/guldo.json')
const wait = require('node:timers/promises').setTimeout;
cascade_gif = require('../utils/cascade_gif');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('continua')
		.setDescription('Continua il buongiorno'),
	async execute(interaction) 
	{
		let answers = guldo.filter(elem => elem.atteggiamento =='continua');
		let i = Math.floor(Math.random() * answers.length);
		let answer = answers[i]; 
		
		// intro
		await interaction.reply(answer['come-stai']);
        await wait(2000);
        await interaction.followUp(answer['link']);

		// uccidi da victoria la intro per poter skippare il reply iniziale
		let victoria_cp = Object.assign({}, victoria); 
		delete victoria_cp['intro'];

		// intro 2
		let intro = victoria.intro;
		await interaction.followUp(intro.messaggio);
        await wait(2000);
        await interaction.followUp(intro.gif);
        await wait(5000);    

		// vai con il buongiorno!
		await cascade_gif(interaction, victoria_cp);
	},
};
