# NightVector Support Site

This directory is a static site for `https://pvedda.github.io/nightvector-support/`. Publish its contents at the root of the `pvedda/nightvector-support` GitHub Pages repository.

Before publishing, replace `SUPPORT_CONTACT_PLACEHOLDER` once in `site-config.js` with a real owner-controlled support channel. Do not add a fabricated email address. Run `../Scripts/verify.sh --configuration Release` from this repository after configuring the contact.

GitHub Pages can serve these files directly from the deployment repository's root or a `gh-pages` branch. No build step, dependency install, form backend, cookies, or analytics are required.
