const wait = require('node:timers/promises').setTimeout;

async function songs_helper(interaction, gifBible)
{
    function randomRange(min, max) { return Math.random() * (max - min) + min; }
    const TIME_MIN = 2500;
    const TIME_MAX = 5000;

    let regex = new RegExp("play");

    let songs = 'songs' in gifBible ? gifBible['songs'] : [];
    let phrases = [];

    for (let s of songs)
    {
        if(typeof(s) !== 'string')
        {
            console.log("Something wrong - songs not type of string");
            break;
        }

        let has_command = s.match(regex) == null ? false : true;
        s = has_command ? s : "!play " + s;

        // append to message
        phrases.push(s);
    }
    let message = phrases.join('\n');
    if (message == "")
    {
        return;
    }
    else
    {
        const FUNNY_EMOJI = ["🎛️","🎵", "🎚️", "🎼", "🎹", "🎶", "🥁", "🎸", "🎙️", "🎷", "🎺", "🎻"];
        let intro = "Vuoi un aiutino con la musica?\n Prova una di queste canzoni __EMOJI__ :\n"; 
        intro     = intro.replace("__EMOJI__", FUNNY_EMOJI[Math.floor(randomRange(0, FUNNY_EMOJI.length))]);
        message = intro + message;

        // print helper
        await interaction.followUp(message);
        await wait(randomRange(TIME_MIN, TIME_MAX));
    }
}

module.exports = songs_helper;