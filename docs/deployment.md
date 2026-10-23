# GitHub Pages publishing

[Repository README](../README.md) · [Content maintenance](content-maintenance.md)

## Publishing configuration

The course website is hosted at **[https://fsktmcoders.github.io/wix1002/](https://fsktmcoders.github.io/wix1002/)**.

Use the following repository configuration for branch-based publishing:

| Setting | Value |
| --- | --- |
| Repository | `FSKTMCoders/wix1002` |
| Settings location | **Settings → Pages → Build and deployment** |
| Source | **Deploy from a branch** |
| Branch | `main` |
| Folder | `/ (root)` |

Keep `.nojekyll` at the repository root so GitHub Pages serves the files as a static site without Jekyll processing. The `docs/` folder contains repository documentation; it is **not** the Pages publishing source. No local build output or dependency installation is required.

## Publish and verify

1. Finish the relevant [content validation checks](content-maintenance.md#validation-checklist) and review the diff.
2. Merge the reviewed changes into `main`, or push to `main` if using the maintainer's direct-update workflow. A change on another branch does not publish through the configuration above.
3. Check the repository's [Actions](https://github.com/FSKTMCoders/wix1002/actions) and Pages settings for the deployment associated with that commit. Wait for it to complete successfully.
4. Open the [course homepage](https://fsktmcoders.github.io/wix1002/) and each changed section/weekly page. Check availability counts, NEW cards when changed, navigation, interactions, and downloads.
5. If an older version appears after a successful deployment, reload without the browser cache and compare the deployed commit before changing content again.

Check the hosted URLs explicitly: the site lives beneath `/wix1002/`, while the standard local preview runs at `/`.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Entire site returns 404 | Pages is enabled, the publishing branch/folder is correct, root `index.html` exists, and deployment succeeded. |
| A weekly page is missing or still says Coming soon | The correct teaching-week `index.html` was committed and deployed. Publishing a worksheet to a companion repository does not publish an interactive page here. |
| Styles, images, or downloads are missing | Relative path depth, exact filename case, committed assets, and the browser network panel. |
| Homepage cards/counts are stale | Their HTML is updated manually; see the content maintenance guide. |
| Landing background is static | Reduced-motion settings and WebGL availability. A static background is an intentional fallback. |
| Java downloads fail to compile | The selected project/terminal JDK is 25 and the downloaded filename, class, package, and execution instructions agree. |
| Local and live saved progress differ | Browser storage is tied to the address and browser profile; it is not synced. |

## Correct a published change

Create a focused follow-up commit for a small correction. To undo an entire problematic commit, revert it through the normal review/publishing workflow, then verify the resulting Pages deployment. Preserve unrelated work and shared Git history.
