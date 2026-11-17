# Instructions for schema authors and coding agents

Create JSON documents with `schemaFormat` equal to `bepstudio-schema`, `schemaFormatVersion` equal to `1.0`, a stable `key`, a human-readable `label`, Semantic Versioning `version`, `description`, and nonempty `sections`.

Each section needs a stable key, title, description and nonempty fields. Each field needs a stable key, label and fieldType. Use TEXT, LONG_TEXT, NUMBER, BOOLEAN, DATE, SELECT, MULTI_SELECT or LIST. Keep keys stable after first use. Section keys are unique. Field keys are unique within their section. Prefer globally unique field keys when project automation is enabled.

Use `isRequired` for required questions. Select fields require a nonempty unique string `options` array. Defaults must match the field type. DATE uses an ISO calendar date. MULTI_SELECT defaults are arrays of listed strings. Optional `helpText` and `placeholder` guide contributors.

A LIST table uses `config.tableColumns`, an ordered array of unique nonempty titles. `config.requiredColumns` names required titles. Use titles for new documents. Historical numeric indexes remain supported. Required tables need at least one meaningful row, and each meaningful row must fill all required columns. LIST defaults use string arrays. See spec/tables.md for safe structured rows.

Set `config.projectAutomation` explicitly to CONTACTS, MILESTONES, DELIVERABLES or NONE. CONTACTS requires a person Name column. MILESTONES and DELIVERABLES require a title and due/planned date column. Use NONE to prevent automatic project linking. Omitted mappings allow conservative detection. Ambiguous tables require an explicit author choice. Only active Project BEPs feed shared project coordination.

Avoid scripts, executable expressions, external references, recursive references, unsupported JSON Schema constraints and conditional questions. `config.condition` is retained with a warning and has no runtime effect. Never promise conditional required completion. Use `config.allowNotApplicable` only when a required question may be resolved with a documented reason.

Validate with `node tools/validate.mjs path/to/schema.json`. Resolve errors and review warnings. Run `node --test tools/validator.test.mjs` when changing the validator distribution. Import the resulting file in BEP Studio through Schemas → Import JSON → Validate & preview. Review the visual schema, then save as a draft. Publication requires the user's authorized workflow action.

Public documentation provides no authorization to access an account, project or subscription. Existing customers need authenticated schema-administration access. New users can try https://demo.bepstudio.com or visit https://app.bepstudio.com/register for registration availability.
