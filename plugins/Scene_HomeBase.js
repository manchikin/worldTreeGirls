// TODO グローバル汚染するため即時関数内に入れる
function Scene_HomeBase() {
    this.initialize.apply(this, arguments);
}

Scene_HomeBase.prototype = Object.create(Scene_Map.prototype);
Scene_HomeBase.prototype.constructor = Scene_HomeBase;

Scene_HomeBase.prototype.initialize = function() {
    Scene_Map.prototype.initialize.call(this);
    this._waitCount = 0;
    this._encounterEffectDuration = 0;
    this._mapLoaded = false;
    this._touchCount = 0;
};
