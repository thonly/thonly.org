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
                font-size: 2em;
            }
        }

        @media (max-height: 480px) {
            section {
                flex: 1.5;
            }
        }
    </style>
    <header>
        <section>
            <a href="#"><img title="Location: Sequoia Treehouse in Fresno, CA" src="components/tl-header/thonly.jpg"></a>
            <h1 title="Pronounced: Tawn Lee">Thon Ly</h1>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <div>
            <ul>
                <li>
                    <h3>Research</h3>
                    <nav>
                        <a href="https://333.eco"><button>333.eco</button></a>
                        <h4>Research & Development</h4>
                        <menu>
                            <!--<li><a>Micro Wallet</a></li>
                            <li><a>Metaverse Gear</a></li>-->
                            <li><a href="#internet">Free Internet</a></li>
                            <li><a href="#energy">Free Energy</a></li>
                            <li><a href="#physics">Zero-Point Physics</a></li>
                        </menu>
                        <h4>Doctoral Dissertation</h4>
                        <menu>
                            <li><a href="#ai">Artificial Intelligence</a></li>
                            <li><a href="#qi">Quantum Intelligence</a></li>
                            <li><a href="#ei">Enlightened Intelligence</a></li>
                        </menu>
                    </nav>
                </li>
                <li>
                    <h3>Work</h3>
                    <nav>
                        <a href="https://me.thonly.org"><button>Business Card</button></a>
                        <h4>Instructor at Silicon Wat</h4>
                        <menu>
                            <li><a href="#university">University</a></li>
                            <li><a href="#campus">Campus</a></li>
                            <li><a href="#agency">Agency</a></li>
                        </menu>
                        <h4>Game Creator at THonly™</h4>
                        <menu>
                            <li><a href="#studios">Studios</a></li>
                            <li><a href="#metaverse">Metaverse</a></li>
                        </menu>
                        <h4>Organic Farmer at Nhia Kou</h4>
                        <menu>
                            <li><a href="#markets">Markets</a></li>
                            <li><a href="#orchards">Orchards</a></li>
                        </menu>
                        <h4>Founder at HeartBank<sup>®</sup></h4>
                        <menu>
                            <li><a href="#heartbank">Subsidiaries</a></li>
                            <li><a href="#foundation">Foundation</a></li>
                        </menu>
                    </nav>
                </li>
                <li>
                    <h3>Philanthropy</h3>
                    <nav>
                        <a href="https://kiitos.earth"><button>Kiitos.Earth</button></a>
                        <h4>Dear Kiitos</h4>
                        <menu>
                            <li><a href="#equation">Zero Hero Equation</a></li>
                            <li><a href="#blockchain">Non Zero-Sum Blockchain</a></li>
                        </menu>
                        <h4>Kitty Kiitos</h4>
                        <menu>
                            <li><a href="#sports">Sports</a></li>
                            <li><a href="#games">Metaverse</a></li>
                        </menu>
                    </nav>
                </li>
                <li>
                    <h3>Meditation</h3>
                    <nav>
                        <a href="https://zero.thonly.org"><button>Zero Joy Love</button></a>
                        <h4>Music</h4>
                        <menu>
                            <li><a href="#podcast">The Code of Success Podcast</a></li>
                            <li><a href="#radio">Coding Music Radio Station</a></li>
                            <li><a href="#music">Sinn Sisamouth Music Library</a></li>
                        </menu>
                        <h4>Sports</h4>
                        <menu>
                            <li><a href="#kendo">Kendo</a></li>
                            <li><a href="#takraw">Sepak Takraw</a></li>
                            <li><a href="#skating">Ice Skating</a></li>
                        </menu>
                    </nav>
                </li>
            </ul>
        </div>
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