// Unit Testing: Skipping and Focusing Introduction

// Test Suite
describe(`${User.name} Class`, () => {
    let model;

    beforeEach(() => {
        model = new User();
    });

    describe("default values", () => {
        fit("first name defaults to empty", () => {
            // assert
            expect(model.firstName).toBe("");
        });

        it("last name defaults to empty", () => {
            // assert
            expect(model.lastName).toBe("");
        });

        it("middle name defaults to empty", () => {
            // assert
            expect(model.middleName).toBe("");
        });
    });

    xdescribe("full name", () => {
        beforeEach(() => {
            model = new User({ firstName: "Dylan", lastName: "Israel" });
        });

        it("middle initial when middleName is defined with first and last", () => {
            // arrange
            model.middleName = "Christopher";

            // act
            const result = model.fullName;

            // assert
            expect(result).toBe(
                `${model.firstName} ${model.middleName[0]}. ${model.lastName}123`
            );
        });

        it("when no middle name return just first and last", () => {
            // arrange
            model.middleName = "";

            // act
            const result = model.fullName;

            // assert
            expect(result).toBe(`${model.firstName} ${model.lastName}`);
        });
    });
});
