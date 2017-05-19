//=============================================================================
// BootConsole.js	2017/05/05
// The MIT License (MIT)
//=============================================================================

/*:
 * @plugindesc コンソールオート起動用プラグイン
 * @author Shiba
 *
 * @param consoleAutoBoot
 * @desc コンソールを自動で起動する (0:OFF 1:ON)
 * @default 1
 *
 * @param consolePosition
 * @desc コンソール起動位置 (X, Y)
 * @default 100, 50
 *
 * @help コンソールオート起動用プラグイン
 * テストプレイ時、戦闘テストプレイ時にオートでコンソールを起動する
 */

(function() {
	var _Scene_Boot_initialize = Scene_Boot.prototype.initialize;
	Scene_Boot.prototype.initialize = function() {
		_Scene_Boot_initialize.call(this);
		jsName = "BootConsole";
		var isAutoBoot = Number(PluginManager.parameters(jsName)["consoleAutoBoot"]) || 1;
		var bootPosition = PluginManager.parameters(jsName)["consolePosition"].split(",");
		if (Utils.isNwjs() && Utils.isOptionValid('test') && isAutoBoot) {
			var gui = require('nw.gui');
			var win = gui.Window.get();
			win.showDevTools().moveTo(Number(bootPosition[0]) || 100, Number(bootPosition[1]) || 50);
			win.focus();
		}
	}
})(this);
