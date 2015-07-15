//data
var Cat = function(data){
    this.catName = ko.observable(data.name);
    this.nickNames = ko.observableArray(data.nickNames);
    this.imgSrc = ko.observable(data.imgSrc);
    this.counter = ko.observable(data.click);
};

function AppViewModel() {
    var self = this
    // data
    this.currentCat = ko.observable(new Cat({
        name: 'Jack',
        nickNames : ['Light', 'Fast', 'Storm'],
        imgSrc : 'img/cat1.jpg',
        click: 0
    }));
    // operations
    this.incrementCounter = function() {
        self.currentCat().counter(self.currentCat().counter() + 1);
    };
}


ko.applyBindings(new AppViewModel());
