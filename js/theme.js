var themes = []

themes.push({
    accent: "#000000",
    icon: "#ffffff",
    highlight: "#dc3545",
    background: "#a4a4a4",
    text: "#000000",
    textarea: "#ffffff"
})

themes.push({
    accent: "#FADF63",
    icon: "#413620",
    highlight: "#dc3545",
    background: "#dfddd1",
    text: "#000000",
    textarea: "#ffffff"
})

themes.push({
    accent: "#cccccc",
    icon: "#222222",
    highlight: "#dc3545",
    background: "#e4e4e4",
    text: "#000000",
    textarea: "#ffffff"
})

themes.push({
    accent: "#272822",
    icon: "#cfcfc2",
    highlight: "#fd971f",
    background: "#75715e",
    text: "#f8f8f2",
    textarea: "#3e3d32"
})


var current = 0;
let root = document.documentElement;

function setTheme(index) {
    root.style.setProperty("--main-accent-color", themes[index].accent);
    root.style.setProperty("--main-icon-color", themes[index].icon);
    root.style.setProperty("--main-highlight-color", themes[index].highlight);
    root.style.setProperty("--main-background-color", themes[index].background);
    root.style.setProperty("--main-text-color", themes[index].text);
    root.style.setProperty("--main-text-area-color", themes[index].textarea);

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