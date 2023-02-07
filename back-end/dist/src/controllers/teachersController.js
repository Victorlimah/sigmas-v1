var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as service from "./../services/teachersService.js";
export function getTeachers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var teachers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service.getTeachers()];
                case 1:
                    teachers = _a.sent();
                    res.send(teachers);
                    return [2 /*return*/];
            }
        });
    });
}
export function getTeacherById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, teacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = Number(req.params.id);
                    return [4 /*yield*/, service.getTeacherById(id)];
                case 1:
                    teacher = _a.sent();
                    res.send(teacher);
                    return [2 /*return*/];
            }
        });
    });
}
export function createTeacher(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var teacher, newTeacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    teacher = req.body;
                    return [4 /*yield*/, service.createTeacher(teacher)];
                case 1:
                    newTeacher = _a.sent();
                    res.send(newTeacher);
                    return [2 /*return*/];
            }
        });
    });
}
export function updateTeacher(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, teacher, updatedTeacher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = Number(req.params.id);
                    teacher = req.body;
                    return [4 /*yield*/, service.updateTeacher(id, teacher)];
                case 1:
                    updatedTeacher = _a.sent();
                    res.send(updatedTeacher);
                    return [2 /*return*/];
            }
        });
    });
}
export function deleteTeacher(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = Number(req.params.id);
                    return [4 /*yield*/, service.deleteTeacher(id)];
                case 1:
                    _a.sent();
                    res.send();
                    return [2 /*return*/];
            }
        });
    });
}
