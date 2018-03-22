goog.provide('plugin.<%= pluginName %>.Plugin');

goog.require('os.plugin.AbstractPlugin');
goog.require('os.plugin.PluginManager');


/**
 * Provides main entry point for <%= pluginName %> plugin.
 * @extends {os.plugin.AbstractPlugin}
 * @constructor
 */
plugin.<%= pluginName %>.Plugin = function() {
  plugin.<%= pluginName %>.Plugin.base(this, 'constructor');
  this.id = plugin.<%= pluginName %>.ID;
  this.errorMessage = null;
};
goog.inherits(plugin.<%= pluginName %>.Plugin, os.plugin.AbstractPlugin);


/**
 * @type {string}
 * @const
 */
plugin.<%= pluginName %>.ID = '<%= pluginName %>';


/**
 * @inheritDoc
 */
plugin.<%= pluginName %>.Plugin.prototype.init = function() {
  var msg = os.settings.get('testMessage', 'Default message from plugin.');

  alert(msg);
};


// add the plugin to the application
os.plugin.PluginManager.getInstance().addPlugin(new plugin.<%= pluginName %>.Plugin());
