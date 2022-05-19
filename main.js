const elementSelector = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Something is wrong ${element}. Check the spelling...`)

}
const hour = elementSelector('.hour');
const minute = elementSelector('.minute');
const seconds = elementSelector('.seconds');
const timeSession = elementSelector('#time-session');

function clockRefresh() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let session = "AM";

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hour.textContent = h;
    minute.textContent = m;
    seconds.textContent = s;
    timeSession.textContent = session;

    setTimeout(() => {
        clockRefresh();
    }, 1000);
}

clockRefresh();