jQuery(function() {
    //$('body').html('Hello, World!');
});

chrome.extension.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
        jQuery('body').html(request.source);
    }
});

function onWindowLoad() {
    chrome.tabs.executeScript(null, {
        file: "js/jquery-1.12.4.min.js"
    });

    chrome.tabs.executeScript(null, {
        file: "js/getSource.js"
    });
}

window.onload = onWindowLoad;