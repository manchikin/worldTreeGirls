/**
 * Created by ts on 2017/05/26.
 */
// ダンジョン画面のモデル的クラス

function Data_Dungeon() {

}

Data_Dungeon.prototype.getReturnMessage = function () { // TODO おそらく引数を追加して条件を取得すると思われる
    return this.fixMessage($gameParty.members()[0].name() + "たちは撤退した");
}

Data_Dungeon.prototype.getExploreMessage = function () { // TODO おそらく引数を追加して条件を取得すると思われる
    return "";
}

Data_Dungeon.prototype.fixMessage= function (message) {
     return message; // TODO 正規表現と置換でメッセージを成型する
}

$dataDungeon = new Data_Dungeon();