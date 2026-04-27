# XP Portfolio Website

A static, GitHub Pages-ready portfolio styled like a nostalgic Windows XP desktop.

## How to use

1. Upload all files in this folder to a GitHub repository.
2. In GitHub, go to **Settings → Pages** and publish from the main branch.
3. Edit `index.html` to change your name and intro text.

## Replace the CV and image

- Replace `assets/curriculum-vitae.doc` with your real CV. Keep the same filename, or update the path in `script.js`.
- Replace `assets/me.png` with your actual image. Keep the same filename, or update the path in `script.js`.

Both `curriculum vitae.doc` and `me.png` open in XP-style popup windows with placeholder previews.

## Replace folder placeholder files

Each folder/subfolder has a placeholder file you can replace:

- `assets/work/website/website-placeholder.txt`
- `assets/work/graphic-design/graphic-design-placeholder.txt`
- `assets/freelance/wegenweere/wegenweere-placeholder.txt`
- `assets/freelance/avansa/avansa-placeholder.txt`
- `assets/passion-projects/drawings/drawings-placeholder.txt`

To add more files or change labels, edit the `items` object in `script.js`.

## Swap the background image

1. Replace `assets/background.jpg` with your own image.
2. Open `styles.css`.
3. At the top, change this line:

```css
--desktop-background: radial-gradient(...);
```

To this:

```css
--desktop-background: url('assets/background.jpg');
```

That is the only required background change.
