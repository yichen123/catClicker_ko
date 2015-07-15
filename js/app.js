function AppViewModel() {
    // Data
    this.catName = ko.observable('Jack');
    this.nickNames = ko.observableArray([
        {nickName: 'Light'},
        {nickName: 'Fast'},
        {nickName: 'Storm'}
    ]);
    this.imgSrc = ko.observable('img/cat1.jpg');
    this.counter = ko.observable(0);

    // operations
    this.incrementCounter = function() {
        this.counter(this.counter() + 1);
    };
}


ko.applyBindings(new AppViewModel());
