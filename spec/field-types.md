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
