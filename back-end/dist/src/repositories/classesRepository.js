var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
import prisma from "../database/db.js";
export function getClasses() {
    return __awaiter(this, void 0, void 0, function () {
        var classes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$queryRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    SELECT c.id, d.name, t.id as \"teacherId\", t.name as \"teacher\", c.students,\n    s.day, s.schedule, b.name as \"block\", r.number, r.id as \"roomId\" FROM\n    classes c JOIN teachers t ON c.\"teacherId\" = t.id\n    JOIN rooms r ON c.\"roomId\" = r.id\n    JOIN blocks b ON r.\"blockId\" = b.id\n    JOIN disciplines d ON c.\"disciplineId\" = d.id\n    JOIN schedules s ON c.\"scheduleId\" = s.id\n  "], ["\n    SELECT c.id, d.name, t.id as \"teacherId\", t.name as \"teacher\", c.students,\n    s.day, s.schedule, b.name as \"block\", r.number, r.id as \"roomId\" FROM\n    classes c JOIN teachers t ON c.\"teacherId\" = t.id\n    JOIN rooms r ON c.\"roomId\" = r.id\n    JOIN blocks b ON r.\"blockId\" = b.id\n    JOIN disciplines d ON c.\"disciplineId\" = d.id\n    JOIN schedules s ON c.\"scheduleId\" = s.id\n  "])))];
                case 1:
                    classes = _a.sent();
                    return [2 /*return*/, classes];
            }
        });
    });
}
export function getDistinctClasses() {
    return __awaiter(this, void 0, void 0, function () {
        var classes, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.$queryRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    SELECT DISTINCT c.id, d.name, t.id as \"teacherId\", t.name as \"teacher\", c.students,\n    s.day, s.schedule, b.name as \"block\", r.number, r.id as \"roomId\" FROM\n    classes c JOIN teachers t ON c.\"teacherId\" = t.id\n    JOIN rooms r ON c.\"roomId\" = r.id\n    JOIN blocks b ON r.\"blockId\" = b.id\n    JOIN disciplines d ON c.\"disciplineId\" = d.id\n    JOIN schedules s ON c.\"scheduleId\" = s.id\n  "], ["\n    SELECT DISTINCT c.id, d.name, t.id as \"teacherId\", t.name as \"teacher\", c.students,\n    s.day, s.schedule, b.name as \"block\", r.number, r.id as \"roomId\" FROM\n    classes c JOIN teachers t ON c.\"teacherId\" = t.id\n    JOIN rooms r ON c.\"roomId\" = r.id\n    JOIN blocks b ON r.\"blockId\" = b.id\n    JOIN disciplines d ON c.\"disciplineId\" = d.id\n    JOIN schedules s ON c.\"scheduleId\" = s.id\n  "])))];
                case 1:
                    classes = _a.sent();
                    response = [];
                    classes.forEach(function (c) {
                        var index = response.findIndex(function (r) {
                            return r.teacher === c.teacher &&
                                r.name === c.name &&
                                r.block === c.block &&
                                r.number === c.number;
                        });
                        if (index === -1) {
                            response.push(c);
                        }
                    });
                    return [2 /*return*/, response];
            }
        });
    });
}
export function getCreate() {
    return __awaiter(this, void 0, void 0, function () {
        var teachers, disciplines, rooms, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = Promise).all;
                    return [4 /*yield*/, prisma.teachers.findMany()];
                case 1:
                    _c = [
                        (teachers = _d.sent())
                    ];
                    return [4 /*yield*/, prisma.disciplines.findMany()];
                case 2:
                    _c = _c.concat([
                        (disciplines = _d.sent())
                    ]);
                    return [4 /*yield*/, prisma.$queryRaw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        SELECT rooms.id, blocks.name, rooms.number, rooms.capacity\n        FROM rooms\n        INNER JOIN blocks ON rooms.\"blockId\" = blocks.id\n    "], ["\n        SELECT rooms.id, blocks.name, rooms.number, rooms.capacity\n        FROM rooms\n        INNER JOIN blocks ON rooms.\"blockId\" = blocks.id\n    "])))];
                case 3:
                    _b.apply(_a, [_c.concat([
                            (rooms = _d.sent())
                        ])]);
                    return [2 /*return*/, { teachers: teachers, disciplines: disciplines, rooms: rooms }];
            }
        });
    });
}
export function getClassesByRoomId(blockId, number) {
    return __awaiter(this, void 0, void 0, function () {
        var dataClass, classes, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.rooms.findFirst({
                        where: {
                            blockId: blockId,
                            number: number
                        },
                        include: {
                            block: true,
                            tags: {
                                include: {
                                    tag: true
                                }
                            }
                        }
                    })];
                case 1:
                    dataClass = _a.sent();
                    if (!dataClass)
                        throw new Error("Room not found");
                    return [4 /*yield*/, prisma.classes.findMany({
                            where: {
                                roomId: dataClass.id
                            },
                            include: {
                                discipline: true,
                                teacher: true,
                                shedule: true
                            },
                            orderBy: {
                                shedule: {
                                    schedule: "asc"
                                }
                            }
                        })];
                case 2:
                    classes = _a.sent();
                    response = {
                        id: dataClass.id,
                        name: "".concat(dataClass.block.name, " - ").concat(dataClass.number),
                        capacity: dataClass.capacity,
                        tags: dataClass.tags.map(function (tag) { return tag.tag.name; }),
                        segunda: formatClassesByRooms(classes.filter(function (classItem) { return classItem.shedule.day === "SEGUNDA"; })),
                        terca: formatClassesByRooms(classes.filter(function (classItem) { return classItem.shedule.day === "TERÇA"; })),
                        quarta: formatClassesByRooms(classes.filter(function (classItem) { return classItem.shedule.day === "QUARTA"; })),
                        quinta: formatClassesByRooms(classes.filter(function (classItem) { return classItem.shedule.day === "QUINTA"; })),
                        sexta: formatClassesByRooms(classes.filter(function (classItem) { return classItem.shedule.day === "SEXTA"; }))
                    };
                    return [2 /*return*/, response];
            }
        });
    });
}
function formatClassesByRooms(classes) {
    var obj = classes.map(function (classItem) {
        return {
            id: classItem.id,
            code: classItem.discipline.code,
            name: classItem.discipline.name,
            teacher: classItem.teacher.name,
            students: classItem.students,
            schedule: classItem.shedule.schedule
        };
    });
    return obj;
}
export function getNew() {
    return __awaiter(this, void 0, void 0, function () {
        var teachers, disciplines, roomsResponse, rooms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.teachers.findMany()];
                case 1:
                    teachers = _a.sent();
                    return [4 /*yield*/, prisma.disciplines.findMany()];
                case 2:
                    disciplines = _a.sent();
                    return [4 /*yield*/, prisma.rooms.findMany({
                            include: {
                                block: true
                            }
                        })];
                case 3:
                    roomsResponse = _a.sent();
                    rooms = roomsResponse.map(function (room) {
                        return {
                            id: room.id,
                            name: "".concat(room.block.name, " - ").concat(room.number)
                        };
                    });
                    return [2 /*return*/, { teachers: teachers, disciplines: disciplines, rooms: rooms }];
            }
        });
    });
}
export function createClass(data) {
    return __awaiter(this, void 0, void 0, function () {
        var teacherId, disciplineId, roomId, students, schedules;
        var _this = this;
        return __generator(this, function (_a) {
            teacherId = data.teacherId, disciplineId = data.disciplineId, roomId = data.roomId, students = data.students, schedules = data.schedules;
            schedules.forEach(function (schedule, index) { return __awaiter(_this, void 0, void 0, function () {
                var id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prisma.classes.count()];
                        case 1:
                            id = _a.sent();
                            return [4 /*yield*/, prisma.classes.create({
                                    data: {
                                        id: id + 1 + index,
                                        students: students,
                                        teacherId: teacherId,
                                        disciplineId: disciplineId,
                                        roomId: roomId,
                                        scheduleId: schedule,
                                        schoolYear: "2022.1"
                                    }
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/, { message: "Class created" }];
        });
    });
}
export function updateClass(data) {
    return __awaiter(this, void 0, void 0, function () {
        var teacherId, teacher, roomId, students, number, block, id, t, teacherId_1, blockId, room, s;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    teacherId = data.teacherId, teacher = data.teacher, roomId = data.roomId, students = data.students, number = data.number, block = data.block, id = data.id;
                    return [4 /*yield*/, prisma.teachers.findFirst({
                            where: {
                                id: teacherId
                            }
                        })];
                case 1:
                    t = _a.sent();
                    if (!(t.name !== teacher)) return [3 /*break*/, 4];
                    return [4 /*yield*/, prisma.teachers.findFirst({
                            where: {
                                name: teacher
                            }
                        })];
                case 2:
                    teacherId_1 = _a.sent();
                    return [4 /*yield*/, prisma.classes.update({
                            where: {
                                id: id
                            },
                            data: {
                                teacherId: teacherId_1.id
                            }
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [4 /*yield*/, prisma.blocks.findFirst({
                        where: {
                            name: block
                        }
                    })];
                case 5:
                    blockId = _a.sent();
                    return [4 /*yield*/, prisma.rooms.findFirst({
                            where: {
                                number: number,
                                blockId: blockId.id
                            }
                        })];
                case 6:
                    room = _a.sent();
                    if (!(room.id !== roomId)) return [3 /*break*/, 8];
                    return [4 /*yield*/, prisma.classes.update({
                            where: {
                                id: id
                            },
                            data: {
                                roomId: room.id
                            }
                        })];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: return [4 /*yield*/, prisma.classes.findFirst({
                        where: {
                            id: id
                        },
                        select: {
                            students: true
                        }
                    })];
                case 9:
                    s = _a.sent();
                    if (!(s.students !== students)) return [3 /*break*/, 11];
                    return [4 /*yield*/, prisma.classes.update({
                            where: {
                                id: id
                            },
                            data: {
                                students: students
                            }
                        })];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [2 /*return*/, { message: "Class updated" }];
            }
        });
    });
}
var templateObject_1, templateObject_2, templateObject_3;
