export const THONLY = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5500" : "https://thonly.org";
export const ECO333 = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5510" : "https://333.eco";
export const KIITOS = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5520" : "https://kiitos.earth";
export const UNIVERSITY = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5610" : "https://siliconwat.com";
export const CAMPUS = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5620" : "https://siliconwat.org";
export const STUDIOS = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5700" : "https://thonly.com";
export const METAVERSE = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5750" : "https://thonly.net";
export const MARKETS = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5800" : "https://nhiakou.com";
export const ORCHARDS = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5850" : "https://nhiakou.org";
export const HEARTBANK = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5900" : "https://heartbank.com";
export const FOUNDATION = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5950" : "https://heartbank.org";

export const AUTH = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5600" : "https://auth.siliconwat.com";
export const FRONTEND_COURSE = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5611" : "https://frontend.siliconwat.com";
export const BACKEND_COURSE = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5612" : "https://backend.siliconwat.com";
export const IOS_COURSE = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5613" : "https://ios.siliconwat.com";
export const FRONTEND_COHORT = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5621" : "https://frontend.siliconwat.org";
export const BACKEND_COHORT = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5622" : "https://backend.siliconwat.org";
export const IOS_COHORT = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5623" : "https://ios.siliconwat.org";
export const SHOWCASE = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5650" : "https://showcase.siliconwat.org";
export const QUIZ = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5651" : "https://quiz.siliconwat.com";
export const CODE = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5652" : "https://quiz.siliconwat.com";
export const FLASHCARD = window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5653" : "https://quiz.siliconwat.com";

export const TRILOGY = (() => {
    if (window.location.port === "5611" || window.location.hostname === "frontend.siliconwat.com") return ['frontend', 'course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5611" : "https://frontend.siliconwat.com"];
    if (window.location.port === "5612" || window.location.hostname === "backend.siliconwat.com") return ['backend', 'course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5612" : "https://backend.siliconwat.com"];
    if (window.location.port === "5613" || window.location.hostname === "ios.siliconwat.com") return ['ios', 'course', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5613" : "https://ios.siliconwat.com"];

    if (window.location.port === "5621" || window.location.hostname === "frontend.siliconwat.org") return ['frontend', 'cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5621" : "https://frontend.siliconwat.org"];
    if (window.location.port === "5622" || window.location.hostname === "backend.siliconwat.org") return ['backend', 'cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5622" : "https://backend.siliconwat.org"];
    if (window.location.port === "5623" || window.location.hostname === "ios.siliconwat.org") return ['ios', 'cohort', window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5623" : "https://ios.siliconwat.org"];
    return [null, null, null];
})();

export const GAME = (() => {
    if (window.location.port === "5651" || window.location.hostname === "quiz.siliconwat.com") return ["quiz", "Programming Concept Quizzes", "radial-gradient(circle at bottom left, #773344 0%, #E3B5A4 100%)"];
    if (window.location.port === "5652" || window.location.hostname === "code.siliconwat.com") return ["code", "Interactive Coding Exercises", "radial-gradient(circle at bottom left, #DBCBD8 0%, #564787 100%)"];
    if (window.location.port === "5653" || window.location.hostname === "flashcard.siliconwat.com") return ["flashcard", "Syntax Flashcard Games", "radial-gradient(circle at bottom left, #9AD4D6 0%, #101935 100%)"];
    return [null, null, null];
})();

export const HOME = (() => {
    switch(TRILOGY[0]) {
        case "frontend":
            return window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5611" : "https://frontend.siliconwat.com";
        case "backend":
            return window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5612" : "https://backend.siliconwat.com";
        case "ios":
            return window.location.hostname === '127.0.0.1' ? "http://127.0.0.1:5613" : "https://ios.siliconwat.com";
    }
})();

// showcase
export const BACKGROUND = "radial-gradient(circle at bottom left, hsla(161, 80%, 45%, 1) 0%, hsla(215, 80%, 45%, 1) 100%)";