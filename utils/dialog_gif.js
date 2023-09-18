const wait = require('node:timers/promises').setTimeout;

async function dialog_gif(interaction, gifBible, fstkey, sndkey, max)
{
    let intro     = 'intro'     in gifBible? gifBible.intro : {};
    let first     = fstkey      in gifBible? gifBible[fstkey] : [];
    let second    = sndkey      in gifBible? gifBible[sndkey] : [];

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
    const MAX = max? max: Math.floor(Math.max(...[first.length, second.length]) / 2);
    const TIME_MIN = 2500;
    const TIME_MAX = 5000;

    // vai con le gif ora
    while (count < MAX && (first.length > 0 || second.length > 0))
    {
        shuffle(first);
        shuffle(second);

        let fst_gif = first.pop();
        let snd_gif = second.pop();

        await interaction.followUp(fst_gif);
        await wait(randomRange(TIME_MIN, TIME_MAX));

        await interaction.followUp(snd_gif);
        await wait(randomRange(TIME_MIN, TIME_MAX));

        count += 1;
    }
}

module.exports = dialog_gif;