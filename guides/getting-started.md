# Getting started

Sign into BEP Studio with schema-administration rights and open **Schemas**. Choose one of three entry points:

- **Build from scratch**: name your package, choose a workflow, then add sections and questions in the visual Builder.
- **Upload JSON file**: choose a JSON file up to 1 MB. A valid file opens package setup automatically. Review its name, description and workflow, then continue to the Builder.
- **Create manual**: paste JSON, select **Validate & preview**, review diagnostics and use **Preview schema** to inspect the content. Choose **Continue to setup** when ready.

In the Builder, review questions, choices, table columns and required settings. **Starting content (optional)** pre-fills new BEPs: edit table cells, add or remove starting rows, enter list items individually, or select choice defaults. Contributors can change starting content where the field allows editing. No JSON editing is needed for this step.

Stable package, section and field keys are managed internally in the visual Builder. Imported keys are preserved when labels change; new keys are generated automatically. Save an organization-owned draft and review it before publishing.

## Authoring JSON outside the Builder

1. Copy `examples/minimal-bep.json`.
2. Set stable keys and descriptive labels. Add sections and fields.
3. Validate using `node tools/validate.mjs your-schema.json`.
4. Resolve errors, review warnings and import using one of the JSON paths above.

The visual controls do not change the schema format: defaults remain in `defaultValue`, and structured table rows retain their existing encoding. Format version **1.0** remains current.

New users can explore https://demo.bepstudio.com and check registration availability at https://app.bepstudio.com/register. Existing users can import, create and edit schemas after verified authentication and authorization.
