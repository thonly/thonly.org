const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/tl-header/shadow.css">
    <style>
        img {
            border-radius: 50%;
            transform: scale(-1, 1);
        }

        @media (max-width: 480px) {
            h1 {
                font-size: 2.5em;
            }
        }
    </style>
    <header>
        <section>
            <a href="/"><img title="Location: Sequoia Treehouse in Fresno, CA" src="components/tl-header/thonly.jpg"></a>
            <a href="/"><h1 title="Pronounced: Tawn Lee">Thon Ly</h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Research</h3>
                <nav>
                    <a href="#333.eco"><button>333.eco</button></a>
                    <h4>Research & Development</h4>
                    <menu>
                        <!--<li><a>Micro Wallet</a></li>
                        <li><a>Metaverse Gear</a></li>-->
                        <li><a>Free Internet</a></li>
                        <li><a>Free Energy</a></li>
                        <li><a>Zero-Point Physics</a></li>
                    </menu>
                    <h4>Doctoral Dissertation</h4>
                    <menu>
                        <li><a>Artificial Intelligence</a></li>
                        <li><a>Quantum Intelligence</a></li>
                        <li><a>Enlightened Intelligence</a></li>
                    </menu>
                </nav>
            </li>
            <li>
                <h3>Work</h3>
                <nav>
                    <a href="#me.thonly.org"><button>Business Card</button></a>
                    <h4>Instructor at Silicon Wat</h4>
                    <menu>
                        <li><a href="#SiliconWat.com">University</a></li>
                        <li><a href="#SiliconWat.org">Campus</a></li>
                        <li><a href="#SiliconWat.dev">Agency</a></li>
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
                </nav>
            </li>
            <li>
                <h3>Philanthropy</h3>
                <nav>
                    <a href="#Kiitos.Earth"><button>Kiitos.Earth</button></a>
                    <h4>Dear Kiitos</h4>
                    <menu>
                        <li><a>Zero Hero Equation</a></li>
                        <li><a>Non Zero-Sum Blockchain</a></li>
                    </menu>
                    <h4>Kitty Kiitos</h4>
                    <menu>
                        <li><a>Sports</a></li>
                        <li><a>Metaverse</a></li>
                    </menu>
                </nav>
            </li>
            <li>
                <h3>Meditation</h3>
                <nav>
                    <a href="#meditation.thonly.org"><button>Zero Mind</button></a>
                    <h4>Music</h4>
                    <menu>
                        <li><a href="#podcast.thonly.org">The Code of Success Podcast</a></li>
                        <li><a href="#radio.thonly.org">Coding Music Radio Station</a></li>
                        <li><a href="#music.thonly.org">Sinn Sisamouth Music Library</a></li>
                    </menu>
                    <h4>Sports</h4>
                    <menu>
                        <li><a>Ice Skating</a></li>
                        <li><a>Sepak Takraw</a></li>
                        <li><a>Kendo</a></li>
                    </menu>
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="ru" disabled>Russian</option>
                <option value="es" disabled>Spanish</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;