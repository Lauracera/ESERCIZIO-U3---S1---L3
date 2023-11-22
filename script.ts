abstract class Tasse {
  redditoLordo: number;

  constructor(_redditoLordo: number) {
    this.redditoLordo = _redditoLordo;
  }
  abstract getUtileTasse(): any;
  abstract getTasseIrpef(): any;
  abstract getTasseInps(): any;
}

class Lavoratore extends Tasse {
  constructor(_redditoLordo: number) {
    super(_redditoLordo);
  }
  getUtileTasse(): number {
    let result = this.redditoLordo * 0.22;
    let result2 = this.redditoLordo - result;
    return result2;
  }

  getTasseIrpef(): number {
    return this.redditoLordo * 0.5;
  }

  getTasseInps(): number {
    return this.redditoLordo * 0.25;
  }

  getTasseNetto(): number {
    return this.getUtileTasse() - this.getTasseIrpef() - this.getTasseInps();
  }
}

class Professionista extends Lavoratore {
  constructor(_redditoLordo: number) {
    super(_redditoLordo);
  }
  getTasseIrpef() {
    let resultIrpef = this.getUtileTasse() * 0.05;

    let resultIrpef2 = this.getUtileTasse() - resultIrpef;
    console.log(resultIrpef2);
    console.log(resultIrpef);
    return resultIrpef2;
  }

  getTasseInps() {
    let resultInps = this.getUtileTasse() * 0.25;
    let resultInps2 = this.getUtileTasse() - resultInps;
    return resultInps2;
  }
}

let newProfessionista = new Professionista(0);

console.log("Utile tasse professionista: " + newProfessionista.getUtileTasse());

class Artigiano extends Lavoratore {
  getTasseIrpef() {
    let resultIrpef = this.getUtileTasse() * 0.15;
    let resultIrpef2 = this.getUtileTasse() - resultIrpef;
    return resultIrpef2;
  }

  getTasseInps() {
    let resultInps = this.getUtileTasse() * 0.15;
    let resultInps2 = this.getUtileTasse() - resultInps;
    return resultInps2;
  }
}

class Commerciante extends Lavoratore {
  getTasseIrpef() {
    let resultIrpef = this.getUtileTasse() * 0.15;
    let resultIrpef2 = this.getUtileTasse() - resultIrpef;
    return resultIrpef2;
  }

  getTasseInps() {
    let resultInps = this.getUtileTasse() * 0.35;
    let resultInps2 = this.getUtileTasse() - resultInps;
    return resultInps2;
  }
}
