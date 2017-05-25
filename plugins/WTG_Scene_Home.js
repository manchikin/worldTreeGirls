function Scene_Home() {
    this.initialize.apply(this, arguments);
}

Scene_Home.prototype = Object.create(Scene_HomeBase.prototype);
Scene_Home.prototype.constructor = Scene_Home;

Scene_Home.prototype.initialize = function() {
  Scene_HomeBase.prototype.initialize.call(this);
	this._placeName = PlaceConst.Home;
	this._parallax  = "BlueSky";
	this._standPic  = "Slime";
};

Scene_Home.prototype.createAllWindows = function() {
    Scene_HomeBase.prototype.createAllWindows.call(this);
    this.createHomeCommandWindow();
};

Scene_Home.prototype.createHomeCommandWindow = function() {
  this._commandWindow = new Window_HomeCommand(WindowConst.HomeCommand_width, WindowConst.HomeCommand_height);
  this._commandWindow.setHandler('inn',  this.commandInn.bind(this));
  this._commandWindow.setHandler('shop', this.commandShop.bind(this));
  // this._commandWindow.setHandler('guild',  this.commandGuild.bind(this));
  this._commandWindow.setHandler('dungeon',  this.commandDungeon.bind(this));
  this.addWindow(this._commandWindow);
};

Scene_Home.prototype.commandInn = function() {
    SceneManager.goto(Scene_Inn);
};

Scene_Home.prototype.commandShop = function() {
    SceneManager.goto(Scene_ShopStreet);
};

Scene_Home.prototype.commandDungeon = function() {
    $gameVariables.setValue(1, 5);// TODO 暫定的に5(テストプレイしやすいよう)
    SceneManager.goto(Scene_Dungeon);
};