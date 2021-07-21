const androidIntentPrefix = "intra://"

function main() {
    let query = {
        active: true,
        currentWindow: true,
    }

    chrome.tabs.query(query, (tabs) => {
        let toRemove = ["/netsoul", "https://", "www.", "http://", "intra.epitech.eu", "/#!", "/#", "/all", "/group", "/soutenance"];
        let tab = tabs[0];
        let url = tab.url;

        for (let i = 0; i < toRemove.length; i++) {
            url = url.replace(toRemove[i], '');
        }

        new QRCode(document.getElementById("qrcode"), {
            text: "intra://" + url,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H,
        });
    });
}

main();