/**
 * Created by ts on 2017/05/24.
 */
// TODO ピクチャで細かくわける？　ひとまず暫定的なモックとして
function Window_DungeonCommand() {
    this.initialize.apply(this, arguments);
}

Window_DungeonCommand.prototype = Object.create(Window_Command.prototype);
Window_DungeonCommand.prototype.constructor = Window_DungeonCommand;

Window_DungeonCommand.prototype.initialize = function(width, height) {
    Window_Command.prototype.initialize.call(this, WindowConst.DungeonCommand_x, WindowConst.DungeonCommand_y, width, height);
    this.activate();
}

Window_DungeonCommand.prototype.makeCommandList = function() {
    this.addCommand(CommandConst.Dungeon_Explore   , 'explore');
    this.addCommand(CommandConst.Dungeon_Search    , 'search');
    this.addCommand(CommandConst.Dungeon_Escape    , 'escape');
};

Window_DungeonCommand.prototype.processOk = function() {
    Window_DungeonCommand._lastCommandSymbol = this.currentSymbol();
    Window_Command.prototype.processOk.call(this);
};
