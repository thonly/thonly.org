const template = document.createElement("template");

//TODO: later showcase github sponsors here?

/*
    update medium tip link to here; later to hb.me
    edit medium about to here
 */

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-footer/shadow.css">
    <nav>
        <main>
            <section>
                <h5>Education</h5>
                <ul>
                    <li><a href="https://economics.ucla.edu">Bachelor of Arts in Economics</a></li>
                    <li><a href="http://www.fullerton.edu/ecs">Master of Science in Software Engineering</a></li>
                    <li><a href="https://www.eng.hawaii.edu">Doctor of Philosophy (in progress)</a></li>
                </ul>
                <h5>Credentials</h5>
                <ul>
                    <li><a href="https://bitwiseindustries.com/apprenticeships/apprenticeships-for-students">Frontend React Apprenticeship</a></li>
                    <li><a href="https://consensys.net/academy/bootcamp">Fullstack Blockchain Bootcamp</a></li>
                    <li><a href="https://www.udacity.com/course/ios-developer-nanodegree--nd003">iOS Developer Nanodegree</a></li>
                </ul>
            </section>
            <section>
                <h5>Music</h5>
                <ul>
                    <li><a href="https://www.youtube.com/c/ThonLy">YouTube</a></li>
                    <li><a href="https://soundcloud.com/thonly">SoundCloud</a></li>
                    <li><a href="https://flat.io/thonly">Flat</a></li>
                    <li><a href="https://medium.com/@kiitos">Medium</a></li>
                </ul>
                <h5>Donate</h5>
                <ul>
                    <li><a href="https://heartbank.me">HeartBank</a></li>
                    <li><a href="https://github.com/sponsors/thonly">GitHub</a></li>
                    <li><a href="https://paypal.me/thonly">PayPal</a></li>
                </ul>
            </section>
            <section>
                <h5>Contact</h5>
                <ul>
                    <li><a href="mailto:thonly@ucla.edu">thonly@ucla.edu</a></li>
                    <li><a href="mailto:thonly@csu.fullerton.edu">thonly@csu.fullerton.edu</a></li>
                    <li><a href="mailto:thonly@hawaii.edu">thonly@hawaii.edu</a></li>
                </ul>
                <h5>Connect</h5>
                <ul>
                    <li><a href="https://twitter.com/thonly">Twitter</a></li>
                    <li><a href="https://www.facebook.com/thonly">Facebook</a></li>
                    <li><a href="https://instagram.com/thon.ly">Instagram</a></li>
                </ul>
            </section>
        </main>
        <footer>
            <small><a href="https://github.com/thonly">Thon Ly</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;