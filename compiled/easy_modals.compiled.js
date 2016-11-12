

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$.widget("ui.easy_modal", $.ui.dialog, {
	_create: function _create() {
		$.ui.dialog.prototype._create.call(this);

		this.uiDialogTitlebar.hide();
		this.uiDialog.addClass("easy-modal");

		this._create_close();
	},
	_create_close: function _create_close() {
		var _this = this;

		$(this.element[0]).append($("<span class='easy-model-close'>X</span>").on("click", function () {
			return _this.close();
		}));
	}
});

var Easy_Modals = function () {
	function Easy_Modals() {
		_classCallCheck(this, Easy_Modals);
	}

	_createClass(Easy_Modals, null, [{
		key: "init",
		value: function init() {
			this.PLUGIN_ID = "easy_modals";

			this.setup();

			$(this.ready.bind(this));
		}
	}, {
		key: "ready",
		value: function ready() {
			if (this.modals && this.modals.length) {
				this.modals.forEach(function (elem) {
					if ($(elem.trigger).length) {
						$(elem.trigger).on("click", function () {

							$("<div></div>").html("<div class='easy-modal-content'>" + elem.content + "</div>").easy_modal({

								resizable: false,
								draggable: false,
								modal: true,
								width: elem.width || 300,
								height: elem.height || 250

							});
						});
					}
				});
			}
		}
	}, {
		key: "setup",
		value: function setup() {
			var plugin = pb.plugin.get(this.PLUGIN_ID);

			if (plugin && plugin.settings) {
				var plugin_settings = plugin.settings;

				this.modals = plugin_settings.modals;
			}
		}
	}]);

	return Easy_Modals;
}();

Easy_Modals.init();