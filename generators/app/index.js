'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const slugify = require('slugg');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to the ${chalk.red('opensphere plugin')} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'pluginName',
        message: 'Your plugin name',
        default: slugify(this.appname)
      },
      {
        type: 'list',
        name: 'pluginType',
        message: 'What kind of plugin?',
        choices: [
          'Minimal example',
          'Basic Window',
          'XML File Source',
          'Other File Source',
          'Server Source'
        ],
        filter: function(val) {
          return slugify(val.toLowerCase());
        }
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  default() {
    if (this.props.pluginName.startsWith('opensphere-plugin-')) {
      this.props.pluginName = this.props.pluginName.substring(
        'opensphere-plugin-'.length
      );
    }
    if (this.props.pluginType === 'minimal-example') {
      this.config.set({ srcFiles: ['plugin'], testFiles: ['plugin.test'] });
    } else if (this.props.pluginType === 'basic-window') {
      this.config.set({ srcFiles: ['plugin'], testFiles: ['plugin.test'] });
    } else if (this.props.pluginType === 'xml-file-source') {
      this.config.set({ srcFiles: ['plugin'], testFiles: ['plugin.test'] });
    } else if (this.props.pluginType === 'other-file-source') {
      this.config.set({ srcFiles: ['plugin'], testFiles: ['plugin.test'] });
    } else if (this.props.pluginType === 'server-source') {
      this.config.set({ srcFiles: ['plugin'], testFiles: ['plugin.test'] });
    } else {
      // Some kind of assert?
      this.config.set({ srcFiles: [], testFiles: [] });
    }
  }

  writing() {
    var pluginTemplates = [
      'LICENSE',
      'karma.conf.js',
      'modernizr.config.json',
      'package.json',
      'config/settings.json',
      'views/README.md'
    ];
    pluginTemplates.forEach(function(templateFile) {
      this.fs.copyTpl(
        this.templatePath(templateFile),
        this.destinationPath(templateFile),
        this.props
      );
    }, this);

    this.config.get('srcFiles').forEach(function(srcFile) {
      this.fs.copyTpl(
        this.templatePath('src/' + srcFile + '.ejs'),
        this.destinationPath(
          'src/plugin/' +
            this.props.pluginName +
            '/' +
            this.props.pluginName +
            srcFile +
            '.js'
        ),
        this.props
      );
    }, this);

    this.config.get('testFiles').forEach(function(testFile) {
      this.fs.copyTpl(
        this.templatePath('test/' + testFile + '.ejs'),
        this.destinationPath(
          'test/plugin/' +
            this.props.pluginName +
            '/' +
            this.props.pluginName +
            testFile +
            '.js'
        ),
        this.props
      );
    }, this);
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
  }
};
