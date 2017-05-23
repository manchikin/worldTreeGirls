/*
* TextManagerのWTG版
* 種類は以下
* ・CommandConst →　拠点のコマンド名
* ・WindowConst  →　各種ウィンドウの位置
* ・PlaceConst   →　場所名
* ・PictureConst →　ピクチャーのRealId管理
*/

function CommandConst() {
    throw new Error('This is a static class');
}

Object.defineProperties(CommandConst, {
    HomeBase_toHome       : {value: "拠点へ"},
    HomeBase_Talk         : {value: "会話"},
    Home_toShopStreet     : {value: "商店街"},
    Home_toGuild          : {value: "ギルド"},
    Home_toInn            : {value: "宿屋"},
    Home_toDungeon        : {value: "ダンジョンへ"},
    Inn_Rest              : {value: "休む"},
    ShopStreet_Buy        : {value: "売買"},
    Dungeon_Explore       : {value: "進行"},
    Dungeon_Search        : {value: "探索"},
    Dungeon_Escape        : {value: "撤退"},
    Dungeon_Menu          : {value: "メニュー"},
})

function WindowConst() {
  throw new Error('This is a static class');
}


// 参考　横幅816 縦幅624
Object.defineProperties(WindowConst, {
		Place_x                   : {value: 0},
		Place_y                   : {value: 0},
		Place_width               : {value: 650},
		Place_height              : {value: 72},
		Status_x                  : {value: 18},
		Status_y                  : {value: 430},
		Status_width              : {value: 550},
		Status_height             : {value: 624 - 450},
		HomeBaseCommand_x         : {value: 0},
		HomeBaseCommand_y         : {value: 100},
		HomeCommand_width         : {value: 160},
		HomeCommand_height        : {value: 300},
		InnCommand_width          : {value: 160},
		InnCommand_height         : {value: 100},
        ShopStreetCommand_width   : {value: 160},
        ShopStreetCommand_height  : {value: 100},
        DungeonCommand_x          : {value: 500},
        DungeonCommand_y          : {value: 400},
        DungeonCommand_width      : {value: 100},
        DungeonCommand_height     : {value: 100},
})

function PlaceConst() {
    throw new Error('This is a static class');
}

Object.defineProperties(PlaceConst, {
    Home       : {value: "拠点"},
    Inn        : {value: "宿"},
    ShopStreet : {value: "商店街"},
})

function PictureConst() {
    throw new Error('This is a static class');
}

Object.defineProperties(PictureConst, {
    Stand1          : {value: 1}, // 立ち絵　5人まで表示可能とする（多いとは思うが）
    Stand2          : {value: 2},
    Stand3          : {value: 3},
    Stand4          : {value: 4},
    Stand5          : {value: 5},
    StandWaitFrame  : {value: 10},
    Stand1_x        : {value: 500},
    Stand1_y        : {value: 300},
})
