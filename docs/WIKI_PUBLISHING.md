# Publishing the ZASS Wiki

**Status:** Versioned Wiki source generated  
**Source directory:** `wiki/`  
**Target:** GitHub Wiki for `dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint`

GitHub stores a repository Wiki in a separate Git repository:

```text
https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint.wiki.git
```

The main repository keeps the version-controlled source under `wiki/` so the documentation can be reviewed and changed atomically with the rest of the project.

## Publish for the first time

If the GitHub Wiki has never been initialized:

1. Open the repository's **Wiki** tab.
2. Create the first Wiki page, normally `Home`.
3. Save it once so GitHub creates the separate Wiki Git repository.

Then from a local/Work environment with GitHub write access:

```bash
git clone https://github.com/dzuddiyn/ZASS-Zero-to-Architecture-Structured-Sprint.wiki.git
cd ZASS-Zero-to-Architecture-Structured-Sprint.wiki
```

Copy the Markdown files from the main repository's `wiki/` directory into the root of the cloned Wiki repository.

Expected pages include:

```text
Home.md
_Sidebar.md
Quick-Start.md
ZASSIMPLE.md
Full-ZASS.md
Architecture-and-Evidence.md
ACTION-PLAN.md
Cross-AI-Handoff.md
ZASSELECTION.md
Advanced-Reviews.md
Productization-and-zass-check.md
Bahasa-Melayu.md
Infographics.md
```

Then:

```bash
git add .
git commit -m "docs: publish ZASS wiki"
git push
```

## Update later

Treat the main repository `wiki/` directory as the reviewable source bundle.

Recommended update flow:

```text
edit wiki source in main repo
        ↓
review / commit
        ↓
copy changed pages to .wiki.git
        ↓
commit / push Wiki
```

Do not edit the Wiki and main-source bundle independently for long periods; that creates documentation drift.

## Infographics

The four existing infographic assets were authored for ZASS v0.3.2 and should be treated as historical visual references until regenerated for the current method.

Current text documentation is authoritative when an old infographic conflicts with v0.3.5 semantics.

When the image assets are published, place them in an `images/` directory in the Wiki repository and update `Infographics.md` with relative image links.

## Authority

The GitHub Wiki is a documentation/reference layer.

The authoritative method and decision semantics remain in the main repository files such as:

- `ZASS.md`
- `ZASSIMPLE.md`
- `ZASSELECTION/ZASSELECTION_EN.md` (default)
- `ZASSELECTION/ZASSELECTION_MY.md` (Malay)
- locked productization/decision documents under `docs/`
