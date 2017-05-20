/**
 * Created by ts on 2017/05/20.
 *
 * 画面下に表示する、プレーヤーの簡易ステータスのウィンドウ
 */
function Window_MapStatus() {
    this.initialize.apply(this, arguments);
}

Window_MapStatus.prototype = Object.create(Window_Status.prototype);
Window_MapStatus.prototype.constructor = Window_MapStatus;

Window_MapStatus.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
    this.activate();
};
