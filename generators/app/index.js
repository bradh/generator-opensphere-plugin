'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const slugify = require('slugg')
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('opensphere plugin')} generator!`)
    );

    const prompts = [
      {
        type    : 'input',
        name    : 'plugin_name',
        message : 'Your plugin name',
        default : slugify(this.appname)
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  default() {
    console.log(this.props);
    if (this.props.plugin_name.startsWith('opensphere-plugin-')) {
      this.props.plugin_name = this.props.plugin_name.substring('opensphere-plugin-'.length);
    }
    console.log(this.props);
  }

  writing() {
    var pluginTemplates = ['LICENSE', 'modernizr.config.json', 'package.json', 'config/settings.json', 'views/README.md'];
    pluginTemplates.forEach(function(templateFile) {
      this.fs.copyTpl(this.templatePath(templateFile), this.destinationPath(templateFile), this.props);
    }, this);
    var srcFiles = ['plugin.js']
    srcFiles.forEach(function(srcFile) {
      this.fs.copyTpl(this.templatePath('src/' + srcFile), this.destinationPath('src/plugin/' + this.props.plugin_name + '/' + srcFile), this.props);
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
