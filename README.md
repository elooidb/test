# XP Portfolio Website

A static GitHub Pages-ready portfolio inspired by a Windows XP desktop.

## What is included

- Draggable desktop icons with saved positions in localStorage
- XP-style folder/file windows
- Thumbnail-style folder views
- Real taskbar window buttons for open/minimized windows
- Window focus, minimize, maximize, close, drag, and resize behavior
- Start/contact menu
- Contact form placeholder
- MS Paint-style drawing app with download + send options

## Replace the background

Replace this file:

`assets/background.jpg`

Then in `styles.css`, change the `--desktop-background` variable to:

```css
--desktop-background: url('assets/background.jpg');
```

The current default is a CSS-generated XP-inspired hill/sky background so the site works immediately.

## Replace placeholder work

Most placeholder content is mapped in `script.js` inside the `items` object. Replace files in the matching `assets/...` folders, then update labels/paths in `script.js` if needed.

## Forms and drawing submissions

The contact form and Paint drawing form currently use this placeholder endpoint:

`https://formspree.io/f/YOUR_FORM_ID`

Create a Formspree, Netlify Forms, Basin, Getform, or similar static-form endpoint and replace that URL in `script.js`.

For drawings, the form sends a hidden field called `drawingDataUrl` containing the canvas as a PNG data URL. For very complex drawings, some services may reject the payload if it is too large. The Paint app also includes a **Save PNG** button so visitors can download their drawing.

## Replace icons easily

All desktop/window icons now live in:

`assets/icons/`

Current files:

- `folder.svg`
- `document.svg`
- `image.svg`
- `paint.svg`
- `recycle-bin.svg`

The easiest option is to replace those files with your own icons using the same filenames. SVG works best, but PNG/JPG also works if you update the paths in the icon variables at the bottom of `styles.css`:

```css
--icon-folder:url('assets/icons/folder.svg');
--icon-document:url('assets/icons/document.svg');
--icon-image:url('assets/icons/image.svg');
--icon-paint:url('assets/icons/paint.svg');
--icon-recycle:url('assets/icons/recycle-bin.svg');
```

## Missing Skills recycle bin

The desktop now includes a **Missing Skills** recycle-bin icon. Opening it shows a Windows-style blue screen with the message “Missing skills not found.” The blue-screen **Back** button closes the window and returns visitors to the desktop. The regular Explorer-style **Back** button also closes any open window.

## Sounds
Interaction sounds are generated in `script.js` with the browser Web Audio API:
- click sound for button/icon clicks
- open sound when a normal window opens
- error sound for the full-screen Missing Skills blue screen

Browsers may only play sounds after the visitor has interacted with the page, which is normal.

## Missing Skills blue screen
The `Missing Skills` recycle bin opens as a full-screen blue-screen error. The Back button closes it and returns to the desktop.

## Missing Skills blue screen
The `Missing Skills` desktop icon is intentionally not opened through the window system. It triggers a full-page BSOD overlay in `script.js` via `openBsod()` and returns with `closeBsod()`.
