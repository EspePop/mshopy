function start(event) {
    event.target.style.opacity = '0.3';
    event.dataTransfer.setData('acorde', event.target.id);
    event.dataTransfer.effectAllowed = 'move';
}

function over(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    return false;
}

function end(event) {
    event.target.style.opacity = '';
}
var chordsMap = {
    'c': 'do',
    'db': 'reb',
    'd': 're',
    'eb': 'mib',
    'e': 'mi',
    'f': 'fa',
    'gb': 'solb',
    'g': 'sol',
    'ab': 'lab',
    'a': 'la',
    'bb': 'sib',
    'b': 'si'
}

function drop(event) {
    var acorde = event.dataTransfer.getData('acorde');
    var recibe = event.currentTarget.id;

    if (chordsMap[recibe] === acorde) {
        var acordeElement = document.getElementById(acorde);
        acordeElement.style.opacity = '1';
        event.target.appendChild(acordeElement);

    } else {
        window.alert("Oh-oh... ¡este no es su acorde!");
    }
    // window.alert("¡Felicidades! Lo has hecho fenomenal")
}