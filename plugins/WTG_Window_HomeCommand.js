function Window_HomeCommand() {
    this.initialize.apply(this, arguments);
}

Window_HomeCommand.prototype = Object.create(Window_Selectable.prototype);
Window_HomeCommand.prototype.constructor = Window_HomeCommand;

Window_HomeCommand.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.activate();
}

Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame,   'newGame');
    this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
    this.addCommand(TextManager.options,   'options');
};
