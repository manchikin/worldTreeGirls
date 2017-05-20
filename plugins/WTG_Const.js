/*
* TextManagerのWTG版
* 種類は以下
* ・CommandConst →　拠点のコマンド名
* ・WindowConst  →　各種ウィンドウの位置
* ・PlaceConst   →　場所名
*/

function CommandConst() {
    throw new Error('This is a static class');
}

Object.defineProperties(CommandConst, {
    HomeBase_toHome       : {value: "拠点へ"},
    Home_toShop           : {value: "商店街"},
    Home_toGuild          : {value: "ギルド"},
    Home_toInn            : {value: "宿屋"},
    Home_toDungeon        : {value: "ダンジョンへ"},
    Inn_Rest              : {value: "休む"},
})

function WindowConst() {
  throw new Error('This is a static class');
}

Object.defineProperties(WindowConst, {
    HomeBaseCommand_x  : {value: 0},
    HomeBaseCommand_y  : {value: 100},
    HomeCommand_width  : {value: 200},
    HomeCommand_height : {value: 300},
    InnCommand_width   : {value: 200},
    InnCommand_height  : {value: 100},
})

function PlaceConst() {
    throw new Error('This is a static class');
}

Object.defineProperties(PlaceConst, {
    Home       : {value: "拠点"},
    Inn        : {value: "宿"},
})
