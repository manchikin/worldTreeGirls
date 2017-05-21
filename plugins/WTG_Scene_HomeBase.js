// TODO グローバル汚染するため即時関数内に入れる
// TODO 各コマンドにフォーカス時、説明メッセージをどこかに表示する

/*
* 拠点の画面全般の親クラス
* ステータスと拠点名のウィンドウを表示する
*/
function Scene_HomeBase() {
    this.initialize.apply(this, arguments);
}

Scene_HomeBase.prototype = Object.create(Scene_Map.prototype);
Scene_HomeBase.prototype.constructor = Scene_HomeBase;

Scene_HomeBase.prototype.initialize = function() {
    Scene_Map.prototype.initialize.call(this);
		this._commandWindow = {};
		this._parallax      = "Mountains1";
		this._standPic      = ""; // 仮　素材のimg/picturesフォルダの中から
};

Scene_HomeBase.prototype.create = function() {
	Scene_Map.prototype.create.call(this);
	this.createBackGround();
	this.createStandPicture();
}

Scene_HomeBase.prototype.createStandPicture = function () {
	if (this._standPic === "") return;
	$gameScreen.showPicture(PictureConst.Stand1, this._standPic, 0,
		 Graphics.boxWidth, PictureConst.Stand1_y, 100, 100, 255, 0); // 初期表示時は画面外
}

Scene_HomeBase.prototype.showStandPicture = function (pictureId, x, y) {
	$gameScreen.movePicture(pictureId, 0, x, y, 100, 100, 255, 0, PictureConst.StandWaitFrame);
}

Scene_HomeBase.prototype.createBackGround = function () {
	$gameMap.changeParallax(this._parallax, false, false, 0, 0);
}

Scene_HomeBase.prototype.createAllWindows = function() {
    Scene_Map.prototype.createAllWindows.call(this);
    // this.createHomeCommandWindow();
    this.createPlaceWindow();
    this.drawPlace();
};

Scene_HomeBase.prototype.createPlaceWindow = function () {
    this._placeWindow = new Window_Base(WindowConst.Place_x, WindowConst.Place_y, WindowConst.Place_width, WindowConst.Place_height);
    this.addChild(this._placeWindow);
}

Scene_HomeBase.prototype.drawPlace = function () {
    this._placeWindow.drawText(this._placeName, 0, 0, 200, "left");
}

Scene_HomeBase.prototype.update = function() {
    Scene_Map.prototype.update.call(this); // 200は仮　場所名が入りきるならなんでも良い
		if (!this.isMessageShowing()) this.refreshScreen();
};

Scene_HomeBase.prototype.isMessageShowing = function () {
	return !$gameMessage.hasText() && !this._commandWindow.active;
}

Scene_HomeBase.prototype.refreshScreen = function () {
	this._commandWindow.activate();
}
