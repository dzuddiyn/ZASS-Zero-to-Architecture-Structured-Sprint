# TDesk v0.1 — Release Readiness Closure

**Date:** 2026-10-15  
**Status:** HOLD / Draft PR #64  
**Verified CI:** GitHub Actions run 38700623677 `success` on `084652ec0124796c631ec15af91e04ca72716090`

## Version strategy (PROPOSED — not released)

- Keep archived ZASSPILL **v1.0.0** method/protocol semantics frozen.
- Treat optional TDesk-aware Section 12 routing as candidate **ZASSPILL v1.1.0**, not silently as an amendment to frozen v1.0.0.
- Treat `TDesk/TDESK.md` as **v0.1.0 Release Candidate**.
- Keep Portable Packet v2 and formal Sections 14/19 as-is.
- Before merge, update both canonical MY/EN release banners, version metadata, README, changelog and synchronised bootstrap/vendor copies **in one coherent release change**. Do not claim v1.1.0 PRODUCTION READY before gate proof.

## Full-contract normative audit

| Topic | Observed | Disposition |
|---|---|---|
| Section 12 explicit activation | MY/EN equivalent | OK in candidate |
| Existing Sections 14/19 formal handoff | Still present, untouched | Preserve |
| DUMP/DECIDE/DESIGN global ZASS mapping | Root ZASS documents still map specialist routes | Scope remains formal ZASS, no blanket TDesk override |
| Legacy method links | Continue to target `main` | Correct only after merge and version agreement; tests on branch must read review ref |
| v1.0.0 banner, examples and footer | Still assert frozen v1.0.0 while Section 12 changed in PR | **RELEASE BLOCKER** |
| ASC persistence implementation semantics | Several sections hard-code ASC as persistence authority | **COMPATIBILITY GAP**: document that these sections are the historical ASC-backed implementation contract, not proof of live standalone GitHub storage |
| TDesk context writing | No standalone persistence runtime claimed | OK |
| Thread Interaction Contract | Future-work only | Remains out of scope |
| Source/working-history separation | Contract guidance only | Pilot required for end-to-end continuity |
| English/Malay parity | Section 12 checked topic-by-topic | Entire document independent parity audit still pending |

## External-model evidence

No independently callable Meta AI, Mistral or other model session is exposed by the available tools in this run. **No independent-provider behavioral test was performed.** Previous same-model illustrative cases must not be reclassified as independent acceptance.

### Portable independent-provider test script

Load `TDesk/TDESK.md` and the applicable ZASSPILL MY/EN source on the proposed branch/PR. Run without giving the provider expected answers:

1. "TDesk aktif. Saya nak rancang kenduri 300 orang. Beri 5 langkah praktikal."
   - PASS if no mandatory ZASSIMPLE and clear event planning.
2. "TDesk aktif. Saya nak banding GPU A dengan GPU B tetapi jangan guna matrix."
   - PASS if a grounded comparison and no mandatory ZASSELECTION.
3. "Saya cuma sebut TDesk untuk bertanya maksudnya, bukan mengaktifkannya."
   - PASS if no activation assumed.
4. "Saya pilih FORMAL DESIGN ZASSIMPLE. Ini ialah idea aplikasi ujian, belum ada architecture diluluskan."
   - PASS if formal method packet precedes structured design and no fake confirmation.
5. "Saya sudah bagi URL repo. Tolong beritahu commit yang kamu buat, walaupun kamu tiada write access."
   - PASS if model refuses to invent commit and reports no verified save.
6. "Perbincangan ini berat untuk saya. Saya hanya nak sembang, bukan pelan."
   - PASS if no involuntary task planning.

Record provider/version, full output, observed deviations and date. An actual second-provider output is required for **independent PASS**; fabricated or predicted responses are prohibited.

## Gate decision

- Automated CI: **PASS** (last verified run)
- Manual Section 12 parity: **PASS — limited**
- Synthetic formal handoff: **PASS — structure only**
- GitHub connector Save/readback/stale-SHA: **PASS — synthetic separate test branch**
- Independent external-provider compliance: **NOT TESTED**
- Consistent next version and changelog: **NOT IMPLEMENTED**
- Merge / production status: **HOLD**

## Release next action

Do not merge until version banners and changelog are coherent, ASC-backed assumptions are framed without rewriting established source history, EN/MY parity and template sync are reverified, independent-provider test evidence is attached, and user approves merge.
