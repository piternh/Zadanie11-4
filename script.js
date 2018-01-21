function Phone(brand, price, color, screen) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.screen = screen;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", screen diameter is " + this.screen + "inch, color is " + this.color + " and the price is " + this.price + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver", 4.7);
var SamsungGalaxyS6 = new Phone("Samsung", 2000, "blue", 5);
var OnePlusOne = new Phone("OnePlus", 1800, "black", 5.5);
var HuaweiMate10pro = new Phone("Huawei", 2300, "mocca", 6);

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
HuaweiMate10pro.printInfo();
