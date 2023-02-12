let display = document.getElementById('screen');

const wipe = () => {
    display.value = '';
}

const show = (n) => {
    display.value += n;
}

const calc = () => {
    try{
    display.value = eval(display.value);
    }
    catch{
        alert("Invalid")
    }
}

const del = () => {
    display.value = display.value.slice(0,-1);
}