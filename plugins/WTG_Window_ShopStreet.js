/**
 * Created by ts on 2017/05/21.
 */
function Window_ShopStreetCommand() {
    this.initialize.apply(this, arguments);
}

Window_ShopStreetCommand.prototype = Object.create(Window_Command.prototype);
Window_ShopStreetCommand.prototype.constructor = Window_ShopStreetCommand;

Window_ShopStreetCommand.prototype.initialize = function(width, height) {
    Window_Command.prototype.initialize.call(this, WindowConst.HomeBaseCommand_x, WindowConst.HomeBaseCommand_y, width, height);
    this.activate();
}

Window_ShopStreetCommand.prototype.makeCommandList = function() {
    this.addCommand(CommandConst.ShopStreet_Buy  , 'buy');
    this.addCommand(CommandConst.HomeBase_Talk   , 'talk');
    this.addCommand(CommandConst.HomeBase_toHome , 'home');
};

Window_ShopStreetCommand.prototype.processOk = function() {
    Window_ShopStreetCommand._lastCommandSymbol = this.currentSymbol();
    Window_Command.prototype.processOk.call(this);
};
