# Tables and row identity

Define LIST columns using ordered `config.tableColumns`. Use unique, nonempty column titles. Define required cells using `config.requiredColumns`. New files should use column titles. Historical zero-based indexes remain readable.

The editor updates required titles when columns are renamed and carries required flags during reordering. It also remaps positional row templates, read-only/select-column configurations and default cells.

## Safe stored row envelopes

LIST storage remains an array of strings for compatibility with existing database, snapshot and export contracts. Each newly edited table row is a versioned JSON envelope inside one string.

```json
["bepstudio-row-v1:{\"id\":\"row-original-01\",\"cells\":[\"Design | coordination\",\"Line one\\nLine two\"]}"]
```

`cells` is an ordered string array. Pipes, newlines, quotes, Unicode and leading/trailing whitespace are preserved. The envelope ID remains attached to a row when it is edited or moved. New UI rows receive UUIDs. IDs must be unique within the field. A historical `A | B` row remains readable. On its first visual edit its original position becomes the carried identity `legacy-0`, `legacy-1` and so forth. Existing derived `fieldKey:0` identities therefore remain associated with the same carried row after conversion.

Existing snapshots and releases are read unchanged. There is no database migration. Historical delimiter ambiguity cannot be reconstructed automatically. Inspect old cells containing literal pipes before adopting the structured format. Older application versions cannot render envelopes, so upgrade all application workers together before using the editor.

The importer converts scalar object-array defaults into these string envelopes and reports the text-cell conversion. It rejects unknown columns and nested cell values. Simple scalar LIST defaults remain ordinary string arrays.

## Visual authoring of starting rows

The Schema Builder presents table defaults under **Starting content (optional)** as editable cells with add/remove row controls. Authors do not need to enter row envelopes or internal identifiers. Imported row identities and cell text are retained when cells are edited. These controls are a presentation of the existing `defaultValue` representation above, not a format change.
