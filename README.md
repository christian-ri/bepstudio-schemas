# BEP Studio Schema Standard

The canonical exchange format is `bepstudio-schema` version `1.0`. It describes reusable BEP questions, sections, tables and project automation. Its content `version` uses Semantic Versioning independently from the format version.

The public repository is https://github.com/christian-ri/bepstudio-schemas. The specification, examples, documentation and validator are available under the MIT license. All examples are original synthetic content. No third-party BIM standard is redistributed here.

## Start

Use Node.js 22 or newer. Download an example, edit it, and validate it locally.

```sh
node tools/validate.mjs examples/minimal-bep.json
node tools/validate.mjs examples/*.json
node --test tools/validator.test.mjs
```

The CLI is a self-contained build of the application's actual validator and importer. It needs no database, installation or network access. Exit status is zero for valid input, one for invalid input, and two for missing arguments. Its JSON report lists errors and warnings. Review every warning before import.

The machine-readable structural contract is in `spec/bepstudio-schema-v1.schema.json`. The CLI also checks semantic requirements such as duplicate keys, field defaults, required-column references and automation headers. A general JSON Schema describes data validation. A canonical BEP Studio schema describes BEP authoring fields. The importer supports a documented subset of general JSON Schema.

- [Getting started](guides/getting-started.md)
- [Field types](spec/field-types.md)
- [Tables](spec/tables.md)
- [Required completion](spec/required-rules.md)
- [Project automation](spec/project-automation.md)
- [Import support](guides/importing-schemas.md)
- [AI agents](guides/ai-agents.md)
- [Troubleshooting](guides/troubleshooting.md)

## Workflow packages

Workflow mode and stage roles belong to the BEP Studio package. Select `GENERIC` or `RFP_PROPOSAL_PROJECT` during import. The latter creates linked RFP, Proposal and Project drafts with one content version. Stage edits follow the application's shared-structure rules. Publish the complete role set together. Each project retains its immutable definition snapshot.

## Maintaining this distribution

The private application's `npm run schemas:public` regenerates the specification and bundled validator from shared source. Review and copy only this directory into the separate repository. Its Actions workflow validates all examples and negative cases on every push and pull request.

## License

See [LICENSE](LICENSE) for original material. The included Zod dependency retains its MIT notice in [THIRD_PARTY_NOTICES.txt](THIRD_PARTY_NOTICES.txt). For distribution maintenance, see [publishing](guides/publishing.md).

Development preview: [configurable PDF covers and JSON contract](spec/cover-page.md) and [custom cover example](examples/custom-cover.json). Existing schemas retain their saved layouts.
