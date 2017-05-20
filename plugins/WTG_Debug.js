/*
* デバッグ用　タブキーで特定のアクションを起こす
*/

var _update = Scene_Base.prototype.update;

Scene_Base.prototype.update = function () {
    _update.call(this);
		if (Input.isTriggered('shift')) this.debugAction();
}

Scene_Base.prototype.debugAction = function () {
	$gameParty.members().forEach(function(actor) {
		actor.gainHp(-50);
	});
	SceneManager._scene.refreshStatus();
}
