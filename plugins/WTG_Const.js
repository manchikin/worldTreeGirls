/*
* TextManagerのWTG版
* 種類は以下
* ・CommandConst →　拠点のコマンド名
*/

function CommandConst() {
    throw new Error('This is a static class');
}

Object.defineProperties(TextManager, {
    Home_toShop           : "商店街",
    Home_toGuild          : "ギルド",
    Home_toInn            : "宿屋",
    Home_toDungeon        : "ダンジョンへ",
})
