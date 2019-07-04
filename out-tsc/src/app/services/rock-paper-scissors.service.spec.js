import { TestBed } from '@angular/core/testing';
import { RockPaperScissorsService } from './rock-paper-scissors.service';
describe('RockPaperScissorsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(RockPaperScissorsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=rock-paper-scissors.service.spec.js.map