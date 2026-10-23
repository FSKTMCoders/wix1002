# Local development

[Repository README](../README.md) · [Content maintenance](content-maintenance.md) · [Publishing](deployment.md)

## Architecture

The site is static HTML, CSS, and JavaScript served directly by GitHub Pages. There is no application backend, Java execution service, package manifest, site generator, or build step. Browser interactions use JavaScript; Java source is teaching content or a downloadable model to run separately with a JDK.

Each section has an index page and 14 teaching-week directories, each containing `index.html`. Weeks 1–3 contain released materials in every section, and the Week 4 lecture is released; the remaining weekly pages currently contain availability placeholders. Most released weekly pages keep their styles and scripts inline. Tutorial 0 uses separate shared files.

## Preview locally

From the repository root, run:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

On Windows, the equivalent Python launcher command is:

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/). Stop the server with `Ctrl+C`. Use another available port if 8000 is occupied. Any equivalent static HTTP server is suitable.

Use HTTP preview when checking module imports, downloads, and storage. Opening an HTML file directly with a `file:` URL can behave differently. A local preview serves the repository at `/`; GitHub Pages serves it beneath `/wix1002/`. Preserve relative paths so both work.

## Files to edit

| Location | Responsibility |
| --- | --- |
| `index.html` | Course homepage, lecture availability cards/count, and featured NEW banners for lectures, tutorials, and labs. |
| `lectures/index.html`, `tutorials/index.html`, `labs/index.html` | Section cards and availability counts. |
| `<section>/weekN/index.html` | A teaching week's material or availability placeholder. |
| `assets/course.css` | Shared landing-page/navigation styles, also used by some weekly pages. |
| `assets/landing-motion.css`, `assets/landing-motion.js` | Landing-page background animation and parallax. |
| `assets/tutorial-week1.css`, `assets/tutorial-week1.js` | Tutorial 0 presentation, questions, scoring, saved progress, and result export. The filenames retain their teaching-week naming. |
| `assets/vendor/three-r170.module.min.js` | Vendored Three.js module loaded by the landing animation. |
| `assets/vendor/THREE-LICENSE.txt` | Licence notice for the vendored module. |
| `docs/`, `README.md`, `CONTRIBUTING.md` | Student guidance, maintenance instructions, and repository entry points. |

## Assets and browser behaviour

- Landing pages load the UM logo from the university portal. External reference sites and the logo need a network connection.
- Three.js is stored locally and dynamically imported by `landing-motion.js`. The animation supports reduced-motion preferences and a static fallback if WebGL is unavailable.
- Week 2's tutorial and lab PDFs are stored alongside their pages. The lab also includes `source-figure-000.jpg`.
- Week 3's tutorial and lab PDFs, and Lab 2's Java-model ZIP, are embedded as data URLs. Individual Java downloads may be generated from page content with `Blob` URLs. Retain these payloads when editing surrounding markup.
- Selected tutorial/lab scripts use local storage with page-specific keys. Preserve keys and saved-field identifiers when making compatible edits; changing them can disconnect existing saved work. Document an intentional reset if a content change requires one.
- Shared stylesheets on landing pages include query-string versions. If changing a cache version, update the relevant references consistently.

## Validation

There is currently no repository test suite or checked-in CI workflow. For a documentation change, check Markdown rendering, links, and agreement with the site. For content or behaviour changes, use the [content validation checklist](content-maintenance.md#validation-checklist) and exercise the actual browser interactions you changed. Compile and run changed Java models with JDK 25.
