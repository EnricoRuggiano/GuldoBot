const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const victoria = require('../gif/victoria-guldo.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('buongiorno')
		.setDescription('Buongiorno :SONOPROPRIOAMIOAGIO:'),
	async execute(interaction) 
	{

		let reactions = victoria.reactions;
		let girls = victoria.gif;
		let intro = victoria.intro;

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
		let REACTION_THRESHOLD = Math.floor(randomRange(3, Math.floor(MAX/3)));

		// vai con le gif ora
		while (count < MAX && girls.length > 0)
		{
			shuffle(girls);
			await interaction.followUp(girls.pop());
			await wait(randomRange(TIME_MIN, TIME_MAX));
			reaction += 1;
			count += 1;

			// reaction
			console.log(`gif ${count} ] ${reaction}/${REACTION_THRESHOLD}`)
			if (reaction > REACTION_THRESHOLD)
			{
				await interaction.followUp(reactions[0]);
				shuffle(reactions);
				await wait(randomRange(TIME_MIN, TIME_MAX));
				reaction = 0;
				REACTION_THRESHOLD = Math.floor(randomRange(3, MAX))
			} 
		}
		console.log('BUONGIORNO ENDED ')
		await interaction.followUp("QUA HO FINITO, CHE DICI CONTINUIAMO A MIGLIORARE LA GIORNATA?");
	},
};
