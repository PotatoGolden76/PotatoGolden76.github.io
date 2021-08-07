var themes = []

themes.push({
    background: "#FADF63",
    icon: "#413620",
    highlight: "#dc3545"
})

themes.push({
    background: "#FFFFFF",
    icon: "#33ffff",
    highlight: "#dc3545"
})

var current = 0;
let root = document.documentElement;

function setTheme(index) {
    root.style.setProperty("--main-bg-color", themes[index].background);
    root.style.setProperty("--main-icon-color", themes[index].icon);
    root.style.setProperty("--main-highlight-color", themes[index].highlight);

    saveTheme();
}

function cycle() {
    current += 1;
    if(current >= themes.length) {
        current = 0
    }
    setTheme(current);
}

function saveTheme() {
    localStorage.setItem("theme", current);
}

function start() {
    let t = localStorage["theme"];
    console.log(t);
    
    if(t == null) {
        current = 0;
    } else {
        current = parseInt(t);
    }

    setTheme(current);
}

window.onload = function() {
    start();
}