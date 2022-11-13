const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/tl-main/shadow.css">
    <slot></slot>
    <video poster="thonly.jpeg" src="components/tl-main/thonly.mp4" autoplay preload loop muted playsinline></video>
`;

export default template;