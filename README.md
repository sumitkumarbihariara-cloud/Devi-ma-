# Navratri Gaon 3D

Folder structure (GitHub par exactly aise upload karo):

    index.html
    admin.html            (chhupa hua admin page, site mein link nahi)
    assets/videos/        (7 videos, .mp4)
    assets/images/        (7 poster .jpg)

## Video map (original file -> website file)
| Website file | Original video | Jagah |
|---|---|---|
| angana-padharo-maharani.mp4 | Angana padharo maharani_ meri Sharda Bhawani... | Start intro (welcome) |
| aigiri-nandini.mp4 | Aigiri Nandini... | Featured darshan (🎬 panel mein sabse upar) |
| maa-durga-mahima.mp4 | Maa Durga is the divine embodiment of infinite strength... | Maa ki Mahima |
| jay-bhagwati-devi.mp4 | Jay Bhagwati Devi Namo Var de (di_vine_art) | Stuti |
| luka-chhipi.mp4 | Luka Chhipi (di_vine_art) | Bhakti gallery |
| navratri-is-here.mp4 | Navratri is here... and Maa is all you need... | Bhakti sandesh |
| nav-roop.mp4 | Navratri me maa ke 9 Roop... | Nau Devi (🌸 menu mein "9 roop video") |
| gemini_generated_video_90d6f7c8.mp4 | - | Mila nahi / use nahi hua |

Gaon ki gallery street (entrance road ke dono taraf) mein 6 video frames hain; frame par tap karo to video khulti hai.

## GitHub Pages (Android)
1. github.com par naya repository banao (Public).
2. "Add file > Upload files" -> index.html, admin.html aur assets folder daalo. Phone se folder na ho paye to pehle 'assets/videos' aur 'assets/images' ki files alag-alag upload karo (har file ka path assets/videos/... hona chahiye; "Create new file" mein `assets/videos/x` likhne se folder ban jaata hai, ya zip ko computer par kholo).
3. Settings > Pages > Source: Deploy from a branch > main / (root) > Save.
4. 1-2 minute baad link: https://USERNAME.github.io/REPO/

## Dikkat aaye to
- Video nahi chal rahi: file ka naam bilkul upar wale jaisa (chhote akshar) hai? Folder `assets/videos/` hai?
- Kaala screen: internet check karo (3D library CDN se aati hai) aur page reload karo.
- Dheema chal raha hai: phone ki battery saver band karo.

## Credits
Videos ke adhikaar unke asli rachnakaron ke hain (ai.art.shiva / Kamal Pathak, di_vine_art, aadi). Public site par lagane se pehle unki anumati lena sahi rahega.

## v8 additions
- **Gaon Explore (Walk)**: Menu → 🚶 Gaon Ghoomo. Pad ▲◀▶▼ / WASD to walk, drag to look, tap a pandal to enter its darshan; "Back" returns to the walk.
- Pandal video also plays inside the darshan frame.
- Aarti timer, Jap counter, Daily guide (colour/bhog/mantra), Garba circle, Weather (rain / fireworks / day-night), local Wall, Room panel.
- **Background song**: put your file at `assets/audio/song.mp3`. One 🔊/🔇 button (top right) mutes everything. If the file is missing, generated bhajan-style music plays instead.
- **Room promotion**: fill the `ROOM` object in `index.html` (name, price, place, phone, WhatsApp).

## v9 additions
- **Villagers (NPC)**: kids, aunties, pujaris and uncles wander the village; walk close and they speak / give prasad (count saved on this phone).
- **Mela** (Menu → 🎡 Mela): Ferris wheel, chaat and chai stalls, balloon stand. A button appears when you are near each one.
- **Day-night** (Menu → 🌗): sunrise → day → dusk → night with fireflies; weather button still works.
- **Dhol** sound grows louder as you walk towards a pandal.
- **Aarti thali game**, **Chunri/tilak** photo card (photo never leaves the phone), **Sankalp**, **9-day Vrat tracker**, **Quiz** with score card, **Kanya pujan** checklist, **Greeting card**, **Invite friends**, **Install app (PWA)**.
- **Donation**: Menu → 🙏 Donate. UPI ID is the constant `UPI_ID` in `index.html` (currently `bihariiii@ptyes`). The QR is drawn with the `qrcodejs` library from cdnjs (needs internet; the UPI button/ID work without it). Money goes directly UPI-to-UPI; the site stores nothing about payments. Pay Rs 1 yourself first to check the receiver name.
- PWA files: `manifest.webmanifest`, `sw.js`, `assets/icons/`. Videos and the song are never cached offline.
- Everything saved by these features (jap, vrat, sankalp, wall, prasad, mela score, quiz best) is stored only in the visitor's own browser.

## v10 additions
- **Visarjan / Dussehra** (Menu → 🌊): river ghat at the west edge of the village. Float diyas, give Maa's vidai (idol raft drifts away), burn the Ravan effigy (with fireworks). Buttons appear when you are near each spot.
- **Photo booth** (Menu → 📸): camera (only after you press the button) or pick a photo; two frames (with Maa / in front of a pandal). Photo is processed on the phone only. If the camera is blocked, the file picker works.
- **Mini-map**: appears in walk mode (bottom right); shows pandals 1–7, mela, river, Ravan, villagers and your direction. Tap it to enlarge.

## v11
- Menu is now a compact bottom sheet with 5 tabs (Explore / Devotion / Watch / Share / More); the last tab is remembered.
- Wider camera field of view on portrait phones so the pandal no longer fills the whole screen.
- New videos: `assets/videos/kushmanda.mp4` (Day 4, plays at pandal 4 and in the gallery) and `assets/videos/one-day-to-go.mp4` (gallery). The old "Angana Padharo Maharani" video stays in the gallery.

## v12
- **Songs**: `assets/audio/song1.mp3` (Hamari Anganawa) and `song2.mp3` (Shitali Maiyaa Chalali) play as a playlist after "Start darshan"; the single 🔊/🔇 button mutes everything; Menu → Watch → ⏭ Next song. (These are commercial recordings by their artists/labels - publishing them on a public site can lead to a takedown request. Use songs you have rights to, or ones the label allows, for a long-term public site.)
- **Visitor counter**: free, cookie-less GoatCounter. Sign up at goatcounter.com, enable "Allow adding visitor counts on your website", then set `goat:"yourcode"` in `config.js` and re-upload. Real visitor numbers then appear in `admin.html` and in your GoatCounter dashboard. Until then nothing is counted.
- **Hidden admin**: tap the title "जय माता दी" quickly 7 times to open `admin.html`. It is hidden, not password-protected (static hosting), and holds no secrets.

## v13 - admin
- `admin.html` redesigned: PIN lock (default **2026**), 3 tabs (all visitors / this phone / settings). The PIN is stored only as a SHA-256 hash in `PIN_HASH`; change it from the Settings tab. It is a light lock, not real security (static hosting). The page holds no secrets.
