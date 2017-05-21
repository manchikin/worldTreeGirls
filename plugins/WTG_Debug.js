/*
* デバッグ用　タブキーで特定のアクションを起こす
*/

var _update = Scene_Base.prototype.update;

Scene_Base.prototype.update = function () {
    _update.call(this);
		if (Input.isTriggered('shift')) this.debugAction();
}

Scene_Base.prototype.debugAction = function () {
	// this.damageAll();
	this.screenPicture();
}

Scene_Base.prototype.screenPicture = function () {
	$gameScreen.movePicture(1, 0, 300, 300, 100,
	                                             100, 255, 0, 10);
}

Scene_Base.prototype.damageAll = function () {
	$gameParty.members().forEach(function(actor) {
		actor.gainHp(-50);
	});
	SceneManager._scene.refreshStatus();
}
