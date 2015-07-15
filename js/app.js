//data
var Cat = function(){
    this.catName = ko.observable('Jack');
    this.nickNames = ko.observableArray([
        'Light',
        'Fast',
        'Storm'
    ]);
    this.imgSrc = ko.observable('img/cat1.jpg');
    this.counter = ko.observable(0);
};

function AppViewModel() {
    var self = this
    // data
    this.currentCat = ko.observable(new Cat());
    // operations
    this.incrementCounter = function() {
        self.currentCat().counter(self.currentCat().counter() + 1);
    };
}


ko.applyBindings(new AppViewModel());
