/*
 * String calculator kata
 * http://osherove.com/tdd-kata-1/
 *
 * */

describe("Karma", function () {
    it("should work", function () {
        expect(true).toBe(true);
    });
});

describe("StringCalculator", function () {
    it("should add exist", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("")).toBe(0);
    });
});

describe("StringCalculator", function () {
    it("should add exist", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("")).toBe(0);
    });

    it("should add 1", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("1")).toBe(1);
    });

    it("should add 2", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("2")).toBe(2);
    });

    it("should add 1000", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("1000")).toBe(1000);
    });

    /*it("should add 1", function(){
     var stringCalculator = new StringCalculator();
     expect(stringCalculator.add("1,2")).toBe(3);
     });*/

    it("two empty arguments", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add(",")).toBe(0);
    });

    it("two zero arguments", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("0,0")).toBe(0);
    });

    it("first 0, second argument 1", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add(",1")).toBe(1);
    });

    it("first 1, second argument 1", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("1,1")).toBe(2);
    });

    it("first 1, second argument 1, third 1", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("1,1, 1")).toBe(3);
    });

    it("more complex example", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("333,333, 333")).toBe(999);
    });

    it("less complex example", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("0,-1, 1")).toBe(0);
    });

    it("big amount of numbers", function () {
        var stringCalculator = new StringCalculator();
        expect(stringCalculator.add("1,2,3, 4, 5, 6, 7, 8, 9 ,10")).toBe(55);
    });

});