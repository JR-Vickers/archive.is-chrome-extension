// popup.js
document.addEventListener('DOMContentLoaded', function() {
    var archivePageButton = document.getElementById('archivePageButton');
    var archiveUrlButton = document.getElementById('archiveUrlButton');
    var urlInput = document.getElementById('urlInput');

    archivePageButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var currentTab = tabs[0];
            archiveUrl(currentTab.url);
        });
    });

    archiveUrlButton.addEventListener('click', function() {
        var urlToArchive = urlInput.value;
        if (urlToArchive) {
            archiveUrl(urlToArchive);
        }
    });
});

function archiveUrl(url) {
    const archiveBaseUrl = 'https://archive.today/?run=1&url=';
    const archiveFullUrl = archiveBaseUrl + encodeURIComponent(url);
    chrome.tabs.create({ url: archiveFullUrl });
}
