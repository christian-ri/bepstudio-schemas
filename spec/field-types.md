# Field types

| Type | Value and rendering |
| --- | --- |
| TEXT | String, single-line input |
| LONG_TEXT | String, multiline input |
| NUMBER | Finite number, numeric input |
| BOOLEAN | Boolean, Yes/No selection |
| DATE | ISO calendar-date string, date input |
| SELECT | String from `options`, single choice |
| MULTI_SELECT | Array of strings from `options`, multiple choices |
| LIST | String array, table when `config.tableColumns` is present |

Fields accept `helpText`, `placeholder`, `isRequired`, optional `defaultValue`, and `sortOrder`. Defaults use their field's value type. No configurable Boolean presentation variants are exposed in this release. `config.condition` is retained for compatibility and generates a warning because runtime conditions are unsupported.

Root `ui.pdfRenderer` supports `psu` and `generic`. Optional `exportFormats` metadata and existing field config extensions survive validation. Unknown root, section and field attributes are reported when they cannot be imported. Config extensions are retained as data and acquire behavior only through an implemented runtime consumer.

### PDF cover configuration (0.13.0)

The optional `ui.cover` object supports ordered `blocks`: `title`, `project`, `metadata`, `companies`, `image`, `text`. Each block appears at most once. Optional `title` (120 characters) and `text` (400) supply static text. `imageField` binds an image-upload question. Up to four `companies` entries bind `nameField` and `logoField`. Bindings must resolve to one unambiguous field key; image bindings require `config.mode: "blob-image-upload"`. Omit unused bindings. Existing schemas without this object retain their historic cover. Layout changes are preserved in published schema and project snapshots. This extension is supported from application 0.13.0.

Cover output uses one portrait US Letter sheet (8.5 × 11 in). The visual Builder can create dedicated company name/image questions automatically. Bindings select schema questions; actual project organizations and uploaded images are selected when completing the BEP.

### Automatic and custom company details (development preview)

`ui.cover.companyCount` is 1, 2, 3 or 4. Each `companies` entry can declare `source: "automatic" | "custom"`, `nameField`, `addressLine1Field`, `addressLine2Field`, `logoField`, and `selectionField`. Automatic name/address bindings use TEXT or LONG_TEXT; logo bindings use a TEXT image-upload question. Automatic selects a participating project organization and copies its available name, address and logo once into ordinary saved field values. The owner is shown independently at the top right, using its organization logo or name. The lower slots represent project partners (usually designer and builder), not the owner. Automatic selection excludes the owner and requires an explicit partner choice. Custom values are entered and uploaded manually. Later profile or membership changes never replace either saved snapshot.

`selectionField` is an optional TEXT question with `config.coverInternal: true` and `config.coverOnly: true`. It stores the BEP-specific input source and optional selected organization ID as JSON text, so Custom remains selected after saving/reopening. It is hidden from ordinary question editing and excluded from coverage metrics. It cannot be required. Company content fields remain normal authorable questions. Existing schemas without source/selection metadata keep their previous manual behavior. The Builder creates Automatic slots and a separate project-image question by default; project images are never inferred from company-logo questions. More than two organizations can be project participants; the cover deliberately shows only the chosen one to four.

`ui.cover.backgroundColor` accepts a six-digit hex color, such as `"#0f2b63"`. Text, dividers, footer and the BEPStudio mark adapt to a contrasting foreground. Covers remain exactly one page of the selected export format. See [cover-page contract](cover-page.md).

Three or four populated partner slots use a compact two-column, two-row grid with smaller logos/text and a reduced project image. Blank slots are omitted. Owner branding remains separate. The user’s Export settings selects Letter (default) or A4 for every page; the cover stays one page. In the schema, configure the maximum slots; actual partners are selected while completing the BEP, from participating non-owner organizations or through manual entry.

[Complete four-partner JSON example](../examples/four-partner-cover.json).

## Guided visual editor

The visual schema editor controls document title, background color, maximum partner count (1–4), project-image visibility and address visibility. `ui.cover.showAddresses` is an optional boolean (default true); address values are preserved even when hidden from the PDF. Existing JSON block ordering and source bindings remain supported for imports. Source-mode dropdowns and technical field bindings are not exposed in the normal UI.

Editable schemas place Cover details first, with partner names/addresses/logos grouped by partner, followed by the project image. The BEP editor offers Choose organization or Enter company manually, then Change organization, Edit details and Remove on each company card. Choosing copies details once; manual edits and uploads remain saved snapshots. Published schema/project evidence is not rewritten.
