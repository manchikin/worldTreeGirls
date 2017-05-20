function Window_HomeCommand() {
    this.initialize.apply(this, arguments);
}

Window_HomeCommand.prototype = Object.create(Window_Command.prototype);
Window_HomeCommand.prototype.constructor = Window_HomeCommand;

Window_HomeCommand.prototype.initialize = function(width, height) {
    Window_Command.prototype.initialize.call(this, WindowConst.HomeBaseCommand_x, WindowConst.HomeBaseCommand_y, width, height);
    this.activate();
}

Window_HomeCommand.prototype.makeCommandList = function() {
    this.addCommand(CommandConst.Home_toInn    , 'inn');
    this.addCommand(CommandConst.Home_toShop   , 'shop');
    this.addCommand(CommandConst.Home_toGuild  , 'guild');
    this.addCommand(CommandConst.Home_toDungeon, 'dungeon');
};

Window_HomeCommand.prototype.processOk = function() {
    Window_HomeCommand._lastCommandSymbol = this.currentSymbol();
    Window_Command.prototype.processOk.call(this);
};
