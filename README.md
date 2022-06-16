# YouTube Shorts Redirector
Do you hate the YouTube Shorts layout when viewing a Short on desktop? Yeah, me too.

This extension automatically redirects you whenever you try to get to a /shorts/ video and sends you to the normal desktop layout for that video.

# Permissions / Why does this run on all Youtube urls?
The extension becomes active for any `*.youtube.com/*` url, not just when you visit a `*.youtube.com/shorts/*` url. The reason for this requirement is because YouTube is a single page app which means the doesn't actually "load" when you move between different videos.

If the extension was only active at urls like `*.youtube.com/shorts/*`, if you start out browsing `youtube.com`, this extension wouldn't load. Then, when you clicked a short video, it would replace the url in the browser but not actually reload this extension.

To get around this, the extension loads for all youtube urls and then watches changes to the url. Whenever you change to one of the shorts urls, it will redirect to the desktop layout for that video instead.