const template = document.createElement("template");

// Reference: https://codepen.io/smartbadger/pen/Nzygqm?editors=0110

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/shadow.css">
    <slot></slot>
    <video poster="thonly.jpeg" src="components/sw-main/thonly.mov" autoplay preload loop muted></video>
`;

export default template;