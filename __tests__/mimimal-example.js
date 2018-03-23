'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-opensphere-plugin:minimal-example', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      pluginType: 'minimal-example',
      pluginName: 'opensphere-plugin-mine'
    });
  });

  it('creates files', () => {
    assert.file(['LICENSE']);
  });

  it('creates src files', () => {
    assert.file(['src/plugin/mine/mineplugin.js']);
  });

  it('creates test files', () => {
    assert.file(['test/plugin/mine/mineplugin.test.js']);
  });
});
