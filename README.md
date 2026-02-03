# Supermarket Demo

Local preview:
1. Open `index.html` in your browser (or use a simple static server like `npx http-server`).

Git & GitHub (create and push):
```bash
git init
git add .
git commit -m "Initial supermarket demo"
# create repo on GitHub, then:
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

Enable GitHub Pages:
- Option A (simple): In repo Settings → Pages, select Branch: `main` and Folder: `/ (root)` then Save.
- Option B (user site): Name your repo `your-username.github.io` and push to `main` — the site will be available at `https://your-username.github.io`.
- Option C (built frameworks): Add a build step and use GitHub Actions or the `gh-pages` branch to deploy the `dist`/`build` folder.

Notes:
- For a real checkout integrate a payments provider (Stripe/PayPal) and a backend to process orders.
- Use a real image store or CDN for product images.
