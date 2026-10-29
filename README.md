# WIX1002 · Fundamentals of Programming

Interactive course materials for **WIX1002 Fundamentals of Programming** at the **Faculty of Computer Science and Information Technology, Universiti Malaya**.

**Lecturer:** Ts. Dr. Mohamad Hazim Md Hanif

**Course Java version:** JDK 27

**Course structure:** 14 teaching weeks, with lectures, tutorials, and labs released progressively.

**[Open the course website](https://fsktmcoders.github.io/wix1002/)** · [Lectures](https://fsktmcoders.github.io/wix1002/lectures/) · [Tutorials](https://fsktmcoders.github.io/wix1002/tutorials/) · [Labs](https://fsktmcoders.github.io/wix1002/labs/)

## Available materials

The website currently contains materials for **Weeks 1–5** in all three sections. Weeks 6–14 have availability pages and are marked **Coming soon**. The homepage's **NEW** banners currently highlight **Week 5 Lecture, Tutorial 4, and Lab 4**.

| Teaching week | Lecture | Tutorial | Lab |
| --- | --- | --- | --- |
| 1 | [Problem Solving in Programming & Concept of Vibe Coding](https://fsktmcoders.github.io/wix1002/lectures/week1/) | [Tutorial 0 · Problem solving & Java basics](https://fsktmcoders.github.io/wix1002/tutorials/week1/) | [Lab 0 · Java, Git & GitHub setup](https://fsktmcoders.github.io/wix1002/labs/week1/) |
| 2 | [Java Fundamentals & Concept of Vibe Coding](https://fsktmcoders.github.io/wix1002/lectures/week2/) | [Tutorial 1 · IPO, algorithms & Java 27](https://fsktmcoders.github.io/wix1002/tutorials/week2/) | [Lab 1 · Getting started with Java 27](https://fsktmcoders.github.io/wix1002/labs/week2/) |
| 3 | [Flow of Control: Selection & Vibe Coding](https://fsktmcoders.github.io/wix1002/lectures/week3/) | [Tutorial 2 · Java Fundamental](https://fsktmcoders.github.io/wix1002/tutorials/week3/) | [Lab 2 · Java Fundamental](https://fsktmcoders.github.io/wix1002/labs/week3/) |
| 4 | [Flow of Control: Repetition & Vibe Coding](https://fsktmcoders.github.io/wix1002/lectures/week4/) | [Tutorial 3 · Flow of Control (Selection)](https://fsktmcoders.github.io/wix1002/tutorials/week4/) | [Lab 3 · Flow of Control (Selection)](https://fsktmcoders.github.io/wix1002/labs/week4/) |
| 5 | [Arrays & Vibe Coding](https://fsktmcoders.github.io/wix1002/lectures/week5/) | [Tutorial 4 · Flow of Control (Repetition)](https://fsktmcoders.github.io/wix1002/tutorials/week5/) | [Lab 4 · Flow of Control (Repetition)](https://fsktmcoders.github.io/wix1002/labs/week5/) |

**Numbering:** tutorials and labs practise the previous week's lecture. Teaching Week 1 starts with Tutorial 0 and Lab 0; Week 2 contains Tutorial 1 and Lab 1; Week 3 contains Tutorial 2 and Lab 2; Week 4 contains Tutorial 3 and Lab 3; Week 5 contains Tutorial 4 and Lab 4. Website folders always follow the **teaching week**, so Tutorial 2 is at `tutorials/week3/`, and Lab 2 is at `labs/week3/`.

## Learning features

- Lectures include reading and teaching views, fullscreen and print controls, worked examples, interactive activities, self-checks, and guided AI-assisted programming exercises.
- Tutorial 0 includes a 40-mark practice activity with feedback and saved progress. Later tutorials include planning exercises, answer checks, interactive models, and Java solutions.
- Labs cover IDE setup, Git and GitHub, Java programs, visual explanations, and interactive calculation traces. Labs 2 and 3 also offer individual Java downloads and a ZIP of all six models.
- Original worksheet PDFs are available from the Week 2–4 tutorial and lab pages.
- Selected activities save notes or progress in the current browser and provide exports. Browser activities illustrate behaviour; run Java programs separately using JDK 27.

See the [student guide](docs/student-guide.md) for setup, saved progress, downloads, and the recommended study workflow.

## Course repositories

| Repository | Purpose |
| --- | --- |
| **[wix1002](https://github.com/FSKTMCoders/wix1002)** · this repository | Course website, interactive notes, tutorials, labs, and shared web assets. |
| [wix1002-tutorial-2026-s1](https://github.com/FSKTMCoders/wix1002-tutorial-2026-s1) | Original tutorial worksheets and instructions for keeping Markdown answers in your own fork. |
| [wix1002-lab-2026-s1](https://github.com/FSKTMCoders/wix1002-lab-2026-s1) | Original lab worksheets, supporting files, and instructions for keeping Java source and projects in your own fork. |

The companion repositories use worksheet folders such as `tutorial-02/` and `lab-02/`; this website uses teaching-week folders such as `tutorials/week3/` and `labs/week3/`. Follow each companion repository's README for its answer workflow.

## Preview the website locally

This is a static HTML, CSS, and JavaScript website. It has no package installation or build step. With Git and Python 3 installed:

```bash
git clone https://github.com/FSKTMCoders/wix1002.git
cd wix1002
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in a modern browser. Stop the server with `Ctrl+C`. On Windows, use `py -m http.server 8000 --bind 127.0.0.1` if Python is installed through the launcher. JDK 27 is needed to run the Java examples, rather than to serve the website.

## Repository layout

```text
.
├── index.html                 Course homepage, lecture cards, NEW banners
├── lectures/
│   ├── index.html             Lecture index and availability count
│   └── week1/ … week14/       Weekly index.html pages
├── tutorials/
│   ├── index.html             Tutorial index and availability count
│   └── week1/ … week14/       Tutorial pages and worksheet assets
├── labs/
│   ├── index.html             Lab index and availability count
│   └── week1/ … week14/       Lab pages and worksheet assets
├── assets/                    Shared styles, scripts, and vendored Three.js
├── docs/                      Student and maintainer guides
├── CONTRIBUTING.md            Contribution workflow
├── .nojekyll                  Static GitHub Pages publishing marker
└── LICENSE                    MIT licence
```

## Documentation

| Guide | What it covers |
| --- | --- |
| [Student guide](docs/student-guide.md) | Java setup, studying, downloads, progress, and companion repositories. |
| [Local development](docs/development.md) | Site structure, browser behaviour, shared assets, and previewing changes. |
| [Content maintenance](docs/content-maintenance.md) | Weekly numbering, adding materials, release cards, NEW banners, and validation. |
| [GitHub Pages publishing](docs/deployment.md) | Publishing from `main`, checking the deployed site, and troubleshooting. |
| [Contributing](CONTRIBUTING.md) | Reporting issues and proposing changes. |

## Licence and attribution

Repository code is distributed under the [MIT licence](LICENSE). The vendored Three.js module retains its [upstream licence](assets/vendor/THREE-LICENSE.txt). The Universiti Malaya logo loads from the university portal; retain source attribution for university branding and original teaching materials.
