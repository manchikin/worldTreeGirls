function Scene_Home() {
    this.initialize.apply(this, arguments);
}

Scene_Home.prototype = Object.create(Scene_HomeBase.prototype);
Scene_Home.prototype.constructor = Scene_Home;

Scene_Home.prototype.initialize = function() {
    Scene_HomeBase.prototype.initialize.call(this);
    this._placeWindowConf.name = "拠点";
};