function Window_HomeCommand() {
    this.initialize.apply(this, arguments);
}

Window_HomeCommand.prototype = Object.create(Window_Base.prototype);
Window_HomeCommand.prototype.constructor = Window_HomeCommand;

Window_HomeCommand.prototype.initialize = function(x, y) {
    Window_Base.prototype.initialize.call(this, x, y, 100, 100);
    this.activate();
}