# Configurable title pages — application 0.13.0

This optional extension is supported by BEP Studio 0.13.0 on App, Demo and Dev. Older deployments may reject these optional properties; validate against the target application version before importing. The format remains 1.0; the extension is additive.

## Three independent identities

- **Project owner:** determined by project ownership, never by the position of a company field. The top-right badge uses the owner organization's uploaded logo, falling back to its name. JSON cannot impersonate another owner.
- **Project partners:** `companies` binds one to four lower cover slots, normally designer and builder. These are presentation slots, not permission roles. Select participating non-owner organizations explicitly in Automatic mode, or provide independent Custom details and uploads. No participant is silently added when team membership changes.
- **Project image:** `imageField` references a separate image question. A company logo is never inferred to be the project image.

## JSON configuration

Put the following object in `ui.cover`; use field keys that exist in your schema:

```json
{
  "title": "Project BIM Execution Plan",
  "backgroundColor": "#0f2b63",
  "blocks": ["title", "project", "metadata", "companies", "image"],
  "companyCount": 2,
  "companies": [
    {"source":"automatic","nameField":"designer-name","logoField":"designer-logo"},
    {"source":"automatic","nameField":"builder-name","logoField":"builder-logo"}
  ],
  "imageField": "project-image"
}
```

Name/address questions use TEXT or LONG_TEXT. Image questions use TEXT with `config.mode: "blob-image-upload"`. Optional `addressLine1Field`, `addressLine2Field` and `selectionField` are described in [field types](field-types.md#pdf-cover-configuration-0130). Selection metadata preserves Automatic/Custom choice; copied details and uploads are saved snapshots and are not overwritten by later organization edits.

`blocks` contains 1–6 unique entries from title, project, metadata, companies, image, text. `title` is at most 120 characters; static `text` at most 400. `backgroundColor` is `#RRGGBB`; readable text, dividers, branding and footer adapt automatically. `companyCount` is 1, 2, 3 or 4 and matches the number of company entries. More project participants remain visible in the project team; the cover deliberately highlights up to four partners.

The PDF cover is one page of the selected export format (US Letter by default). Existing schemas without `ui.cover` retain their renderer. Existing field values and published snapshots are not automatically rewritten by a layout update.

Use the [complete importable example](../examples/custom-cover.json), the [JSON specification](bepstudio-schema-v1.schema.json), and `node tools/validate.mjs examples/custom-cover.json` for structural and semantic validation.

Three or four populated partner slots use a compact two-column, two-row grid with smaller logos/text and a reduced project image. Blank slots are omitted. Owner branding remains separate. The user’s Export settings selects Letter (default) or A4 for every page; the cover stays one page. In the schema, configure the maximum slots; actual partners are selected while completing the BEP, from participating non-owner organizations or through manual entry.

[Complete four-partner JSON example](../examples/four-partner-cover.json).

## Guided visual editor

The visual schema editor controls document title, background color, maximum partner count (1–4), project-image visibility and address visibility. `ui.cover.showAddresses` is an optional boolean (default true); address values are preserved even when hidden from the PDF. Existing JSON block ordering and source bindings remain supported for imports. Source-mode dropdowns and technical field bindings are not exposed in the normal UI.

Editable schemas place Cover details first, with partner names/addresses/logos grouped by partner, followed by the project image. The BEP editor offers Choose organization or Enter company manually, then Change organization, Edit details and Remove on each company card. Choosing copies details once; manual edits and uploads remain saved snapshots. Published schema/project evidence is not rewritten.
