function turnLights() {
    const lamp = document.getElementById("bulb");
    const button = document.getElementById("switch");

    lamp.classList.toggle('on');
    button.classList.toggle('on');
}
 