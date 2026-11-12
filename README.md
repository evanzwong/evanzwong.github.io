# evanzwong.github.io

Personal site. Plain HTML, CSS, and a little JavaScript. There is no build step
and nothing to install.

| File | What it is |
| --- | --- |
| `index.html` | All of the content, one section per block (About, Background, Experience, Projects, Coursework, Contact) |
| `styles.css` | All styling. Colors are the variables at the top of the file |
| `script.js` | Mobile menu, coursework filter, nav highlighting |
| `assets/images/` | Profile photo and favicon |
| `about/`, `experience/`, `projects/`, `coursework/`, `blog/` | Redirects so links to the old multi-page site still work |
| `404.html` | Shown by GitHub Pages for unknown URLs |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are, without running Jekyll |

## Preview locally

From this folder:

```sh
python -m http.server 4000
```

Then open <http://localhost:4000>. Edit a file, save, and refresh the browser.
Press `Ctrl+C` in the terminal to stop the server.

To check it on a phone, connect the phone to the same Wi-Fi, run `ipconfig` to
find this computer's IPv4 address, and open `http://<that address>:4000`.

## Publish

GitHub Pages serves whatever is on the `master` branch. Work on another branch
(for example `redesign`) and nothing changes on the live site until that branch
is merged into `master` and pushed.

## Editing content

- **New experience entry:** copy a `<div class="timeline-item">` block in `index.html`.
- **New project:** copy an `<article class="project-card">` block.
- **New course:** add an `<li>` to the right `course-list`. The counts update themselves.
- **Profile photo:** replace `assets/images/profile.jpg` (square, about 900 px wide).
