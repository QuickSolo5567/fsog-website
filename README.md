# Fifty Shades of Gay (FSOG): website

Website for [Fifty Shades of Gay](https://www.instagram.com/50shadesofgayofficial/), a queer collective started in 2016.

- `index.html` is the FSOG home page mockup (video hero, motion effects) and `about.html` is the About page (the journey as a scroll-drawn timeline). The Living Archive is one section of the main site.
- Main-site styles and scripts live in `living-archive/assets/fsog.css` and `fsog.js`, on top of the shared `site.css`/`site.js`. Logos, the hero video and About photos are in `living-archive/assets/`.
- `living-archive/` holds the approved static mockups for The Living Archive, FSOG's fortnightly publication (archive home, edition and story pages, plus the shared CSS, JS and logos in `assets/`).
- Preview locally with `python3 -m http.server 8080` from the repo root, then open http://localhost:8080.
- `docs/website-plan.md` covers how the archive grows into a full FSOG website: structure options, sitemap, home page, build plan and questions for the client.

Planned stack: a custom WordPress theme built from `living-archive/assets/site.css`, with Hostinger Reach for the newsletter.
