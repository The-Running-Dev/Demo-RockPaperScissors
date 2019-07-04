import * as tslib_1 from "tslib";
import { Entity } from './entity.model';
import { Rock } from './rock.model';
import { Scissors } from './scissors.model';
var Paper = /** @class */ (function (_super) {
    tslib_1.__extends(Paper, _super);
    function Paper() {
        return _super.call(this, typeof (Rock), typeof (Scissors)) || this;
    }
    Paper.prototype.Battle = function (opponent) {
    };
    return Paper;
}(Entity));
export { Paper };
//# sourceMappingURL=paper.model.js.map