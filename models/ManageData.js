var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var ManageData = new keystone.List('ManageData');

ManageData.add({
  itemId: { type: String, unique: true },
  sessionId: { type: String },
});

ManageData.register();
