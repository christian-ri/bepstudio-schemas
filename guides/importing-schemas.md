# Importing schemas

On the Schemas page, **Upload JSON file** checks the selected file and opens package setup when valid. To inspect validation diagnostics and a visual preview before setup, use **Create manual**, paste the JSON and choose **Validate & preview**. After reviewing, continue to setup and then the Builder. Invalid JSON cannot proceed.

Canonical BEP Studio documents are imported directly. General JSON Schema documents are converted through a bounded subset supporting object `properties`, `required`, string `enum`, scalar types, object-array `items`, `$defs` and local JSON Pointer `$ref`. Draft 2020-12 syntax is accepted within this subset. The importer never fetches a reference or executes code.

Limits include 1 MB raw input, twelve levels of nesting, eighty sections, two hundred fields per section, one hundred options and fifty table columns. Reference expansion also has a bounded node budget. External, recursive and unresolved references are errors. Boolean schemas, tuple arrays, type unions, composition, conditionals and unsupported constraints are reported as errors. Formats other than date generate warnings because their validation is unavailable.

Top-level properties become sections. Object-section properties become questions. Object-array fields become tables using item properties as columns and item required names as required columns. String-enum arrays become multiple choice. Defaults are carried into canonical validation. Review flattened object requirements carefully. Nested object cell constraints cannot be enforced by text table cells.

Legacy NIBS reference files have a compatibility path that reports malformed property placement, BSON annotations and missing required references. Review its warnings and the resulting visual structure before use. The original standards are excluded from the prepared public repository pending independent license review.

The conversion report precedes persistence. Draft creation always validates the submitted document again on the server. A successful preview never grants write permissions or bypasses import limits.

The Builder preserves imported keys internally and displays defaults as **Starting content (optional)**, using table cells, individual list items and choice selections instead of raw JSON. These visual controls retain the canonical `defaultValue` contract and structured row identities; they do not introduce a new schema format.
