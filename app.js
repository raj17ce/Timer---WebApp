const submit = document.getElementById("submit");

function onClickTimer() {

    const dtInput = document.getElementById("dtinput").value;
    const endDate = new Date(dtInput);
    const nowDate = new Date();

    const diff = (endDate - nowDate) / 1000 / 3600;
    console.log(diff);

    if (diff < 0) {
        return;
    }

    const dOut = document.getElementById("dvalue");
    const hOut = document.getElementById("hvalue");
    const mOut = document.getElementById("mvalue");
    const sOut = document.getElementById("svalue");

    const days = Math.floor(diff / 24);
    const hours = Math.floor(diff % 24);
    const minutes = Math.floor((diff * 60) % 60);
    const seconds = Math.floor((diff * 3600) % 60);

    dOut.innerHTML = days;
    hOut.innerHTML = hours;
    mOut.innerHTML = minutes;
    sOut.innerHTML = seconds;
}

submit.addEventListener('click', () => {
    setInterval(onClickTimer, 1000);
})