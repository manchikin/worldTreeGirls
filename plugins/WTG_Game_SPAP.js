/**
 * Created by ts on 2017/05/24.
 */
// TODO アツマールのコメントが変数、スイッチで管理されていると仮定し、以下のように設定
// $gameVariables.value(1) = SP
// $gameVariables.value(2) = AP

function Game_Sp() {
    this.initialize.apply(this, arguments);
}

Game_Sp.prototype.initialize = function(item) {
};

Game_Sp.prototype.getValue = function () {
    return $gameVariables.value(1);
};

Game_Sp.prototype.setValue = function (value) {
    $gameVariables.setValue(1, value);
};

// TODO ターンなどによる減少値を返す。
//      いまはすべて暫定的に1
Game_Sp.prototype.getReduceValue = function () {
    return 1;
};
$gameSp = new Game_Sp();