import "./tl-donors/element.mjs";
const template = document.createElement("template");

//TODO: later showcase github sponsors here?

/*
    update medium tip link to here; later to hb.me
    edit medium about to here
 */

template.innerHTML = `
    <link rel="stylesheet" href="components/tl-footer/shadow.css">
    <style>
        @media (max-width: 480px) {
            section:last-child tl-donors {
                grid-column: 1 / span 2;
                grid-row: 1 / 1;
            }
            
            section:last-child div:first-child {
                grid-column: 2 / 2;
                grid-row: 2 / 2;
            }
        }
    </style>
    <nav>
        <main>
            <section>
                <div>
                    <h5>Education</h5>
                    <ul>
                        <li><a href="https://economics.ucla.edu">Bachelor of Arts in Economics</a></li>
                        <li><a href="http://www.fullerton.edu/ecs">Master of Science in Software Engineering</a></li>
                        <li><a href="https://www.eng.hawaii.edu">Doctor of Philosophy (in progress)</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Credentials</h5>
                    <ul>
                        <li><a href="https://bitwiseindustries.com/apprenticeships/apprenticeships-for-students">Frontend React Apprenticeship</a></li>
                        <li><a href="https://consensys.net/academy/bootcamp">Fullstack Blockchain Bootcamp</a></li>
                        <li><a href="https://www.udacity.com/course/ios-developer-nanodegree--nd003">iOS Developer Nanodegree</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Music</h5>
                    <ul>
                        <li><a href="https://music.thonly.org">THonly</a></li>
                        <li><a href="https://soundcloud.com/thonly">SoundCloud</a></li>
                        <li><a href="https://flat.io/thonly">Flat</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Sports</h5>
                    <ul>
                        <li><a href="https://kitty.kiitos.earth">Kitty Kiitos</a></li>
                        <li><a href="https://www.youtube.com/c/ThonLy">YouTube</a></li>
                        <li><a href="https://instagram.com/thon.ly">Instagram</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Thank</h5>
                    <ul>
                    <li><a href="https://kitty.kiitos.earth">Dear Kiitos</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Donate</h5>
                    <ul>
                        <li><a href="https://heartbank.me">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/thonly">GitHub</a></li>
                        <li><a href="https://paypal.me/thonly">PayPal</a></li>
                    </ul>
                </div>
            </section>
            <section>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto:thonly@ucla.edu">thonly@ucla.edu</a></li>
                        <li><a href="mailto:thonly@csu.fullerton.edu">thonly@csu.fullerton.edu</a></li>
                        <li><a href="mailto:thonly@hawaii.edu">thonly@hawaii.edu</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="https://talk.siliconwat.org">Silicon Wat</a></li>
                        <li><a href="https://twitter.com/thonly">Twitter</a></li>
                        <li><a href="https://www.facebook.com/thonly">Facebook</a></li>
                    </ul>
                </div>
                <tl-donors></tl-donors>
            </section>
        </main>
        <footer>
            <small><a href="https://github.com/thonly">Thon Ly</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;