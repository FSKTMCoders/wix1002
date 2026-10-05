# WIX1002: Fundamentals of Programming

Universiti Malaya course materials organised into lectures, labs, and tutorials.

## Structure

```text
index.html                 Course home; weekly cards link to lectures
assets/course.css          Shared landing-page styles
lectures/index.html        Lecture landing page
lectures/week1/index.html  Existing Week 1 lecture
lectures/week2/–week14/    Lecture availability pages
labs/index.html            Lab landing page
labs/week1/–week14/        Lab availability pages
tutorials/index.html       Tutorial landing page
tutorials/week1/–week14/   Tutorial availability pages
```

Every weekly directory contains an index.html. Labs and tutorials are marked coming soon until materials are added. The Week 1 lecture retains its original content and interactive activities.

## GitHub Pages

Publish from main, /(root), using Settings > Pages > Deploy from a branch. Keep .nojekyll at the repository root.

Course home: https://fsktmcoders.github.io/wix1002/

Week 1 lecture: https://fsktmcoders.github.io/wix1002/lectures/week1/

## Adding materials

Replace the appropriate lectures/weekN/index.html, labs/weekN/index.html, or tutorials/weekN/index.html. Link back to the section landing page with ../ and to the course home with ../../. Shared assets are under ../../assets/ from weekly pages. Update the matching section landing page and its availability count. For lectures, also update the course-home card and count. Mark a week available only when its materials are ready.

The UM logo loads from the university portal. Week 1 contains reading and teaching modes, fullscreen controls, flowcharts, interactive examples, and quizzes.
