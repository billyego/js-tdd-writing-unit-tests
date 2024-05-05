import {pointsForWord} from "../utils"

describe("PointsForWord",()=>{
    it("calculates the total points for a word (1 point per vowel,2 per constant)",()=>{
        const word="test";
        const points = pointsForWord(word);
        expect(points).toBe(7);
    })
})