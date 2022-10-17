const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><h1>Thon Ly</h1></a>
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
                        <a href="#backend-cohort"><button>333.eco</button></a>
                        <h4>Doctoral Dissertation</h4>
                        <menu>
                            <li><a>Watch Videos on Udemy</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a href="#backend-quiz">Take Quizzes to Check Understanding</a></li>
                        </menu>
                        <h4>Research & Development</h4>
                        <menu>
                            <li><a href="#backend-podcast">Podcast: Motivation & Coding Music</a></li>
                            <li><a href="#backend-code">Interactive Coding Exercises</a></li>
                            <li><a>Remote Pair Programming on Discord</a></li>
                            <li><a>Students' Solo Projects on Replit</a></li>
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
                            <li><a>University</a></li>
                            <li><a>Campus</a></li>
                        </menu>
                        <h4>Game Creator at THonly™</h4>
                        <menu>
                            <li><a>Studios</a></li>
                            <li><a>Metaverse</a></li>
                        </menu>
                        <h4>Organic Farmer at Nhia Kou</h4>
                        <menu>
                            <li><a>Markets</a></li>
                            <li><a>Orchards</a></li>
                        </menu>
                        <h4>Founder at HeartBank®</h4>
                        <menu>
                            <li><a>Subsidiaries</a></li>
                            <li><a>Foundation</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Charity</h3>
                    <div>
                        <a href="#ios-cohort"><button>Kiitos.Earth</button></a>
                        <h4>Dear Kiitos</h4>
                        <menu>
                            <li><a>Watch Videos on Udemy</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a href="#ios-quiz">Take Quizzes to Check Understanding</a></li>
                        </menu>
                        <h4>Kitty for Charity</h4>
                        <menu>
                            <li><a href="#ios-podcast">Podcast: Motivation & Coding Music</a></li>
                            <li><a href="#ios-code">Interactive Coding Exercises</a></li>
                            <li><a>Remote Pair Programming on Discord</a></li>
                            <li><a>Students' Solo Projects on GitHub</a></li>
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