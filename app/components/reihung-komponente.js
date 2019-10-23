app.component("reihungKomponente", {
    templateUrl: "components/reihung-komponente.html",
    controller: "ReihungsController",
    bindings: {
        titelElement: "@"
    }
});

app.controller("ReihungsController", function ($log) {
    $log.debug("ReihungsController");

        this.teilnehmer = ["Stella", "Laura", "Tiara","David", "Franzi", "Iris", "Lisa", "Marlene", "Claudia", "Tamara"];
        this.teilnehmer.sort(() => {return Math.random()-0.5})
        this.ausgegebeneTeilnehmer = [];
        for ($i = 0; $i < Math.random()*10+1; $i++){
            this.ausgegebeneTeilnehmer[$i] = this.teilnehmer[$i];
        }
    //this.$onInit = () =>
    //{
        this.plaetze = [];
        for (let i = 0; i < this.ausgegebeneTeilnehmer.length; i++) {
            this.plaetze.push(i + 1);
        }
    //}


});

