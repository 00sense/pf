document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.keyCode == "C".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.keyCode == "V".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.keyCode == "X".charCodeAt(0)) {
        return false;
    }

    if (e.keyCode == 116) 
	e.preventDefault();
    };

document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("developertools", (e) => e.preventDefault());

document.addEventListener("inspect_element", (e) => e.preventDefault());