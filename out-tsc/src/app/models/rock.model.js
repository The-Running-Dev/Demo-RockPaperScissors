import * as tslib_1 from "tslib";
import { Entity } from './entity.model';
import { Paper } from './paper.model';
import { Scissors } from './scissors.model';
var Rock = /** @class */ (function (_super) {
    tslib_1.__extends(Rock, _super);
    function Rock() {
        return _super.call(this, typeof (Scissors), typeof (Paper)) || this;
    }
    Rock.prototype.Battle = function (opponent) {
    };
    return Rock;
}(Entity));
export { Rock };
//# sourceMappingURL=rock.model.js.map