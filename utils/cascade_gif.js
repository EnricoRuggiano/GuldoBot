const wait = require('node:timers/promises').setTimeout;

async function cascade_gif(interaction, gifBible)
{
    let reactions = 'reactions' in gifBible? gifBible.reactions : [];
    let girls     = 'gif'       in gifBible? gifBible.gif : [];
    let intro     = 'intro'     in gifBible? gifBible.intro : {};

    // intro
    if(Object.keys(intro).length !== 0)
    {
        await interaction.reply(intro.messaggio);
        await wait(2000);
        await interaction.followUp(intro.gif);
        await wait(5000);    
    }

    function shuffle(arr) { arr.sort(() => Math.random() - 0.5); }
    function randomRange(min, max) { return Math.random() * (max - min) + min; }

    let count = 0;
    let reaction = 0;
    const MAX = 40;
    const TIME_MIN = 4000;
    const TIME_MAX = 10000;
    let REACTION_THRESHOLD = Math.floor(randomRange(3, Math.floor(MAX/2)));

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
        if (reaction > REACTION_THRESHOLD && reactions.length > 0 )
        {
            await interaction.followUp(reactions[0]);
            shuffle(reactions);
            await wait(randomRange(TIME_MIN, TIME_MAX));
            reaction = 0;
            REACTION_THRESHOLD = Math.floor(randomRange(3, MAX/2))
        } 
    }
    console.log('BUONGIORNO ENDED')
    await interaction.followUp("QUA HO FINITO, CHE DICI CONTINUIAMO A MIGLIORARE LA GIORNATA?");
}

module.exports = cascade_gif;