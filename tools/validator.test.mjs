import assert from 'node:assert/strict';
import fs from 'node:fs';
import { test } from 'node:test';
import { validateBepSchema, analyseSchemaImport } from './validate.mjs';

const root = new URL('../', import.meta.url);
const example = () => JSON.parse(fs.readFileSync(new URL('examples/minimal-bep.json', root), 'utf8'));

test('all public examples satisfy the bundled application validator', () => {
  for (const name of fs.readdirSync(new URL('examples/', root))) {
    const result = validateBepSchema(JSON.parse(fs.readFileSync(new URL(`examples/${name}`, root), 'utf8')));
    assert.deepEqual(result.errors, [], name);
  }
});
test('duplicate columns, invalid required columns and defaults fail', () => {
  const document = example();
  document.sections[0].fields = [{ key: 'table', label: 'Table', fieldType: 'LIST', config: { tableColumns: ['Name', 'Name'], requiredColumns: ['Email'] } }];
  assert.ok(validateBepSchema(document).errors.length >= 2);
  document.sections[0].fields = [{ key: 'choice', label: 'Choice', fieldType: 'SELECT', options: ['A'], defaultValue: 'B' }];
  assert.ok(validateBepSchema(document).errors.length);
});
test('local references resolve, external, recursive and unsupported constraints fail', () => {
  const imported = analyseSchemaImport({ type: 'object', $defs: { name: { type: 'string', default: 'Example' } }, properties: { name: { $ref: '#/$defs/name' } }, required: ['name'] });
  assert.deepEqual(imported.errors, []);
  assert.equal(validateBepSchema(imported.normalised).schema.sections[0].fields[0].defaultValue, 'Example');
  for (const field of [{ $ref: 'https://example.test/schema' }, { pattern: '.*', type: 'string' }, { $ref: '#/$defs/self' }]) {
    assert.ok(analyseSchemaImport({ type: 'object', $defs: { self: { $ref: '#/$defs/self' } }, properties: { field } }).errors.length);
  }
});
