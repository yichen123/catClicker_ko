// Data
catSource = [{
    name: 'Jack',
    nickNames: ['Jacky'],
    imgSrc: 'img/cat1.jpg',
    click: 0
}, {
    name: 'Ross',
    nickNames: ['Rossy'],
    imgSrc: 'img/cat2.jpg',
    click: 0
}, {
    name: 'Peter',
    nickNames: ['Pet'],
    imgSrc: 'img/cat3.jpg',
    click: 0
}, {
    name: 'Ben',
    nickNames: ['B'],
    imgSrc: 'img/cat4.jpg',
    click: 0
}, {
    name: 'Halo',
    nickNames: ['Boom'],
    imgSrc: 'img/cat5.jpg',
    click: 0
}];

// Class
var Cat = function(data) {
    this.catName = ko.observable(data.name);
    this.nickNames = ko.observableArray(data.nickNames);
    this.imgSrc = ko.observable(data.imgSrc);
    this.counter = ko.observable(data.click);
};

// View Model
function AppViewModel() {
    var self = this;
    this.catList = ko.observableArray([]);
    catSource.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });
    this.currentCat = ko.observable(self.catList()[0]);
    // operations
    this.changeCurrentCat = function(cat) {
        self.currentCat(cat);
    }
    this.incrementCounter = function() {
        self.currentCat().counter(self.currentCat().counter() + 1);
    };
}


ko.applyBindings(new AppViewModel());
