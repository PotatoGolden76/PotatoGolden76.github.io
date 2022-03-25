var classes = {
    "Warrior": "../../html/Classes/warrior.html",
    "Rogue": "../../html/Classes/rogue.html",
    "Mage": "../../html/Classes/mage.html"
};

var races = {
    "Human": "",
    "Elf": "",
    "Orc": "",
    "Dwarf": "",
    "Gnome": "",
    "Halfling": "",
    "Draak": "",
    "Beastfolk": "",
    "Nadean": ""
}

function populate_menu() {
    var el;
    var html = '';

    el = document.getElementById('classes-list');
    for (var key in classes) {
        var value = classes[key];

        html += '<li><a class="dropdown-item" href="' + value + '">' + key + '</a></li>';
    }
    el.innerHTML = html;
    html = '';

    el = document.getElementById('races-list');
    for (var key in races) {
        var value = races[key];

        html += '<li><a class="dropdown-item" href="' + value + '">' + key + '</a></li>';
    }
    el.innerHTML = html;
    html = '';
}