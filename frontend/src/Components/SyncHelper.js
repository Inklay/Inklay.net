import React from 'react'

const SyncHelper = () => {
    return (
        <div className="content">
            <div className="banner">
                <img src="../../SyncHelperBanner.jpg"/>
                <h1>ATS & ETS2 SyncHelper</h1>
            </div>
            <div className="texts">
                <p>
                    <div className="title">
                        Description:
                    </div>
                    ATS & ETS2 SyncHelper is a free and open source software that allows you to have the same jobs offers on Americain Truck Simulator and Euro Truck Simulator 2 as your friends.
                    <div className="title">
                        Download:
                    </div>
                    Here are the download link for the latest version of ATS & ETS2 SyncHelper:
                    <ul>
                        <li><a href="https://github.com/Inklay/ETS2-ATS-Sync-Helper/releases/latest/download/ETS2_ATS_Sync_Helper.exe">SyncHelper v5.8.2 (exe) (5MB)</a></li>
                        <li><a href="https://github.com/Inklay/ETS2-ATS-Sync-Helper/releases/latest/download/ETS2_ATS_Sync_Helper.zip">SyncHelper v5.8.2 (zip) (2MB)</a></li>
                    </ul>
                    <div className="title">
                        Compatibility:
                    </div>
                    This software currently works with:
                    <ul>
                        <li>Euro Truck Simulator 2 version 1.39</li>
                        <li>Supported DLCs:</li>
                        <ul>
                            <li>Scandinavia</li>
                            <li>Going East!</li>
                            <li>Vive la France!</li>
                            <li>Italia</li>
                            <li>High Power Cargo Pack</li>
                            <li>Heavy Cargo Pack</li>
                            <li>Beyond the Baltic Sea</li>
                            <li>Road to the Black Sea</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>Americain Truck Simulator version 1.39</li>
                        <li>Supported DLCs:</li>
                        <ul>
                            <li>New Mexico</li>
                            <li>Oregon</li>
                            <li>Washington</li>
                            <li>Heavy Caro Pack</li>
                            <li>Forest Machinery</li>
                            <li>Utah</li>
                            <li>Idaho</li>
                            <li>Colordao</li>
                        </ul>
                    </ul>
                    <div className="title">
                        FAQ:
                    </div>
                    <b id="FAQ_do_I_need_internet">Q: </b>Do I need an Internet connection to use this software ?
                    <br/>
                    <b>A: </b>You do need a working Internet connection to download the job offers.
                    <br/>
                    <br/>
                    <b id="FAQ_promods">Q: </b>Does this work with ProMods Europe, ProMods Canada or ProMods Middle-East ?
                    <br/>
                    <b>A: </b>The software doesn't support any version of the ProMods packs, but it is a planned feature.
                    <br/>
                    <br/>
                    <b id="FAQ_HTTP_error">Q: </b>I got "Could not download the job list" error when I want to synchronize, what can I do ?
                    <br/>
                    <b>A: </b>This error is usuely due to a temporary server issue, if your Internet connection is working properly, wait a few minutes and try again.
                    <br/>
                    <br/>
                    <b id="FAQ_bug_found">Q: </b>I found a bug, where can I report it ?
                    <br/>
                    <b>A: </b>If you found a bug, please report it using Github's issue system at this <a href="https://github.com/Inklay/ETS2-ATS-Sync-Helper/issues">link</a>
                    <br/>
                    <br/>
                    <b id="FAQ_compile_and_setup">Q: </b>How can I compile my own version of this software ?
                    <br/>
                    <b>A: </b>Everything is explained <a href="https://github.com/Inklay/ETS2-ATS-Sync-Helper#user-content-compiling-the-source-code">here</a>
                    <br/>
                    <br/>
                    <b id="FAQ_backend">Q: </b>Where is the server code ?
                    <br/>
                    <b>A: </b>The backend code can be found <a href="https://github.com/Inklay/Inklay.net/tree/main/src/SyncHelper">here</a>
                    <div className="title">
                        Planned features:
                    </div>
                    Here is the list of all the planned feature for this software:
                    <ul>
                        <li>Support ProMods packs</li>
                        <li>Support Iberia DLC when it will come out</li>
                        <li>Support Wyoming DLC when it will come out</li>
                        <li>Update the job lists to support multiple DLC (currently working on it)</li>
                    </ul>
                    <div className="title">
                        Changelog:
                    </div>
                    11 Frebruary 2021 - Version 5.8.2
                    <ul>
                        <li>Updated server address</li>
                    </ul>
                    20 January 2021 - Version 5.8.1
                    <ul>
                        <li>Added ATS Colordao DLC compatibility</li>
                    </ul>
                    10 November 2020 - Version 5.8.0
                    <ul>
                        <li>Added ATS compatibility</li>
                        <li>Fixed some bugs with the server communication</li>
                    </ul>
                    16 October 2020 - Version 5.7.0
                    <ul>
                        <li>Added 1.37 (currently supporting 1.38) and newer ETS2 version support</li>
                        <li>Added ETS2 "Road to the black sea" DLC</li>
                        <li>Using AWS instead of Azure severs</li>
                    </ul>
                    <div className="title">
                        Source code:
                    </div>
                    All the source code of this software can be found on <a href="https://github.com/Inklay/ETS2-ATS-Sync-Helper">this</a> Github repository.
                </p>
            </div>
        </div>
    )
}

export default SyncHelper