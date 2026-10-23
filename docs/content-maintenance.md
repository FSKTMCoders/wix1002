# Content maintenance

[Repository README](../README.md) · [Local development](development.md) · [Publishing](deployment.md)

## Teaching weeks and worksheet numbers

Directory names describe the **teaching week**, while tutorial/lab titles describe the **worksheet number**. Tutorials and labs cover the preceding lecture, with introductory activities numbered 0 in Week 1.

| Teaching week | Lecture path | Tutorial label and path | Lab label and path |
| --- | --- | --- | --- |
| 1 | `lectures/week1/` | Tutorial 0 · `tutorials/week1/` | Lab 0 · `labs/week1/` |
| 2 | `lectures/week2/` | Tutorial 1 · `tutorials/week2/` | Lab 1 · `labs/week2/` |
| 3 | `lectures/week3/` | Tutorial 2 · `tutorials/week3/` | Lab 2 · `labs/week3/` |
| 4 | `lectures/week4/` | Tutorial 3 · `tutorials/week4/` | Lab 3 · `labs/week4/` |
| N | `lectures/weekN/` | Tutorial N−1 · `tutorials/weekN/` | Lab N−1 · `labs/weekN/` |

Retain this convention in titles, headings, navigation labels, downloads, and cards. Companion repository folders use worksheet numbers, for example `tutorial-02/` and `lab-02/`. Do not rename website week directories to match those folders.

## Add or replace weekly material

1. Read the source worksheet or lecture material and identify the learning outcomes, required inputs, units, sample runs, and question numbering.
2. Replace the appropriate `<section>/weekN/index.html` availability page. Use an existing released page with suitable controls as a starting point, then update its title, description, headings, content, IDs, and navigation.
3. Add relevant worked examples, visuals, checks, and explanations. Identify browser simulations as demonstrations; verify Java solutions separately with JDK 27.
4. Keep an original worksheet download when source material is supplied. Put new PDF/image files beside the weekly page and link them with relative paths. Week 4 follows this pattern (`T-1002-03.pdf`, `L-1002-03.pdf`, and `Lab3-JDK27-Models.zip`). Existing Week 3 pages embed downloads; preserve those unless deliberately migrating them and updating every reference.
5. Verify all download buttons, including generated Java files and any bundled ZIP. Keep downloaded models consistent with the displayed code and worksheet requirements.
6. Update release cards and counts as described below only when the material is ready. Preview and validate before publishing.

Use the source's requirements when adapting examples. For example, **Lab 2 Question 6 requires Fahrenheit input**, followed by conversion to Celsius before calculating water-heating energy. Do not simplify that task by changing the input unit to Celsius.

## Relative links

For a weekly page at `<section>/weekN/index.html`:

| Destination | Relative path |
| --- | --- |
| Its section index | `../` |
| Course homepage | `../../` |
| Lecture index | `../../lectures/` |
| Another weekly lecture | `../../lectures/week2/` (adjust the week) |
| Shared asset | `../../assets/course.css` (adjust the filename) |
| Worksheet stored beside the page | `worksheet.pdf` (use the real filename) |

Section indexes use `weekN/` for weekly pages and `../assets/` for shared assets. The homepage uses `lectures/weekN/`, `tutorials/weekN/`, or `labs/weekN/`. Avoid links beginning `/assets/` or `/lectures/`, which omit the `/wix1002/` project prefix on GitHub Pages.

## Update release cards and counts

Availability is maintained manually; creating a page does not update the indexes automatically.

| Released material | Required updates |
| --- | --- |
| Lecture | Update the matching card in both `lectures/index.html` and root `index.html`, including topic, summary, available styling/status, link text, and availability counts. |
| Tutorial | Update its card, worksheet number, topic, status, link text, and count in `tutorials/index.html`. |
| Lab | Update its card, worksheet number, topic, status, link text, and count in `labs/index.html`. |

Keep each section's available and coming-soon counts totalling 14. Remove placeholder accessibility labels when a card becomes available. Root `index.html`'s weekly grid and count track **lectures**; its separate featured cards link to selected tutorial and lab releases.

Update the [README materials table](../README.md#available-materials) and current availability description whenever the release state changes. Keep student and maintenance guidance consistent with any changed controls or workflow.

## Manage NEW banners separately

The homepage currently highlights **Week 4 Lecture, Tutorial 3, and Lab 3**. NEW banners are an editorial choice, separate from whether a page is available. Publishing or correcting material should retain the current highlights unless the release update also calls for moving them.

When moving a highlight, update the corresponding featured card in root `index.html`: its link, displayed week or worksheet number, heading, description, and call to action. The current featured cards use `.available` and `.new-release`; retain the reduced-motion treatment for the animation. Check all three cards rather than assuming their labels share the same number.

## Validation checklist

- [ ] Titles, worksheet numbers, teaching-week paths, source questions, and cross-links agree.
- [ ] Released pages replace availability placeholders; cards and counts match the actual release state.
- [ ] Homepage highlights match the intended releases, and the README reflects the same availability.
- [ ] Home, section, weekly, companion-repository, and in-page links reach the intended destinations.
- [ ] Original PDFs, images, Java files, note exports, and ZIP downloads open and contain the intended material.
- [ ] Changed examples and downloaded Java models compile/run on JDK 27; test normal cases, boundaries, and invalid input where relevant. Random examples should be checked for range and properties rather than an exact repeated output.
- [ ] Interactive checks, generated outputs, feedback, and worked explanations agree with the Java models.
- [ ] Saved notes/progress survive a reload where offered; export and reset work as labelled.
- [ ] Layout works on a narrow screen; keyboard navigation, focus, accessible labels, teaching/fullscreen controls, and print output work where offered.
- [ ] Motion respects reduced-motion preferences when changing animated elements; browser console/network tools show no new errors or missing local assets.
- [ ] The diff contains only intended files, with no generated `.class` files, local exports, or unrelated formatting changes.

After publishing, repeat the relevant checks on the live `/wix1002/` URLs. Local preview alone does not verify deployment or hosted paths.
