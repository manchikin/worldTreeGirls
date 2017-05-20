// Sp,Ap,ステータスウィンドウなど、Map系のすべての画面で共通するものを表示する


    var _initialize = Scene_Map.prototype.initialize;

    Scene_Map.prototype.initialize = function () {
        _initialize.call(this);
        this.statusWindowConf = {x: 120, y: 450, width: 600, height: Graphics.boxHeight - 450};
    }

    var _createDisplayObjects = Scene_Map.prototype.createDisplayObjects;

    Scene_Map.prototype.createDisplayObjects = function () {
        _createDisplayObjects.call(this);
        this.createStatusWindow();
        this.drawMapStatus();
    }

    Scene_Map.prototype.createStatusWindow = function () {
        this._statusWindow = new Window_MapStatus(this.statusWindowConf.x, this.statusWindowConf.y, this.statusWindowConf.width, this.statusWindowConf.height);
        this.addChild(this._statusWindow);
    }

    Scene_Map.prototype.drawMapStatus = function () {
        this.drawActorName();
        this.drawActorHp();
    }

    Scene_Map.prototype.drawActorName = function () {
        this._statusWindow.drawActorName($gameParty.members()[0], 0,   0, 200);
        this._statusWindow.drawActorName($gameParty.members()[1], 300, 0, 200);
        this._statusWindow.drawActorName($gameParty.members()[2], 0,   72, 200);
        this._statusWindow.drawActorName($gameParty.members()[3], 300, 72, 200);
    }


    Scene_Map.prototype.drawActorHp = function () {
        this._statusWindow.drawActorHp($gameParty.members()[0], 0,   24, 200);
        this._statusWindow.drawActorHp($gameParty.members()[1], 300, 24, 200);
        this._statusWindow.drawActorHp($gameParty.members()[2], 0,   96, 200);
        this._statusWindow.drawActorHp($gameParty.members()[3], 300, 96, 200);
    }