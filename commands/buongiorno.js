const { SlashCommandBuilder } = require('discord.js');
const victoria = require('../gif/victoria-guldo.json')
cascade_gif = require('../utils/cascade_gif');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('buongiorno')
		.setDescription('Buongiorno :SONOPROPRIOAMIOAGIO:'),
	async execute(interaction) 
	{
		await cascade_gif(interaction, victoria);
	},
};
