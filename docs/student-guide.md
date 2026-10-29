# Student guide

[Course website](https://fsktmcoders.github.io/wix1002/) · [Repository README](../README.md)

## Start here

1. Open the lecture for your teaching week. Read the examples and predict outputs before trying the interactive activities.
2. Complete the tutorial and lab linked from their section indexes. These practise the previous week's lecture: Week 3 contains Tutorial 2 and Lab 2, covering Java fundamentals from Week 2; Week 4 contains Tutorial 3 and Lab 3, covering selection from Week 3; Week 5 contains Tutorial 4 and Lab 4, covering repetition from Week 4.
3. Attempt each problem before revealing models. Explain the algorithm, inputs, outputs, and test cases in your own words.
4. Run Java solutions in your own IDE or terminal. Compare actual output with your predictions and correct any differences.
5. Record your work in your own forks of the companion repositories, following their instructions below.

Week 1's Tutorial 0 and Lab 0 provide introductory practice and workspace setup. Pages marked **Coming soon** are placeholders for unreleased website materials.

## Prepare Java

Use **JDK 27** for the current Java materials. [Week 1 · Lab 0](https://fsktmcoders.github.io/wix1002/labs/week1/) explains NetBeans or VS Code setup, your first program, Git, GitHub, and student developer benefits. [Week 2 · Lab 1](https://fsktmcoders.github.io/wix1002/labs/week2/) adds JDK 27 checks, NetBeans project work, building a JAR, and debugging.

In a terminal, check:

```bash
java --version
javac --version
```

Both should report version 27 for course examples that require JDK 27. Your IDE's project JDK can differ from the one on the terminal's PATH; check both if a program works in only one place.

For a downloaded conventional, single-file Java model without a package declaration, open a terminal in its folder:

```bash
javac BmiCalculator.java
java BmiCalculator
```

Use the filename and class name of your actual program. Projects with packages or build tools should follow the worksheet's IDE/project instructions. Some notes also show JDK 27 compact source files with `void main()` and `IO`; follow the command shown beside that example.

The website runs browser demonstrations and checks in JavaScript. These activities do not compile or execute your Java source. Use your JDK to verify the programs you write or download.

## Page controls and downloads

Controls vary by page:

- **Teach mode**, **Previous/Next**, and **Fullscreen** support classroom presentation on lectures and selected activities. Reading mode shows the full lesson.
- **Print / PDF** opens the browser print dialog. Choose your browser's PDF destination to save a copy.
- **Download original … PDF** retrieves the source worksheet. Weeks 2 and 4 use separate PDF files; Week 3 embeds its PDFs within the HTML page.
- Java download buttons save model source files. Labs 2 and 3 offer **Download all Java models (ZIP)** as well as individual programs.
- Note, checklist, or result export buttons save a local copy where offered.

Keep the worksheet's required units and inputs when implementing solutions. In **Lab 2, Question 6**, temperatures must be entered in **Fahrenheit**, converted to **Celsius**, and then used in the water-energy equation.

## Saved progress

Selected tutorials and labs save answers, notes, or completion ticks using the browser's local storage. This belongs to the current browser profile and website address. It does not sync between devices, between browsers, or between the live website and a local preview.

Export your work where the page offers that option. Clearing browser data, using private browsing, or resetting an activity can remove saved work. Storage may also be unavailable under some browser settings. Not every field or activity is persisted; Lab 0's completion checkboxes, for example, reset when the page reloads.

The website's self-check scores and completion ticks support practice. Saving them in the browser does not upload work to a course repository.

## Keep your tutorial and lab work on GitHub

| Work | Where to start | What to save in your fork |
| --- | --- | --- |
| Tutorial answers | [Tutorial repository and student workflow](https://github.com/FSKTMCoders/wix1002-tutorial-2026-s1#readme) | An `answers.md` file in each matching `tutorial-XX/` folder, with explanations, code, and diagrams as needed. |
| Lab solutions | [Lab repository and IDE workflows](https://github.com/FSKTMCoders/wix1002-lab-2026-s1#readme) | Java source, shared project configuration, and required inputs inside the matching `lab-XX/` folder. |

Follow those READMEs to fork, clone, commit, and push. Check that your uploaded files appear in **your own fork**. The companion guides do not require a pull request back to the course repositories. Follow any additional instructions from your lecturer or tutor.

Worksheet numbers remain the same even when website folders differ: Tutorial 2 uses `tutorial-02/` in the companion repository and `tutorials/week3/` on this website. Companion repositories may contain worksheets before their interactive website versions are released.

## Use AI assistance thoughtfully

The lectures include guided vibe coding and AI code review activities. State requirements and constraints, predict behaviour, inspect generated code, run tests, and explain your final solution. Check boundary values, numeric division, string comparisons, random ranges, and units as relevant to the question.

## Report a problem

Use the [website issue tracker](https://github.com/FSKTMCoders/wix1002/issues) for broken pages, downloads, or incorrect teaching examples. Include the page URL, question number, expected behaviour, and what happened. See [Contributing](../CONTRIBUTING.md) for details.
