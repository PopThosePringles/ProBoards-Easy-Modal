

$.widget("ui.easy_modal", $.ui.dialog, {

	_create(){
		$.ui.dialog.prototype._create.call(this);

		this.uiDialogTitlebar.hide();
		this.uiDialog.addClass("easy-modal");

		this._create_close();
	},

	_create_close(){
		$(this.element[0]).append($("<span class='easy-model-close'>X</span>").on("click", () => this.close()));
	}

});



class Easy_Modals {

	static init(){
		this.PLUGIN_ID = "easy_modals";

		this.setup();

		$(this.ready.bind(this));
	}

	static ready(){
		if(this.modals && this.modals.length){
			this.modals.forEach((elem) => {
				if($(elem.trigger).length){
					$(elem.trigger).on("click", () => {

						$("<div></div>").html("<div class='easy-modal-content'>" + elem.content + "</div>").easy_modal({

							resizable: false,
							draggable: false,
							modal: true,
							width: elem.width || 300,
							height: elem.height || 250

						});

					});
				}
			})
		}
	}

	static setup(){
		let plugin = pb.plugin.get(this.PLUGIN_ID);

		if(plugin && plugin.settings){
			let plugin_settings = plugin.settings;

			this.modals = plugin_settings.modals;
		}
	}

}

Easy_Modals.init();