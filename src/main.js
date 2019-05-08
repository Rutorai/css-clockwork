// Set --hour, --minute and --second
const bodyStyle = document.body.style;
function setHourMinuteSecond() {
    const now = new Date();
    const h = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    bodyStyle.setProperty("--hour", "" + h);
    bodyStyle.setProperty("--minute", "" + min);
    bodyStyle.setProperty("--second", "" + sec);
}
setInterval(setHourMinuteSecond, 1000 /* 1s */);