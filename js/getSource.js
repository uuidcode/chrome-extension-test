function getSource(body){
    return body.innerText;
}

chrome.extension.sendMessage({
    action: "getSource",
    source: getSource(document.body)
});