const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const victoria = require('../gif/victoria-guldo.json');
songs_helper = require('../utils/songs_helper');
cascade_gif = require('../utils/cascade_gif');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('buongiorno')
		.setDescription('Buongiorno :SONOPROPRIOAMIOAGIO:'),
	async execute(interaction) 
	{
        await interaction.reply("Buongiorno");
        await wait(2000);
        await interaction.followUp("https://tenor.com/view/sasha-grey-blowing-kisses-kiss-kisses-love-gif-15002372");
        await wait(5000);    
		await songs_helper(interaction, victoria);
		await cascade_gif(interaction, victoria);
	},
};
