app.component("einzelreihungKomponente", {
    templateUrl: "components/einzelreihung-komponente.html",
    controller: "EinzelreihungsController",
    bindings: {
        sportlerInnenName: "@",
        plaetze: "<",
        tnPlatziert: "&", //Ausgangs bindings werden mit & geschrieben
        tnUnplatziert: "&",


    }
});

app.controller("EinzelreihungsController", function () {
    /**
     * Der Teilnehmerin wurde ein Platz zugeordnet
     */
    this.remove = () => {
        this.tnPlatziert({p: this.platz});
    }
    /**
     * Die Platzierung der Teilenhmerin wurde entfernt
     */
    this.add = () => {
        this.tnUnplatziert({p: this.platz});
        delete this.platz;
    }
});

