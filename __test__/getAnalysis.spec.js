import { getAnalysis } from "../src/client/js/requests";

fetch = jest.fn();
describe("Testing the get Analysis-data from API functionality", () => {  
    test("Testing the getAnalysis() function", () => {
          expect(getAnalysis()).toBeDefined();
    });
});