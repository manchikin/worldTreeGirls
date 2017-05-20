function Window_InnCommand() {
    this.initialize.apply(this, arguments);
}

Window_InnCommand.prototype = Object.create(Window_Command.prototype);
Window_InnCommand.prototype.constructor = Window_InnCommand;

Window_InnCommand.prototype.initialize = function(width, height) {
    Window_Command.prototype.initialize.call(this, WindowConst.HomeBaseCommand_x, WindowConst.HomeBaseCommand_y, width, height);
    this.activate();
}

Window_InnCommand.prototype.makeCommandList = function() {
    this.addCommand(CommandConst.Inn_Rest        , 'rest');
    this.addCommand(CommandConst.HomeBase_toHome , 'home');
};

Window_InnCommand.prototype.processOk = function() {
    Window_InnCommand._lastCommandSymbol = this.currentSymbol();
    Window_Command.prototype.processOk.call(this);
};
