var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function () {
    function Tasse(_redditoLordo) {
        this.redditoLordo = _redditoLordo;
    }
    return Tasse;
}());
var Lavoratore = /** @class */ (function (_super) {
    __extends(Lavoratore, _super);
    function Lavoratore(_redditoLordo) {
        return _super.call(this, _redditoLordo) || this;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var result = this.redditoLordo * 0.22;
        var result2 = this.redditoLordo - result;
        return result2;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        return 0;
    };
    Lavoratore.prototype.getTasseInps = function () {
        return 0;
    };
    Lavoratore.prototype.getTasseNetto = function () {
        return this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps();
    };
    return Lavoratore;
}(Tasse));
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoLordo) {
        return _super.call(this, _redditoLordo) || this;
    }
    Professionista.prototype.getTasseIrpef = function () {
        var resultIrpef = this.getUtileTasse() * 0.05;
        var resultIrpef2 = this.getUtileTasse() - resultIrpef;
        console.log(resultIrpef2);
        console.log(resultIrpef);
        return resultIrpef2;
    };
    Professionista.prototype.getTasseInps = function () {
        var resultInps = this.getUtileTasse() * 0.25;
        var resultInps2 = this.getUtileTasse() - resultInps;
        return resultInps2;
    };
    return Professionista;
}(Lavoratore));
var newProfessionista = new Professionista(1000);
console.log(Professionista);
console.log(newProfessionista);
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artigiano.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * 0.15;
    };
    Artigiano.prototype.getTasseInps = function () {
        return this.getUtileTasse() * 0.15;
    };
    return Artigiano;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commerciante.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * 0.15;
    };
    Commerciante.prototype.getTasseInps = function () {
        return this.getUtileTasse() * 0.35;
    };
    return Commerciante;
}(Lavoratore));
