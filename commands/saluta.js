const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const guldo = require('../gif/guldo.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('saluta')
		.setDescription('Saluta la gente'),
	async execute(interaction) {
        console.log(interaction.user);

        await interaction.reply(`Bella ${interaction.user.username}!`);
        await wait(2000);
        await interaction.followUp("https://tenor.com/view/norman-osborn-spider-man-smile-gif-24532865");
    },
};
