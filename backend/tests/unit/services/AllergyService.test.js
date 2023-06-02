const { getAllAllergies, createNewAllergy, allergyDetailById, deleteAllergy } = require("../../../services/AllergyService");
const { error } = require("../../../helpers/constants");
const { getAllergies, createAllergy, getAllergyById, deleteAllergyById } = require("../../../models/AllergyModel");

jest.mock("../../../models/AllergyModel");

describe("Allergy Service", () => {
    afterEach(() => {
        jest.clearAllMocks()
    });

    describe("tests getAllAllergies", () => {
        it("should return all allergies", async () => {
            const mockedAllergies = [{ allergy: "Allergy1", id: 1 }, { allergy: "Allergy2", id: 2 }];
            getAllergies.mockResolvedValue(mockedAllergies);

            // Call the getAllAllergies function
            const result = await getAllAllergies();

            expect(result).toEqual(mockedAllergies);
            expect(getAllergies).toHaveBeenCalledTimes(1);
        });

        it("should throw an error if getAllergies throws an error", async () => {
            const mockedError = new Error("Failed to get allergies");
            getAllergies.mockRejectedValue(mockedError);

            //expect to throw an error
            await expect(getAllAllergies()).rejects.toThrow(mockedError);
            expect(getAllergies).toHaveBeenCalledTimes(1);
        })
    });

    describe("tests createNewAllergy", () => {
        it("should create new allergy and return newly created allergy", async () => {
            const payload = { allergy: "New Allergy" };
            const createdAllergy = { allergy: "Allergy1", id: 1 };
            createAllergy.mockResolvedValue(createdAllergy);

            const result = await createNewAllergy(payload);

            expect(result).toEqual(createdAllergy);
            expect(createAllergy).toHaveBeenCalledTimes(1);
            expect(createAllergy).toHaveBeenCalledWith(payload);
        });

        it("should throw and error if createAllergy throws an error", async () => {
            const payload = { allergy: "New Allergy" };
            const mockedError = new Error("Failed to create allergy");
            createAllergy.mockRejectedValue(mockedError);

            await expect(createNewAllergy(payload)).rejects.toThrow(mockedError);
            expect(createAllergy).toHaveBeenCalledTimes(1);
            expect(createAllergy).toHaveBeenCalledWith(payload);
        })
    });

    describe("tests allergyDetailById", () => {
        it("should return allergy detail", async () => {
            const allergyId = 1;
            const mockedAllergyDetail = { allergy: "Allergy1", id: 1 }
            getAllergyById.mockResolvedValue(mockedAllergyDetail);

            const result = await allergyDetailById(allergyId);

            expect(result).toEqual(mockedAllergyDetail);
            expect(getAllergyById).toHaveBeenCalledTimes(1);
            expect(getAllergyById).toHaveBeenCalledWith(allergyId);
        });

        it("should throw an error if allergy is not found", async () => {
            const allergyId = 1;
            const mockedError = new Error(error.ALLERGY_NOT_FOUND);
            getAllergyById.mockResolvedValue(null);

            await expect(allergyDetailById(allergyId)).rejects.toThrow(mockedError);
            expect(getAllergyById).toHaveBeenCalledTimes(1);
            expect(getAllergyById).toHaveBeenCalledWith(allergyId);
        });

        it("should throw error if getAllergyById throws error", async () => {
            const allergyId = 1;
            const mockedError = new Error("Failed to retrieve alergy detail");
            getAllergyById.mockRejectedValue(mockedError);

            await expect(allergyDetailById(allergyId)).rejects.toThrow(mockedError);
            expect(getAllergyById).toHaveBeenCalledTimes(1);
            expect(getAllergyById).toHaveBeenCalledWith(allergyId);
        })
    });

    describe("test deleteAllergy", () => {
        it("should throw an error if allergy is not found", async () => {
            const allergyId = 1;
            const mockedError = new Error(error.ALLERGY_NOT_FOUND);
            getAllergyById.mockResolvedValue(null);

            await expect(deleteAllergy(allergyId)).rejects.toThrow(mockedError);
            expect(getAllergyById).toHaveBeenCalledTimes(1);
            expect(getAllergyById).toHaveBeenCalledWith(allergyId);
        });

        it("should throw error if getAllergyById throws error", async () => {
            const allergyId = 1;
            const mockedError = new Error("Failed to retrieve alergy detail");
            getAllergyById.mockRejectedValue(mockedError);

            await expect(deleteAllergy(allergyId)).rejects.toThrow(mockedError);
            expect(getAllergyById).toHaveBeenCalledTimes(1);
            expect(getAllergyById).toHaveBeenCalledWith(allergyId);
        });

        it("should return true if allergy is deleted", async () => {
            const allergyId = 1;
            getAllergyById.mockResolvedValue({ allergy: "Allergy1", id: 1 })
            deleteAllergyById.mockResolvedValue(true);

            const result = await deleteAllergy(allergyId);
            expect(result).toEqual(true);
            expect(getAllergyById).toHaveBeenCalledTimes(1);
            expect(getAllergyById).toHaveBeenCalledWith(allergyId);
        })
    });
});