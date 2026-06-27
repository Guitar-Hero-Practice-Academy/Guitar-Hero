# Guitar Hero

Personal guitar songbook and practice library.

## Layout

- `songbook.md` is the top-level index.
- `tabs/Artist - Song/song.md` holds each song's notes, structure, links, and any material you are allowed to store.
- `app/index.html` is the local web songbook for the guitar-room monitor.

## Web App

Run it locally with:

```bash
python3 -m http.server 4173 --directory app
```

Then open:

```text
http://127.0.0.1:4173/
```
