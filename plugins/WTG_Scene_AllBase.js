/**
 * Created by ts on 2017/05/24.
 */
// ・拠点、ダンジョン画面のベースとなるクラス

/*
 * 拠点の画面全般の親クラス
 * ステータスと拠点名のウィンドウを表示する
 */
function Scene_AllBase() {
    this.initialize.apply(this, arguments);
}

Scene_AllBase.prototype = Object.create(Scene_Map.prototype);
Scene_AllBase.prototype.constructor = Scene_AllBase;

Scene_AllBase.prototype.initialize = function() {
    Scene_Map.prototype.initialize.call(this);
    this._commandWindow = {};
    this._parallax      = "Mountains1";
    this._standPic      = ""; // 仮　素材のimg/picturesフォルダの中から
    this._isStandPictureShowing = false;
};

Scene_AllBase.prototype.create = function() {
    Scene_Map.prototype.create.call(this);
    this.createBackGround();
    this.createStandPicture();
}

Scene_AllBase.prototype.createStandPicture = function () {
    if (this._standPic === "") return;
    $gameScreen.showPicture(PictureConst.Stand1, this._standPic, 0,
        Graphics.boxWidth, PictureConst.Stand1_y, 100, 100, 255, 0); // 初期表示時は画面外
}

Scene_AllBase.prototype.showStandPicture = function (pictureId, x, y) {
    $gameScreen.movePicture(pictureId, 0, x, y, 100, 100, 255, 0, PictureConst.StandWaitFrame);
    this._isStandPictureShowing = true;
}

Scene_AllBase.prototype.hideStandPicture = function (pictureId) {
    // 1000は暫定的対応　隠れればなんでもいい
    $gameScreen.movePicture(pictureId, 0, 1000, PictureConst.Stand1_y, 100, 100, 255, 0, PictureConst.StandWaitFrame);
}

Scene_AllBase.prototype.createBackGround = function () {
    $gameMap.changeParallax(this._parallax, false, false, 0, 0);
}

Scene_AllBase.prototype.update = function() {
    Scene_Map.prototype.update.call(this);
    if (this.hasMessage()) return;
    this.refreshScreen();
    this.showStatusWindow();
    if (this._isStandPictureShowing) this.hideStandPicture(1); // TODO モック用に暫定的に1 後々いろいろなIDのを消せるよう修正
};

Scene_AllBase.prototype.hasMessage = function () {
    return $gameMessage.hasText() && !this._commandWindow.active && !this._messageWindow.isClosing();
}

Scene_AllBase.prototype.refreshScreen = function () {
   if (Object.keys(this._commandWindow).length !== 0) this._commandWindow.activate();
}
