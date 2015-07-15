function AppViewModel() {
    // Data
    this.catName = ko.observable("Jack");
    this.nickName = ko.observable("Light");
    this.imgSrc = ko.observable("img/cat1.jpg");
    this.counter = ko.observable(0);

    // operations
    this.incrementCounter = function() {
        this.counter(this.counter() + 1);
    };
}


ko.applyBindings(new AppViewModel());
