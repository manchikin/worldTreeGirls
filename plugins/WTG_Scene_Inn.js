function Scene_Inn() {
    this.initialize.apply(this, arguments);
}

 Scene_Inn.prototype = Object.create(Scene_HomeBase.prototype);
 Scene_Inn.prototype.constructor =  Scene_Inn;

 Scene_Inn.prototype.initialize = function() {
    Scene_HomeBase.prototype.initialize.call(this);
		this._placeName = PlaceConst.Inn;
};

 Scene_Inn.prototype.createAllWindows = function() {
    Scene_HomeBase.prototype.createAllWindows.call(this);
    this.createInnCommandWindow();
};

Scene_Inn.prototype.createInnCommandWindow = function() {
  this._commandWindow = new Window_InnCommand(WindowConst.InnCommand_width, WindowConst.InnCommand_height);
  this._commandWindow.setHandler('rest',  this.commandRest.bind(this));
  this._commandWindow.setHandler('home',  this.commandHome.bind(this));
  this.addWindow(this._commandWindow);
}

Scene_Inn.prototype.commandRest = function () {
	// TODO 勿論モック
	$gameScreen.startFlash([255, 255, 255, 170], 20);
	$gameParty.members().forEach(function(char) {
		char.recoverAll();
	})
	this.refreshStatus();
	this._commandWindow.activate();
}

Scene_Inn.prototype.commandHome = function () {
	SceneManager.goto(Scene_Home);
}
