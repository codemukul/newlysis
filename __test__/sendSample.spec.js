import { sendSample } from "../src/client/js/requests";

fetch = jest.fn();
describe("Testing the Sample data posting to server for API-request functionality", () => {  
    test("Testing the sendSample() function", () => {
        const Sample = {
            type: 'url',
            value: 'https://www.newssample.com/roleofAIin_Tech_industry.html',
        };
          expect(sendSample(Sample, 'http://localhost:8081/send_sample')).toBeDefined();
    });
});