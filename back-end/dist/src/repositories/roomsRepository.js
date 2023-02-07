var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
export function getRooms() {
    return __awaiter(this, void 0, void 0, function () {
        var rooms2, rooms, roomsScheduleSegunda, roomsScheduleTerca, roomsScheduleQuarta, roomsScheduleQuinta, roomsScheduleSexta, roomsSegunda, responseSegunda, roomsTerca, responseTerca, roomsQuarta, responseQuarta, roomsQuinta, responseQuinta, roomsSexta, responseSexta, responseModel;
        var _a, _b, _c, _d, _e;
        var _this = this;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, prisma.rooms.findMany({
                        include: {
                            tags: {
                                include: {
                                    tag: true
                                }
                            }
                        }
                    })];
                case 1:
                    rooms2 = _f.sent();
                    rooms = rooms2.map(function (room) {
                        var tags = room.tags.map(function (tag) { return tag.tag.name; });
                        return __assign(__assign({}, room), { tags: tags });
                    });
                    roomsScheduleSegunda = rooms.map(function (room) { return __awaiter(_this, void 0, void 0, function () {
                        var roomSchedule;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getStudentsOfSchedulesRoom("SEGUNDA", room.blockId, room.number)];
                                case 1:
                                    roomSchedule = _a.sent();
                                    return [2 /*return*/, __assign(__assign({}, room), { students: roomSchedule })];
                            }
                        });
                    }); });
                    roomsScheduleTerca = rooms.map(function (room) { return __awaiter(_this, void 0, void 0, function () {
                        var roomSchedule;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getStudentsOfSchedulesRoom("TERÇA", room.blockId, room.number)];
                                case 1:
                                    roomSchedule = _a.sent();
                                    return [2 /*return*/, __assign(__assign({}, room), { students: roomSchedule })];
                            }
                        });
                    }); });
                    roomsScheduleQuarta = rooms.map(function (room) { return __awaiter(_this, void 0, void 0, function () {
                        var roomSchedule;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getStudentsOfSchedulesRoom("QUARTA", room.blockId, room.number)];
                                case 1:
                                    roomSchedule = _a.sent();
                                    return [2 /*return*/, __assign(__assign({}, room), { students: roomSchedule })];
                            }
                        });
                    }); });
                    roomsScheduleQuinta = rooms.map(function (room) { return __awaiter(_this, void 0, void 0, function () {
                        var roomSchedule;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getStudentsOfSchedulesRoom("QUINTA", room.blockId, room.number)];
                                case 1:
                                    roomSchedule = _a.sent();
                                    return [2 /*return*/, __assign(__assign({}, room), { students: roomSchedule })];
                            }
                        });
                    }); });
                    roomsScheduleSexta = rooms.map(function (room) { return __awaiter(_this, void 0, void 0, function () {
                        var roomSchedule;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getStudentsOfSchedulesRoom("SEXTA", room.blockId, room.number)];
                                case 1:
                                    roomSchedule = _a.sent();
                                    return [2 /*return*/, __assign(__assign({}, room), { students: roomSchedule })];
                            }
                        });
                    }); });
                    _a = {};
                    return [4 /*yield*/, Promise.all(roomsScheduleSegunda)];
                case 2:
                    roomsSegunda = (_a.rooms = _f.sent(), _a);
                    responseSegunda = formatResponseBlock(roomsSegunda);
                    _b = {};
                    return [4 /*yield*/, Promise.all(roomsScheduleTerca)];
                case 3:
                    roomsTerca = (_b.rooms = _f.sent(), _b);
                    responseTerca = formatResponseBlock(roomsTerca);
                    _c = {};
                    return [4 /*yield*/, Promise.all(roomsScheduleQuarta)];
                case 4:
                    roomsQuarta = (_c.rooms = _f.sent(), _c);
                    responseQuarta = formatResponseBlock(roomsQuarta);
                    _d = {};
                    return [4 /*yield*/, Promise.all(roomsScheduleQuinta)];
                case 5:
                    roomsQuinta = (_d.rooms = _f.sent(), _d);
                    responseQuinta = formatResponseBlock(roomsQuinta);
                    _e = {};
                    return [4 /*yield*/, Promise.all(roomsScheduleSexta)];
                case 6:
                    roomsSexta = (_e.rooms = _f.sent(), _e);
                    responseSexta = formatResponseBlock(roomsSexta);
                    responseModel = [
                        { id: 1, day: "Segunda", rooms: responseSegunda },
                        { id: 2, day: "Terça", rooms: responseTerca },
                        { id: 3, day: "Quarta", rooms: responseQuarta },
                        { id: 4, day: "Quinta", rooms: responseQuinta },
                        { id: 5, day: "Sexta", rooms: responseSexta },
                    ];
                    return [2 /*return*/, responseModel];
            }
        });
    });
}
export function getStudentsOfSchedulesRoom(day, block, room) {
    return __awaiter(this, void 0, void 0, function () {
        var teste, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.classes.findMany({
                        where: {
                            room: {
                                blockId: block,
                                number: room
                            }
                        },
                        select: {
                            students: true,
                            scheduleId: true,
                            room: {
                                select: {
                                    tags: true
                                }
                            }
                        }
                    })];
                case 1:
                    teste = _a.sent();
                    response = factoryResponse(day, teste);
                    return [2 /*return*/, response];
            }
        });
    });
}
function factoryResponse(day, data) {
    if (day === "SEGUNDA") {
        var m1 = data.find(function (item) { return item.scheduleId === 1; });
        var m2 = data.find(function (item) { return item.scheduleId === 2; });
        var t1 = data.find(function (item) { return item.scheduleId === 3; });
        var t2 = data.find(function (item) { return item.scheduleId === 4; });
        var n1 = data.find(function (item) { return item.scheduleId === 5; });
        var n2 = data.find(function (item) { return item.scheduleId === 6; });
        var a = m1 ? m1.students : 0;
        var b = m2 ? m2.students : 0;
        var c = t1 ? t1.students : 0;
        var d = t2 ? t2.students : 0;
        var e = n1 ? n1.students : 0;
        var f = n2 ? n2.students : 0;
        return [a, b, c, d, e, f];
    }
    if (day === "TERÇA") {
        var m1 = data.find(function (item) { return item.scheduleId === 7; });
        var m2 = data.find(function (item) { return item.scheduleId === 8; });
        var t1 = data.find(function (item) { return item.scheduleId === 9; });
        var t2 = data.find(function (item) { return item.scheduleId === 10; });
        var n1 = data.find(function (item) { return item.scheduleId === 11; });
        var n2 = data.find(function (item) { return item.scheduleId === 12; });
        var a = m1 ? m1.students : 0;
        var b = m2 ? m2.students : 0;
        var c = t1 ? t1.students : 0;
        var d = t2 ? t2.students : 0;
        var e = n1 ? n1.students : 0;
        var f = n2 ? n2.students : 0;
        return [a, b, c, d, e, f];
    }
    if (day === "QUARTA") {
        var m1 = data.find(function (item) { return item.scheduleId === 13; });
        var m2 = data.find(function (item) { return item.scheduleId === 14; });
        var t1 = data.find(function (item) { return item.scheduleId === 15; });
        var t2 = data.find(function (item) { return item.scheduleId === 16; });
        var n1 = data.find(function (item) { return item.scheduleId === 17; });
        var n2 = data.find(function (item) { return item.scheduleId === 18; });
        var a = m1 ? m1.students : 0;
        var b = m2 ? m2.students : 0;
        var c = t1 ? t1.students : 0;
        var d = t2 ? t2.students : 0;
        var e = n1 ? n1.students : 0;
        var f = n2 ? n2.students : 0;
        return [a, b, c, d, e, f];
    }
    if (day === "QUINTA") {
        var m1 = data.find(function (item) { return item.scheduleId === 19; });
        var m2 = data.find(function (item) { return item.scheduleId === 20; });
        var t1 = data.find(function (item) { return item.scheduleId === 21; });
        var t2 = data.find(function (item) { return item.scheduleId === 22; });
        var n1 = data.find(function (item) { return item.scheduleId === 23; });
        var n2 = data.find(function (item) { return item.scheduleId === 24; });
        var a = m1 ? m1.students : 0;
        var b = m2 ? m2.students : 0;
        var c = t1 ? t1.students : 0;
        var d = t2 ? t2.students : 0;
        var e = n1 ? n1.students : 0;
        var f = n2 ? n2.students : 0;
        return [a, b, c, d, e, f];
    }
    if (day === "SEXTA") {
        var m1 = data.find(function (item) { return item.scheduleId === 25; });
        var m2 = data.find(function (item) { return item.scheduleId === 26; });
        var t1 = data.find(function (item) { return item.scheduleId === 27; });
        var t2 = data.find(function (item) { return item.scheduleId === 28; });
        var n1 = data.find(function (item) { return item.scheduleId === 29; });
        var n2 = data.find(function (item) { return item.scheduleId === 30; });
        var a = m1 ? m1.students : 0;
        var b = m2 ? m2.students : 0;
        var c = t1 ? t1.students : 0;
        var d = t2 ? t2.students : 0;
        var e = n1 ? n1.students : 0;
        var f = n2 ? n2.students : 0;
        return [a, b, c, d, e, f];
    }
}
function formatResponseBlock(obj) {
    var ra = obj.rooms.filter(function (item) { return item.blockId === 1; });
    var rc = obj.rooms.filter(function (item) { return item.blockId === 2; });
    var re = obj.rooms.filter(function (item) { return item.blockId === 3; });
    var rb = obj.rooms.filter(function (item) { return item.blockId === 4; });
    //TODO:
    // remover sala RC 107
    rc = rc.filter(function (item) { return item.number !== "107"; });
    var response = [
        { block: "R.A", rooms: ra },
        { block: "R.C", rooms: rc },
        { block: "R.E", rooms: re },
        { block: "R.B", rooms: rb }
    ];
    return response;
}
function formatRoomBlock(obj) {
    return obj.map(function (item) {
        return {
            id: item.id,
            name: "".concat(item.block.name, " - ").concat(item.number),
            blockId: item.blockId,
            capacity: item.capacity,
            number: item.number
        };
    });
}
export function getRoomsBlocks() {
    return __awaiter(this, void 0, void 0, function () {
        var rooms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.rooms.findMany({
                        include: {
                            block: true
                        }
                    })];
                case 1:
                    rooms = _a.sent();
                    return [2 /*return*/, formatRoomBlock(rooms)];
            }
        });
    });
}
export function getRoomById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var room;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.rooms.findUnique({
                        where: {
                            id: id
                        },
                        include: {
                            block: true
                        }
                    })];
                case 1:
                    room = _a.sent();
                    return [2 /*return*/, formatRoomBlock([room])[0]];
            }
        });
    });
}
export function createRoom(data) {
    return __awaiter(this, void 0, void 0, function () {
        var room;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.rooms.create({
                        data: {
                            blockId: data.blockId,
                            capacity: data.capacity,
                            number: data.number
                        }
                    })];
                case 1:
                    room = _a.sent();
                    return [2 /*return*/, room];
            }
        });
    });
}
export function updateRoom(id, data) {
    return __awaiter(this, void 0, void 0, function () {
        var room;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.rooms.update({
                        where: {
                            id: id
                        },
                        data: {
                            blockId: data.blockId,
                            capacity: data.capacity,
                            number: data.number
                        }
                    })];
                case 1:
                    room = _a.sent();
                    return [2 /*return*/, room];
            }
        });
    });
}
export function deleteRoom(id) {
    return __awaiter(this, void 0, void 0, function () {
        var room;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.rooms["delete"]({
                        where: {
                            id: id
                        }
                    })];
                case 1:
                    room = _a.sent();
                    return [2 /*return*/, room];
            }
        });
    });
}
export function addTag(tags) {
    return __awaiter(this, void 0, void 0, function () {
        var room;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.rooms.findFirst({
                        where: {
                            number: tags.number,
                            blockId: tags.blockId
                        }
                    })];
                case 1:
                    room = _a.sent();
                    if (room) {
                        tags.tagsAdd.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            var thisTag;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, prisma.tags.findFirst({
                                            where: {
                                                name: item
                                            }
                                        })];
                                    case 1:
                                        thisTag = _a.sent();
                                        if (!thisTag) return [3 /*break*/, 3];
                                        return [4 /*yield*/, prisma.roomsTags.create({
                                                data: {
                                                    roomId: room.id,
                                                    tagId: thisTag.id
                                                }
                                            })];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        tags.tagsRemove.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            var thisTag;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, prisma.tags.findFirst({
                                            where: {
                                                name: item
                                            }
                                        })];
                                    case 1:
                                        thisTag = _a.sent();
                                        if (!thisTag) return [3 /*break*/, 3];
                                        return [4 /*yield*/, prisma.roomsTags.deleteMany({
                                                where: {
                                                    roomId: room.id,
                                                    tagId: thisTag.id
                                                }
                                            })];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
