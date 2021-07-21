const androidIntentPrefix = "intra://"

function main() {
    let query = {
        active: true,
        currentWindow: true,
    }

    chrome.tabs.query(query, (tabs) => {
        let tab = tabs[0];

        new QRCode(document.getElementById("qrcode"), {
            text: tab.url,
            width: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H,
        });
    });
}

main();