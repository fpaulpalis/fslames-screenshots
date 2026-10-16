# FSLAMES screenshots

Screenshot documentation for the FSLAMES app, published as a GitHub Pages gallery. The site is plain HTML, CSS, and JavaScript, with no build step and no dependencies.

## Folder structure

```
index.html            Gallery entry point
site.css              Styles
site.js               Search, feature filter, lightbox
manifest.js           One entry per screenshot: file, feature, title, section, description
SCREENSHOT_INDEX.md   Detailed table: screen, route, component, source file
assets/images/        Logos used by the site
<feature>/            Screenshots, one folder per feature
```

## Naming

Screenshots are named `{feature}_{screen}_{section}_{NN}.png`:

- Lowercase, with `_` between parts and `-` inside a part (`auth_forgot-password_security-check_01.png`).
- `section` is optional, but include it when it is needed to tell two screens apart.
- `NN` is a two-digit sequence number. Continuation images keep the same name with the next number.
- The folder name is the `feature` part of the file name.

## Adding a screenshot

1. Save the PNG in its feature folder (create the folder if the feature is new), using the naming rules above.
2. Add an entry to the right group in `manifest.js`, in user-journey order.
3. Add a row to `SCREENSHOT_INDEX.md`, in the same order. Include the route and source file, and mark them UNVERIFIED if you have not checked the code.
4. Preview the site (below) and check the new card and its full-size view.

## Updating the index

`SCREENSHOT_INDEX.md` is maintained by hand. Keep its rows in the same order as `manifest.js`, and make sure every image link points to an existing file.

## Previewing locally

The site loads `manifest.js` and the images with relative paths, so use a local server. Opening `index.html` directly from the file system may block the script in some browsers.

```bash
python -m http.server 8000
```

Then open http://localhost:8000/ in a browser.

## Publishing with GitHub Pages

1. Push the repository to GitHub on the `main` branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to `/ (root)`, then save.
5. Wait for the first deployment. The site will be at `https://fpaulpalis.github.io/fslames-screenshots/`.

All paths are relative, so the site works under the repository subpath.
