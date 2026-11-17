# Your website — how to publish it and change it

Everything here is **free** and the website belongs **only to you** (your own accounts, your own email).

What is in this folder:

| File | What it is |
|---|---|
| `index.html` | The website design. You don't need to touch it. |
| `config.js` | **All your texts**: your name, WhatsApp, bio and the excursions. This is the only file you edit. |
| `fotos/` | All the photos of the website. |

---

## Part 1 — Publish the website (only once, ~15 minutes)

### Step 1. Create a GitHub account (stores your website)
1. Go to **github.com** → **Sign up**. Use your own email.
2. When you are logged in, click **+** (top right) → **New repository**.
3. Repository name: `zanzibar-tours`. Leave it **Public**. Click **Create repository**.
4. On the next page click **uploading an existing file**.
5. Open this folder on your computer, select **everything inside it** (`index.html`, `config.js`, `HOW-TO.md` and the `fotos` folder) and drag it into the browser window.
6. Wait until all files are listed, then click **Commit changes** (green button).

### Step 2. Create a Cloudflare account (puts your website online)
1. Go to **dash.cloudflare.com/sign-up** and create an account with your email.
2. In the left menu open **Workers & Pages** → **Create** → choose the **Pages** tab → **Connect to Git** (or **Import an existing Git repository**).
3. Connect your GitHub account and choose the repository `zanzibar-tours`.
4. Settings:
   - Framework preset: **None**
   - Build command: **leave empty**
   - Build output directory: **leave empty** (or `/`)
5. Click **Save and Deploy**.

After about one minute your website is live at an address like
**https://zanzibar-tours.pages.dev** — share this link on Instagram, WhatsApp status, business cards…

---

## Part 2 — Change something on the website (whenever you want)

1. Go to **github.com**, open your repository `zanzibar-tours`.
2. Click the file **`config.js`** → click the **pencil icon ✏️** (top right of the file).
3. Change the text you want. Keep the quotes `" "` and the commas `,` exactly as they are.
4. Click **Commit changes** (green button) → **Commit changes** again.
5. Wait 1 minute → your website is updated automatically.

### Examples
- **Change your WhatsApp:** find `whatsapp: "255622158497"` and put the new number (with 255, no `+`, no spaces).
- **Change an excursion text:** find the excursion by its `name:` and edit `copy:` (the short description) or `see:` (the 3 small labels).
- **Remove an excursion:** delete its whole block, from `{` to `},`.

### Change a photo
1. In your repository open the folder **`fotos`**.
2. Click **Add file → Upload files** and upload your new photo **with exactly the same name** as the old one (for example `mtende.jpg`). It replaces the old one.
3. **Commit changes**. Done.

### Add a new excursion
Copy one complete block inside `ACTIVITIES` (from `{` to `},`), paste it below, and change the texts and the photo name. Upload the new photo to `fotos` with that name.

### Tip: use AI to help you
If you are not sure, copy the whole content of `config.js`, paste it into **claude.ai** (free) and write for example:
*"Add a new excursion called Safari Blue Lagoon with this description: … Give me the full file back."*
Then paste the answer back into GitHub (step 3 above) and commit.

---

## Photo credits
Some photos come from free photo libraries (Flickr, Creative Commons licence). Their authors are credited at the bottom of the website — please **don't remove those credits**. When you replace a photo with your own, you can delete its line in `CREDITS` at the end of `config.js`.
