const androidIntentPrefix = "intra://"

function main() {
    let query = {
        active: true,
        currentWindow: true,
    }

    chrome.tabs.query(query, (tabs) => {
        let toRemove = ["/netsoul", "https://", "www.", "http://", "/#!", "/#", "/all", "/group", "/soutenance"];
        let tab = tabs[0];
        let url = tab.url;

        for (let i = 0; i < toRemove.length; i++) {
            url = url.replace(toRemove[i], '');
        }

        if (!url.startsWith("intra.epitech.eu")) {
            document.getElementById("message").innerHTML = "go to https://intra.epitech.eu/";
            return;
        }

        url = url.replace("intra.epitech.eu", androidIntentPrefix)
        url = url.replace('///', '//');

        if (url === androidIntentPrefix)
            url += "dashboard";

        new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H,
        });
    });
}

main();