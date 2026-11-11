# 🚧 Sophorn - Under Construction Template
> **Crafted with precision by MelLink**

A modern, responsive, high-performance "Under Construction / Coming Soon" template built for **Sophorn** by **MelLink**. Designed with sleek glassmorphism, animated glowing canvas background, interactive countdown timer, development progress indicator, and email notification signup.

Ready for instantaneous deployment to **GitHub Pages** or any static web host.

---

## ✨ Features

- 💎 **Modern Visuals**: Deep aesthetic dark theme with glowing backdrop blurs and subtle constellation particle canvas.
- ⏱️ **Live Countdown Timer**: Real-time days, hours, minutes, and seconds countdown counter.
- 📊 **Progress Bar**: Configurable launch completion percentage tracker.
- 💌 **Notify Me Form**: Pre-configured email validation and user interaction states (ready to hook into Formspree, Mailchimp, or any webhook).
- 📱 **100% Responsive**: Looks stunning on mobile, tablet, laptop, and ultra-wide displays.
- ⚡ **Zero Heavy Dependencies**: Pure HTML5, modern CSS3, and vanilla JavaScript for sub-second loading speeds.
- 🏷️ **SEO & Social Share Ready**: Pre-populated Open Graph tags and meta descriptions.

---

## 📁 File Structure

```text
Sophorn Web/
├── index.html        # Main HTML5 structure & content
├── css/
│   └── style.css     # Glassmorphism, animations, responsive styling
├── js/
│   └── script.js     # Countdown timer, particle canvas & form logic
├── .gitignore        # Git ignore rules
└── README.md         # Documentation & deployment guide
```

---

## 🛠️ How to Customize

### 1. Change the Countdown Launch Date
Open [`js/script.js`](js/script.js) and specify your exact target launch date:
```javascript
// Example: Launch on December 31, 2026 at midnight UTC
const targetDate = new Date('2026-12-31T00:00:00');
```

### 2. Update Progress Percentage
In [`index.html`](index.html), search for `75%`:
```html
<span class="progress-percentage" id="progress-val">85%</span>
...
<div class="progress-bar" style="width: 85%;"></div>
```

### 3. Update Social & Contact Links
In [`index.html`](index.html), update the footer links with your genuine GitHub and contact email:
```html
<a href="https://github.com/your-username" ...>
<a href="mailto:your-email@example.com" ...>
```

---

## 🚀 How to Upload to GitHub and Host on GitHub Pages

Follow these simple steps in your terminal or PowerShell inside the project directory:

### Step 1: Initialize Git and Commit
```bash
git init
git add .
git commit -m "Initial commit: Sophorn Under Construction template by MelLink"
```

### Step 2: Create a New GitHub Repository
1. Go to [GitHub.com/new](https://github.com/new).
2. Name your repository (for example, `sophorn-web` or `sophorn`).
3. Leave it public (required for free GitHub Pages) and do **not** check "Initialize with README".
4. Click **Create repository**.

### Step 3: Push Your Code to GitHub
Copy and run the commands shown on GitHub:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Step 4: Enable Free GitHub Pages (Live in ~30 seconds)
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left sidebar, click on **Pages** (under "Code and automation").
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and set the folder to `/ (root)`, then click **Save**.
5. Refresh the page after 30–60 seconds. GitHub will provide your live URL:
   ```text
   https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/
   ```

---

## 👨‍💻 Created By

**MelLink**  
Custom Web Development & Modern Digital Solutions  
Website: [MelLink](https://github.com)

