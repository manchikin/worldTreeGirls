/**
 * Created by ts on 2017/05/24.
 */
function Window_SPAP() {
    this.initialize.apply(this, arguments);
}

Window_SPAP.prototype = Object.create(Window_Base.prototype);
Window_SPAP.prototype.constructor = Window_SPAP;

Window_SPAP.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.activate();
};