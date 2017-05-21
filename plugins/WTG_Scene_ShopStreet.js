/**
 * Created by ts on 2017/05/21.
 */
// Scene_Shopにしたかったが、既存のSceneとかぶるのでScene_ShopStreet
function Scene_ShopStreet() {
    this.initialize.apply(this, arguments);
}

Scene_ShopStreet.prototype = Object.create(Scene_HomeBase.prototype);
Scene_ShopStreet.prototype.constructor =  Scene_ShopStreet;

Scene_ShopStreet.prototype.initialize = function() {
    Scene_HomeBase.prototype.initialize.call(this);
    this._placeName = PlaceConst.ShopStreet;
    this._parallax  = "CloudySky2";
    this._standPic  = "WindSpirit";
};

Scene_ShopStreet.prototype.createAllWindows = function() {
    Scene_HomeBase.prototype.createAllWindows.call(this);
    this.createShopStreetCommandWindow();
};

Scene_ShopStreet.prototype.createShopStreetCommandWindow = function() {
    this._commandWindow = new Window_ShopStreetCommand(WindowConst.ShopStreetCommand_width, WindowConst.ShopStreetCommand_height);
    this._commandWindow.setHandler('buy',   this.commandBuy.bind(this));
    this._commandWindow.setHandler('talk',  this.commandTalk.bind(this));
    this._commandWindow.setHandler('home',  this.commandHome.bind(this));
    this.addWindow(this._commandWindow);
}

Scene_ShopStreet.prototype.commandBuy = function () {
    // TODO 勿論モック
    SceneManager.push(Scene_Shop);
    var goods = ItemList();
    SceneManager.prepareNextScene(goods, false);

}

Scene_ShopStreet.prototype.commandTalk = function () {
    // TODO 勿論モック
    this.showStandPicture(PictureConst.Stand1, PictureConst.Stand1_x, PictureConst.Stand1_y);
    this.hideStatusWindow();
    $gameMessage.add("ここはショップです");
    $gameMessage.add("買い物ができます\f");
    $gameMessage.add("文章3");
}

Scene_ShopStreet.prototype.commandHome = function () {
    SceneManager.goto(Scene_Home);
}
