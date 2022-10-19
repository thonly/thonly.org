const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><img src="thonly.jpg"></a>
            <a href="/"><h1 title="Pronounced: Tawn Lee">Thon Ly</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <nav>
            <ul>
                <li>
                    <h3>Research</h3>
                    <div>
                        <a href="#333.eco"><button>333.eco</button></a>
                        <h4>Research & Development</h4>
                        <menu>
                            <li><a>Free Energy</a></li>
                        </menu>
                        <h4>Doctoral Dissertation</h4>
                        <menu>
                            <li><a>Quantum Intelligence</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Work</h3>
                    <div>
                        <h4>Instructor at Silicon Wat</h4>
                        <menu>
                            <li><a href="#SiliconWat.com">University</a></li>
                            <li><a href="#SiliconWat.org">Campus</a></li>
                        </menu>
                        <h4>Game Creator at THonly™</h4>
                        <menu>
                            <li><a href="#THonly.com">Studios</a></li>
                            <li><a href="#THonly.net">Metaverse</a></li>
                        </menu>
                        <h4>Organic Farmer at Nhia Kou</h4>
                        <menu>
                            <li><a href="#NhiaKou.com">Markets</a></li>
                            <li><a href="#NhiaKou.org">Orchards</a></li>
                        </menu>
                        <h4>Founder at HeartBank®</h4>
                        <menu>
                            <li><a href="#HeartBank.com">Subsidiaries</a></li>
                            <li><a href="#HeartBank.org">Foundation</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Charity</h3>
                    <div>
                        <a href="#Kiitos.Earth"><button>Kiitos.Earth</button></a>
                        <h4>Dear Kiitos</h4>
                        <menu>
                            <li><a>Zero Hero Equation</a></li>
                            <li><a>Non Zero-Sum Blockchain</a></li>
                        </menu>
                        <h4>Charity Kitty</h4>
                        <menu>
                            <li><a>Sports</a></li>
                            <li><a>Metaverse</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Meditation</h3>
                    <div>
                        <h4>Music</h4>
                        <menu>
                            <li><a>Coding Music Podcast</a></li>
                            <li><a>Sinn Sisamouth Music Library</a></li>
                        </menu>
                        <h4>Sports</h4>
                        <menu>
                            <li><a>Ice Skating</a></li>
                            <li><a>Sepak Takraw</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
        </nav>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;