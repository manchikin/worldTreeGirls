/**
 * Created by ts on 2017/05/24.
 */
// ダンジョンの情報を管理するクラス

function Game_Dungeon() {
    this.initialize.apply(this, arguments);
}

Game_Dungeon.prototype.initialize = function() {

};

Game_Dungeon.prototype.initMembers = function() {
    this.wave             = 0;
    this.stratum          = 0;
    this.parallax         = "Mountains2"; // TODO 暫定対応
    this._phase           = "";
    this._endReturnProcess = false;
};

Game_Dungeon.prototype.update = function () {
    if (this.isBusy()) return;
    if (this.needReturn()) {
        this._endReturnProcess ? this.executeReturn() : this.processReturn();
    }
};

Game_Dungeon.prototype.processReturn = function () {
    if (this._phase === "return") $gameMessage.add($dataDungeon.getReturnMessage())
    this._endReturnProcess = true;
};

Game_Dungeon.prototype.executeReturn = function () {
    this._phase = "";
    if (this.isBusy()) return;
    SceneManager.goto(Scene_Home);
};

Game_Dungeon.prototype.isBusy = function () {
    return $gameMessage.isBusy();
};

Game_Dungeon.prototype.needReturn = function () {
    return (this._phase === "return" || $gameSp.getValue() === 0);
};

Game_Dungeon.prototype.setPhase = function (phase) {
    this._phase = phase;
};

$gameDungeon = new Game_Dungeon();
