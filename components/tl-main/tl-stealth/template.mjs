import "../tl-kiitos/element.mjs";
import "../tl-avatar/element.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/tl-main/tl-stealth/shadow.css">
    <header>
        <tl-kiitos></tl-kiitos>
    </header>
    <main>
        <h1>Currently in stealth development...</h1>
        <br>
        <a><button></button></a>
    </main>
    <footer>
        <tl-avatar></tl-avatar>
    </footer>
`;

export default template;