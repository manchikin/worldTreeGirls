// TODO グローバル汚染するため即時関数内に入れる
// TODO 各コマンドにフォーカス時、説明メッセージをどこかに表示する

/*
* 拠点の画面全般の親クラス
* ステータスと拠点名のウィンドウを表示する
*/
function Scene_HomeBase() {
    this.initialize.apply(this, arguments);
}

Scene_HomeBase.prototype = Object.create(Scene_AllBase.prototype);
Scene_HomeBase.prototype.constructor = Scene_HomeBase;

Scene_HomeBase.prototype.initialize = function() {
    Scene_AllBase.prototype.initialize.call(this);
};

Scene_HomeBase.prototype.createAllWindows = function() {
    Scene_AllBase.prototype.createAllWindows.call(this);
    // this.createHomeCommandWindow();
    this.createPlaceWindow();
    this.drawPlace();
};

Scene_HomeBase.prototype.createPlaceWindow = function () {
    this._placeWindow = new Window_Base(WindowConst.Place_x, WindowConst.Place_y, WindowConst.Place_width, WindowConst.Place_height);
    this.addChild(this._placeWindow);
}

Scene_HomeBase.prototype.drawPlace = function () {
    this._placeWindow.drawText(this._placeName, 0, 0, 200, "left");// 200は仮　場所名が入りきるならなんでも良い
}

Scene_HomeBase.prototype.update = function() {
    Scene_AllBase.prototype.update.call(this);
    if (this.hasMessage()) return;
	this.refreshScreen();
	this.showStatusWindow();
	if (this._isStandPictureShowing) this.hideStandPicture(1); // TODO モック用に暫定的に1 後々いろいろなIDのを消せるよう修正
};