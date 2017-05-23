/**
 * Created by ts on 2017/05/24.
 */
// ダンジョンの情報を管理するクラス

function Game_Dungeon() {
    this.initialize.apply(this, arguments);
}

Game_Dungeon.prototype.initialize = function(item) {
    this.wave     = 0;
    this.stratum  = 0;
    this.parallax = "";
};

$gameDungeon = new Game_Dungeon();
