function Scene_Home() {
    this.initialize.apply(this, arguments);
}

Scene_Home.prototype = Object.create(Scene_HomeBase.prototype);
Scene_Home.prototype.constructor = Scene_Home;

Scene_Home.prototype.initialize = function() {
    Scene_HomeBase.prototype.initialize.call(this);
    this._placeWindowConf.name = "拠点";
    this._commandWindowConf = {x: 0, y:100, width:200, height:300};
};

Scene_Home.prototype.createAllWindows = function() {
    Scene_HomeBase.prototype.createAllWindows.call(this);
    this.createHomeCommandWindow();
};

Scene_Home.prototype.createHomeCommandWindow = function() {
  this._commandWindow = new Window_HomeCommand(this._commandWindowConf.x, this._commandWindowConf.y, this._commandWindowConf.width, this._commandWindowConf.height);
  this.addChild(this._commandWindow);
}
