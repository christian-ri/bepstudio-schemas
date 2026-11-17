# Required completion

`isRequired` controls whether a question contributes to plan Required completion. Optional fields do not reduce that percentage. An optional-only section can still display response coverage.

A required table needs at least one meaningful row. Every meaningful row must populate every configured required column. Blank placeholder rows are ignored. A Boolean false and a numeric zero are valid answers.

A schema-approved Not Applicable resolution requires `config.allowNotApplicable` and a reason of at least ten characters. The workflow retains its existing permissions, publication gates and lock-exception rules. Incomplete drafts remain saveable.

Required field settings and required-column metadata are included in schema and BEP JSON exports. Table rendering and completion use the same row decoder in the editor, PDF and server calculation.
