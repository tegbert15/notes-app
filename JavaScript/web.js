(function(){
    var app = angular.module('web', []);

    app.controller('WebController', function(){

       this.notes = [
           {
               name: "Swag",
               body: 'Tobin',
               author: 'tobinegbert@gmail.com'
           }
       ];
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