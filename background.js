// This will create a context menu for links
chrome.contextMenus.create({
	"id": "archiveLink",
	"title": "Convert this link to archive.is",
	"contexts": ["link"],
  });
  
  // This will create a context menu for the page
  chrome.contextMenus.create({
	"id": "archivePage",
	"title": "Convert this page to archive.is",
	"contexts": ["page"],
  });
  
  // This function opens the archive.is URL
  function archiveUrl(url) {
	const archiveBaseUrl = 'https://archive.today/?run=1&url=';
	const archiveFullUrl = archiveBaseUrl + encodeURIComponent(url);
	chrome.tabs.create({ url: archiveFullUrl });
  }
  
  
  // This function handles clicks on the context menu items
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
	if (info.menuItemId === "archivePage") {
	  archiveUrl(info.pageUrl);
	} else if (info.menuItemId === "archiveLink") {
	  archiveUrl(info.linkUrl);
	}
  });
	