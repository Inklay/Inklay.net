import React from 'react'

const PokemonTCG = () => {
    return (
        <div className="content">
            <div className="banner">
                <img src="../../PokemonTCGBanner.jpg"/>
                <h1>Pokémon TCG</h1>
            </div>
            <div className="texts">
                <p>
                    <div className="title">
                        Description:
                    </div>
                    Pokémon TCG is a Discord bot allowing you to open Pokémon card booster from many expansions. The bot also features a collection system to view your and your friends card's collection.
                    <div className="title">
                        Add to bot to your server:
                    </div>
                    Click <a href="https://discord.com/api/oauth2/authorize?client_id=772212678772654100&permissions=10304&scope=bot">this</a> link to add the bot to your Discord server.
                    <div className="title">
                        Supported expansions:
                    </div>
                    The currently support expansions are:
                    <ul>
                        <li>Shining Fates</li>
                        <li>Vivid Voltage</li>
                        <li>Champion's Path</li>
                        <li>Darkness Ablaze</li>
                        <li>Rebel Clash</li>
                        <li>Sword & Shield</li>
                    </ul>
                    <div className="title">
                        Supported languages:
                    </div>
                    The bot currently only supports english and french, if you want to help your language to the bot, feel free to create a pull request on the Github repository.
                    <div className="title">
                        FAQ:
                    </div>
                    <b id="FAQ_multiple_server">Q: </b>Is ths collection stored per server or per user ?
                    <br/>
                    <b>A: </b>The card collection is stored per user, wich means you can see it on any server you're in.
                    <br/>
                    <br/>
                    <b id="FAQ_permission">Q: </b>Do I really need to give the bot a permission ?
                    <br/>
                    <b>A: </b>The only permission <b>required</b> for the bot to work are: "Send Messages", "Manage Messages" and "Add Reactions".
                    <br/>
                    <br/>
                    <b id="FAQ_bug_found">Q: </b>I found a bug, where can I report it ?
                    <br/>
                    <b>A: </b>If you found a bug, please report it using Github's issue system at this <a href="https://github.com/Inklay/Pokemon-TCG/issues">link</a>
                    <br/>
                    <br/>
                    <b id="FAQ_host_yoursel">Q: </b>How can I host my own version of the bot ?
                    <br/>
                    <b>A: </b>Everything is explained <a href="https://github.com/Inklay/Pokemon-TCG#host-the-bot-yourself">here</a>
                    <br/>
                    <br/>
                    <div className="title">
                        Planned features:
                    </div>
                    Here is the list of all the planned feature for the bot:
                    <ul>
                        <li>Support all previous expansions</li>
                        <li>Add more languages</li>
                    </ul>
                    <div className="title">
                        Changelog:
                    </div>
                    22 Frebruary 2021
                    <ul>
                        <li>Initial release</li>
                    </ul>
                    <div className="title">
                        Source code:
                    </div>
                    All the source code of this bot can be found on <a href="https://github.com/Inklay/Pokemon-TCG">this</a> Github repository.
                </p>
            </div>
        </div>
    )
}

export default PokemonTCG