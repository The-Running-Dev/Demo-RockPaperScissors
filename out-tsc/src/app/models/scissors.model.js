import * as tslib_1 from "tslib";
import { Entity } from './entity.model';
import { Paper } from './paper.model';
import { Rock } from './rock.model';
var Scissors = /** @class */ (function (_super) {
    tslib_1.__extends(Scissors, _super);
    function Scissors() {
        return _super.call(this, typeof (Paper), typeof (Rock)) || this;
    }
    Scissors.prototype.Battle = function (opponent) {
    };
    return Scissors;
}(Entity));
export { Scissors };
//# sourceMappingURL=scissors.model.js.map