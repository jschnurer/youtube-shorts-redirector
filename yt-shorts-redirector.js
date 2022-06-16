if (!redirectIfAtShortsUrl()) {
  // If this is any other Youtube URL...
  // Set up an observer to watch the page URL to catch any time the user visits a shorts url.
  // This is required because Youtube is a Single Page App that does local URL manipulation.
  let previousUrl = '';

  const observer = new MutationObserver(function () {
    if (location.href !== previousUrl) {
      previousUrl = location.href;
      redirectIfAtShortsUrl();
    }
  });

  const config = { subtree: true, childList: true };

  observer.observe(document, config);
}

function redirectIfAtShortsUrl() {
  if (document.location.href.indexOf("/shorts/") > -1) {
    document.location.replace(document.location.href.replace("/shorts/", "/watch?v="));
    return true;
  }

  return false;
}