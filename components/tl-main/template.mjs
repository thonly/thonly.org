import "./tl-kiitos/element.mjs";
import "./tl-avatar/element.mjs";
import "./tl-robot/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/tl-main/shadow.css">
    <header>
        <h1>Currently in stealth development...</h1>
        <br>
        <a><button></button></a>
    </header>
    <main>
        <tl-kiitos></tl-kiitos>
    </main>
    <footer>
        <tl-avatar></tl-avatar>
        <!--<tl-robot></tl-robot>-->
    </footer>
    <video poster="thonly.jpeg" src="components/tl-main/thonly.mp4" autoplay preload loop muted playsinline></video>
`;

export default template;