// TODO グローバル汚染するため即時関数内に入れる

function Scene_HomeBase() {
    this.initialize.apply(this, arguments);
}

Scene_HomeBase.prototype = Object.create(Scene_Map.prototype);
Scene_HomeBase.prototype.constructor = Scene_HomeBase;

Scene_HomeBase.prototype.initialize = function() {
    Scene_Map.prototype.initialize.call(this);
    this._placeWindowConf = {x:    0, y:    0, width:  Graphics.boxWidth, height: 72, name: "",
                                  mesx: 0, mesy: 0, meswid: Graphics.boxWidth - 48, align: "left"};
};

Scene_HomeBase.prototype.createAllWindows = function() {
    Scene_Map.prototype.createAllWindows.call(this);
    // this.createHomeCommandWindow();
    this.createPlaceWindow();
    this.drawPlace();
    this.createHomeCommandWindow();
};

Scene_HomeBase.prototype.createHomeCommandWindow = function() {
    this._commandWindow = new Window_HomeCommand(10, 10);
    this.addChild(this._commandWindow);
}


Scene_HomeBase.prototype.createPlaceWindow = function () {
    this._placeWindow = new Window_Base(this._placeWindowConf.x, this._placeWindowConf.y, this._placeWindowConf.width, this._placeWindowConf.height);
    this.addChild(this._placeWindow);
}

Scene_HomeBase.prototype.drawPlace = function () {
    this._placeWindow.drawText(this._placeWindowConf.name, this._placeWindowConf.mesx, this._placeWindowConf.mesy, this._placeWindowConf.meswid, this._placeWindowConf.align);
}

Scene_HomeBase.prototype.update = function() {
    Scene_Map.prototype.update.call(this);
};
