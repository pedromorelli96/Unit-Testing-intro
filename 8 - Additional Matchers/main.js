// Unit Testing: Additional Matchers

// Test Suite
describe(`${User.name} Class`, () => {
    it("exists", () => {
        // assert
        expect(User).toBeDefined();
    });

    let model;

    beforeEach(() => {
        model = new User();
    });

    describe("additional matchers examples", () => {
        // toBeDefined(), toEqual()
        it("gets full name pieces", () => {
            // arrange
            const firstName = "Dylan";
            const middleName = "Christopher";
            const lastName = "Israel";

            // act
            model = new User({ firstName, middleName, lastName });

            // assert
            expect(model.fullNamePieces).toEqual([
                firstName,
                middleName,
                lastName,
            ]);
        });

        it("has my first name", () => {
            // arrange
            const firstName = "Dylan";
            const lastName = "Israel";

            // act
            model = new User({ firstName, lastName });

            // assert
            expect(model.fullName).toMatch(/Dylan/);
        });
    });
});
