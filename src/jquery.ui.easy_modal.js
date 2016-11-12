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

