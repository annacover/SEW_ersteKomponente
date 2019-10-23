app.component("einzelreihungKomponente", {
    templateUrl: "components/einzelreihung-komponente.html",
    controller: "EinzelreihungsController",
    bindings: {
        sportlerInnenName: "@",
        plaetze: "<"

    }
});

app.controller("EinzelreihungsController", function () {



    this.remove = () => {
        this.plaetze.splice(this.plaetze.indexOf(this.platz), 1)
    }
    this.add = () => {
        this.plaetze.push(this.platz);
        this.plaetze.sort();
        delete this.platz;
    }
});

