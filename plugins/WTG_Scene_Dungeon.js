/**
 * Created by ts on 2017/05/24.
 */
// どのクラスを継承すべきか検討中

// TODO グローバル汚染するため即時関数内に入れる
// TODO 各コマンドにフォーカス時、説明メッセージをどこかに表示する

/*
 * 拠点の画面全般の親クラス
 * ステータスと拠点名のウィンドウを表示する
 */
function Scene_Dungeon() {
    this.initialize.apply(this, arguments);
}

Scene_Dungeon.prototype = Object.create(Scene_AllBase.prototype);
Scene_Dungeon.prototype.constructor = Scene_Dungeon;

Scene_Dungeon.prototype.initialize = function() {
    Scene_AllBase.prototype.initialize.call(this);
    this._parallax = $gameDungeon.parallax;
};

Scene_Dungeon.prototype.createAllWindows = function() {
    Scene_AllBase.prototype.createAllWindows.call(this);
    this.createDungeonCommandWindow();
    this.createSPAPWindow();
    this.createPlaceWindow();
    this.drawPlace();
};

Scene_Dungeon.prototype.createSPAPWindow = function() {
    this._SPAPWindow = new Window_SPAP(600, 0, 200, 72); // TODO 暫定　Constに設定すること
    this.drawSPAP();
    this.addWindow(this._SPAPWindow);
}

Scene_Dungeon.prototype.drawSPAP = function() {
    this._SPAPWindow.drawText("SP" + $gameSp.getValue(), 0, 0, 200, "left") // TODO 暫定　Constに設定すること
}

Scene_Dungeon.prototype.createDungeonCommandWindow = function () {
    this._commandWindow = new Window_DungeonCommand(WindowConst.DungeonCommand_width, WindowConst.DungeonCommand_height);
    this._commandWindow.setHandler('escape',  this.commandEscape.bind(this));
    this.addWindow(this._commandWindow);
}
Scene_Dungeon.prototype.commandEscape = function() {
    SceneManager.goto(Scene_Home);
}

Scene_Dungeon.prototype.createPlaceWindow = function () {
    this._placeWindow = new Window_Base(WindowConst.Place_x, WindowConst.Place_y, WindowConst.Place_width, WindowConst.Place_height);
    this.addChild(this._placeWindow);
}

Scene_Dungeon.prototype.drawPlace = function () {
    var place = this.getPlace(); // TODO 暫定的に「1階層1WAVE」と返す
    this._placeWindow.drawText(place, 0, 0, 200, "left");// 200は仮　場所名が入りきるならなんでも良い
}

Scene_Dungeon.prototype.getPlace = function () {
    return "1階層1WAVE";
}

Scene_Dungeon.prototype.update = function() {
    Scene_Map.prototype.update.call(this);
    if (this.hasMessage()) return;
    this.refreshScreen();
    this.showStatusWindow();
    if (this._isStandPictureShowing) this.hideStandPicture(1); // TODO モック用に暫定的に1 後々いろいろなIDのを消せるよう修正
};

