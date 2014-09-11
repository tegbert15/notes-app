/**
 * Created by tobin on 8/22/14.
 */
(function(){
    var app = angular.module('engineering', []);

    app.controller('WebController', function(){

        this.notes = [];
    });

    app.controller('NoteController', function() {
        // form model
        this.note = {};

        this.addNotes = function(notes) {
            console.log(notes);
            notes.push(this.note);

            this.note = {};
        };
    });

})();