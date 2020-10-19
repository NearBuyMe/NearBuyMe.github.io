// detect if element is scrolled into view

function isScrolledIntoView(elem) {
    var rect = elem.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

// change text every couple milliseconds seconds

var text = ["G", "Gr", "Gri", "Grip", "Grip t", "Grip th", "Grip the", "Grip the w", "Grip the wh", "Grip the whe", "Grip the whee", "Grip the wheel w", "Grip the wheel wi", "Grip the wheel wit", "Grip the wheel with", "Grip the wheel with c", "Grip the wheel with co", "Grip the wheel with con", "Grip the wheel with conf", "Grip the wheel with confi", "Grip the wheel with confid", "Grip the wheel with confide", "Grip the wheel with confiden", "Grip the wheel with confidenc", "Grip the wheel with confidence", "Grip the wheel with confidence."];

var counter = 0;
var elem = document.getElementById("title");
var inst = setInterval(change, 50);

function change() {
    console.log("Timer fired.")
    if (isScrolledIntoView(elem)) {
        console.log("Elem is scrolled into view")
        elem.innerHTML = text[counter];
        counter++;
        if (counter >= text.length) {
            counter = text.length - 1;
            //clearInterval(inst);
        }
    }
}

// uncheck radios to prevent multiple radios being selected

var allRadios = document.getElementsByName('re');
var booRadio;
var x = 0;
for(x=0; x < allRadios.length; x++){
    allRadios[x].onclick = function() {
        if (booRadio == this) {
            this.checked = false;
            booRadio = null;
        }else{
            booRadio = this;
        }
    };
}