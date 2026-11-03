ALPHABET PRACTICE v1.0 — GITHUB PAGES

1. Create a new public GitHub repository, e.g. alphabet-practice.
2. Upload all eight files from this ZIP to the repository root.
3. Settings > Pages > Deploy from a branch > main / (root) > Save.
4. Open the resulting HTTPS GitHub Pages URL on your iPhone while online.
5. Wait until the banner says Ready for airplane mode.
6. In Safari, Share > Add to Home Screen (recommended).
7. TEST BEFORE YOUR FLIGHT: turn on Airplane Mode, turn Wi-Fi off, close the app, then launch it from the Home Screen. Practice several letters.

The app works only when hosted over HTTPS (GitHub Pages) or localhost; opening index.html directly from disk does not provide reliable offline caching.

Data: answers.json contains 208 answers, one per letter in each of eight categories. Original paste had Airplane! mislabeled US Cities; it was assigned Movie Titles. Other wording is preserved, including unusual spellings.

To update answers later: replace answers.json and change the CACHE constant in sw.js (e.g. to alphabet-practice-shell-v2) before publishing, so a fresh offline package is installed.

A revealed answer does not count as recalled. Multiple guesses are allowed. Answer checking ignores leading/trailing spaces, repeated internal spaces and letter case.
