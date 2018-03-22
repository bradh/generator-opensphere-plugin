goog.provide('plugin.<%= plugin_name %>.Plugin');

goog.require('os.plugin.AbstractPlugin');
goog.require('os.plugin.PluginManager');


/**
 * Provides main entry point for <%= plugin_name %> plugin.
 * @extends {os.plugin.AbstractPlugin}
 * @constructor
 */
plugin.<%= plugin_name %>.Plugin = function() {
  plugin.<%= plugin_name %>.Plugin.base(this, 'constructor');
  this.id = plugin.<%= plugin_name %>.ID;
  this.errorMessage = null;
};
goog.inherits(plugin.<%= plugin_name %>.Plugin, os.plugin.AbstractPlugin);


/**
 * @type {string}
 * @const
 */
plugin.<%= plugin_name %>.ID = '<%= plugin_name %>';


/**
 * @inheritDoc
 */
plugin.<%= plugin_name %>.Plugin.prototype.init = function() {
  var msg = os.settings.get('testMessage', 'Default message from plugin.');

  alert(msg);
};


// add the plugin to the application
os.plugin.PluginManager.getInstance().addPlugin(new plugin.<%= plugin_name %>.Plugin());
