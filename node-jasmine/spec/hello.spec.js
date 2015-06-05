// hello.spec.js for Jasmine exercise
describe("Hello world", function () {
    //------------------------------- setup / teardown
    beforeEach(function () {
        //initialize test variables
        console.log("running test from Hello world suite...");
    });
    afterEach(function () {
        // reset stuff
        console.log("finishing test from the Hello world suite...");
    });
    //--------------------------------------tests
    it('says hello', function () {
        expect(helloWorld()).toEqual("Hello world!");
    });
    it('has proper case Hello', function () {
        expect(helloWorld()).toContain("Hello");
    });
    it('has lower case hello', function () {
        expect(helloWorld()).toContain("Hello");
    });
    it('does not say Howdy', function () {
        expect(helloWorld()).not.toContain("Howdy");
    });
    it('has an existence', function () {
        expect(helloWorld).toBeDefined();
    });
    it('has some value', function () {
        expect(helloWorld()).not.toBeNull();
    });
    it('matches h....o case insensitive', function () {
        expect(helloWorld()).toMatch(/h...o/i);
    });
    it('matches h.l{2}o case insensitive', function () {
        expect(helloWorld()).toMatch(/h.l{2}o/i);
    });

    describe("length tests", function () {
        it('has less than 100 characters', function () {
            expect(helloWorld().length <= 100).toBe(true);
        });
        it('has a non-zero length', function () {
            expect(helloWorld().length).toBeTruthy();
        });
        it('has no more than 100 characters', function () {
            expect(helloWorld().length > 100).not.toBe(true);
        });
        it('has no less than 10 characters', function () {
            expect(helloWorld().length).not.toBeLessThan(10);
        });
    });

    describe("closeness tests", function () {
        it('has a length within precision error of 12.4, 0', function () {
            expect(helloWorld().length).toBeCloseTo(12.4, 0);
        });
        it('has a length within precision error of 11.6, 0', function () {
            expect(helloWorld().length).toBeCloseTo(11.6, 0);
        });
        it('has a length within precision error of 8, -1', function () {
            expect(helloWorld().length).toBeCloseTo(8, -1);
        });
        it('has a length within precision error of 16, -1', function () {
            expect(helloWorld().length).toBeCloseTo(16, -1);
        });
    });

    xit('still working on this one', function () {
        expect(helloWorld()).toBe('really a good test result');
    });
});
