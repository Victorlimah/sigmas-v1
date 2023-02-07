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
import { PrismaClient } from '@prisma/client';
var prisma = new PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var tags, rooms, blocks, periods, courses, classes, teachers, schedules, roomsTags, disciplines, teacher, block, period, course, tag, schedule, room, roomTag, discipline, classe;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Start seeding ...");
                    // delete data with reset ids
                    return [4 /*yield*/, prisma.$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE \"tags\" RESTART IDENTITY CASCADE;"], ["TRUNCATE TABLE \"tags\" RESTART IDENTITY CASCADE;"])))];
                case 1:
                    // delete data with reset ids
                    _a.sent();
                    return [4 /*yield*/, prisma.$executeRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["TRUNCATE TABLE \"rooms\" RESTART IDENTITY CASCADE;"], ["TRUNCATE TABLE \"rooms\" RESTART IDENTITY CASCADE;"])))];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.$executeRaw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["TRUNCATE TABLE \"blocks\" RESTART IDENTITY CASCADE;"], ["TRUNCATE TABLE \"blocks\" RESTART IDENTITY CASCADE;"])))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma.$executeRaw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["TRUNCATE TABLE \"period\" RESTART IDENTITY CASCADE;"], ["TRUNCATE TABLE \"period\" RESTART IDENTITY CASCADE;"])))];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prisma.$executeRaw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["TRUNCATE TABLE \"courses\" RESTART IDENTITY CASCADE;"], ["TRUNCATE TABLE \"courses\" RESTART IDENTITY CASCADE;"])))];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, prisma.$executeRaw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["TRUNCATE TABLE \"classes\" RESTART IDENTITY CASCADE;"], ["TRUNCATE TABLE \"classes\" RESTART IDENTITY CASCADE;"])))];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, prisma.$executeRaw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["TRUNCATE TABLE \"teachers\" RESTART IDENTITY CASCADE;"], ["TRUNCATE TABLE \"teachers\" RESTART IDENTITY CASCADE;"])))];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, prisma.$executeRaw(templateObject_8 || (templateObject_8 = __makeTemplateObject(["TRUNCATE TABLE \"schedules\" RESTART IDENTITY CASCADE;"], ["TRUNCATE TABLE \"schedules\" RESTART IDENTITY CASCADE;"])))];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, prisma.$executeRaw(templateObject_9 || (templateObject_9 = __makeTemplateObject(["TRUNCATE TABLE \"rooms_tags\" RESTART IDENTITY CASCADE;"], ["TRUNCATE TABLE \"rooms_tags\" RESTART IDENTITY CASCADE;"])))];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, prisma.$executeRaw(templateObject_10 || (templateObject_10 = __makeTemplateObject(["TRUNCATE TABLE \"disciplines\" RESTART IDENTITY CASCADE;"], ["TRUNCATE TABLE \"disciplines\" RESTART IDENTITY CASCADE;"])))];
                case 10:
                    _a.sent();
                    tags = tagsFactory();
                    rooms = roomsFactory();
                    blocks = blocksFactory();
                    periods = periodFactory();
                    courses = coursesFactory();
                    classes = classesFactory();
                    teachers = teachersFactory();
                    schedules = schedulesFactory();
                    roomsTags = roomsTagsFactory();
                    disciplines = disciplinesFactory();
                    return [4 /*yield*/, prisma.teachers.createMany({ data: teachers })];
                case 11:
                    teacher = _a.sent();
                    console.log("Created ".concat(teacher.count, " teachers"));
                    return [4 /*yield*/, prisma.blocks.createMany({ data: blocks })];
                case 12:
                    block = _a.sent();
                    console.log("Created ".concat(block.count, " blocks"));
                    return [4 /*yield*/, prisma.period.createMany({ data: periods })];
                case 13:
                    period = _a.sent();
                    console.log("Created ".concat(period.count, " periods"));
                    return [4 /*yield*/, prisma.courses.createMany({ data: courses })];
                case 14:
                    course = _a.sent();
                    console.log("Created ".concat(course.count, " courses"));
                    return [4 /*yield*/, prisma.tags.createMany({ data: tags })];
                case 15:
                    tag = _a.sent();
                    console.log("Created ".concat(tag.count, " tags"));
                    return [4 /*yield*/, prisma.schedule.createMany({ data: schedules })];
                case 16:
                    schedule = _a.sent();
                    console.log("Created ".concat(schedule.count, " schedules"));
                    return [4 /*yield*/, prisma.rooms.createMany({ data: rooms })];
                case 17:
                    room = _a.sent();
                    console.log("Created ".concat(room.count, " rooms"));
                    return [4 /*yield*/, prisma.roomsTags.createMany({ data: roomsTags })];
                case 18:
                    roomTag = _a.sent();
                    console.log("Created ".concat(roomTag.count, " roomsTags"));
                    return [4 /*yield*/, prisma.disciplines.createMany({ data: disciplines })];
                case 19:
                    discipline = _a.sent();
                    console.log("Created ".concat(discipline.count, " disciplines"));
                    return [4 /*yield*/, prisma.classes.createMany({ data: classes })];
                case 20:
                    classe = _a.sent();
                    console.log("Created ".concat(classe.count, " classes"));
                    return [2 /*return*/];
            }
        });
    });
}
main()["catch"](function (e) {
    console.error(e);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
function teachersFactory() {
    var nameTeachers = "A DEFINIR\n  AGNES LILIANE LIMA SOARES \n  ALESSA CRISTINA DE SOUZA\n  ALEXANDRA BARBOSA DA SILVA \n  ALEXANDRE SCAICO \n  ALMIR FERRAZ FILHO \n  ANA LIZ SOUTO OLIVEIRA \n  ANA MARIA MAGALHAES CORREIA \n  ANA PAVLA ALMEIDA DINIZ GURGEL \n  ANALIA CRISTINA MEIRA \n  ANDERSON ALVES DOS SANTOS \n  ANGELICA DE SOUZA GALDINO ACIOLY \n  ANTONIO ALBERTO PEREIRA \n  ANTONIO CHRISTIAN DE A MOURA \n  ANTONIO MANOEL ELIBIO JUNIOR \n  AUGUSTO CESAR MONTALVAO \n  AYLA DEBORA DANTAS DE S REBOUCAS \n  BALTAZAR MACAIBA DE SOUSA \n  CARLA SORAIA SOARES DE CASTRO \n  CARLOS ALBERTO GOMES DE ALMEIDA \n  CIBELLE DE FATIMA CASTRO DE ASSIS\n  CLAUDILENE GOMES DA COSTA \n  CRISTIANE FERNANDES DE SOUZA\n  DANIEL FAUSTINO LACERDA DE SOUZA \n  DANIEL SOUZA COELHO \n  ELAINE BERNINI \n  ELAINE FOLLY RAMOS \n  ELAINE REIS LAUREANO \n  EMMANUEL DE SOUSA F FALC\u00C3O \n  ESTEVAO MARTINS PALITOT \n  EVELISE MARCIA LOCATELLI DE SOUZA\n  EVIO EDUARDO CHAVES DE MELO\n  FABIO MURA \n  FLAVIA VELOSO COSTA SOUZA\n  FREDERICO GUSTAVO R FRANCA \n  GIVALDO DE LIMA \n  GRACIANA FERREIRA DIAS\n  GUSTAVO DE FIGUEIREDO BRITO \n  HELIO PIRES DE ALMEIDA \n  IVONALDO NERES LEITE \n  JAMILSON RAMOS CAMPOS \n  JOAO MARTINHO B DE MENDONCA \n  JOELSON NOGUEIRA DE CARVALHO \n  JOSE ADSON O GUEDES DA CUNHA \n  JOSE ELIAS DOS SANTOS FILHO \n  JOSE FABRICIO LIMA DE SOUZA \n  JOSE LAUDELINO DE MENEZES NETO \n  JULIANA ARAGAO DE ARAUJO \n  JUSSARA PATRICIA A ALVES PAIVA\n  KELLY EMANUELLY DE OLIVEIRA \n  KLEBER DA SILVA BARROS \n  KLEYBER DANTAS TORRES DE ARAUJO \n  LARA SANTOS DE AMORIM \n  LEANDRO LOPES PEREIRA \n  LEONARDO DE SANTOS NASCIMENTO \n  LINCOLN ELOI DE ARAUJO\n  LOUISE BRASILEIRO QUIRINO BRITO \n  LUCIANA MARIA RIBEIRO DE OLIVEIRA \n  LUIZ MAURICIO FRAGA MARTINS \n  MANOEL HELENO GOMES DA SILVA \n  MARCELLE B MARTINS DOS SANTOS \n  MARCO AURELIO PAZ TELLA \n  MARCOS ANDRE JOSE VALCACIO \n  MARCUS WILLIAMS A DE CARVALHO \n  MARIA DA PENHA C DE FIGUEIREDO GILL \n  MARIA DO ROSARIO SILVA LEITE \n  MARIA VALDENICE RESENDE SOARES \n  MARILZA PEREIRA VALENTINI \n  MARIVALDO WAGNER DE SOUSA SILVA \n  MILENA DUTRA DA SILVA\n  MYRLA LOPES TORRES \n  NADJACLEIA VILAR ALMEIDA \n  OSWALDO GIOVANNINI JUNIOR \n  PASQUELINE DANTAS SCAICO \n  PATRICIA SILVA NASCIMENTO BARROS \n  PAULO ROBERTO PALHANO SILVA \n  RAFAEL LUIS GALDINI RAIMUNDO\n  RAFAEL MARROCOS MAGALHAES \n  RAQUEL VIGOLVINO LOPES \n  RENATA MONTEIRO GARCIA \n  RENATO FONSECA L DA SILVA \n  ROBERTO MENEZES DA SILVA \n  RODRIGO REBOUCAS DE ALMEIDA \n  RUTH HENRIQUE DA SILVA \n  SAWANA ARAUJO LOPES DE SOUZA\n  SHEILA VALERIA PEREIRA DA SILVA\n  SURAMA SANTOS ISMAEL DA COSTA \n  THAISE KELLY DE LIMA COSTA\n  THEOFILO MOREIRA B DE OLIVEIRA \n  THEREZA PATRICIA PEREIRA PADILHA \n  VANESSA FARIAS DANTAS \n  WAGNER EMANOEL COSTA \n  WALQUIRIA NASCIMENTO DA SILVA \n  WASHINGTON FERREIRA SILVA \n  WILLIAME FARIAS RIBEIRO\n  ZELMA GLEBYA MACIEL QUIRINO \n  LEONARDO FIGUEIREDO DE MENESES";
    var teachers = nameTeachers.split("\n").map(function (name) {
        return { name: name };
    });
    return teachers;
}
function blocksFactory() {
    var blocks = [
        { name: "R.A" },
        { name: "R.C" },
        { name: "R.E" },
        { name: "R.B" },
    ];
    return blocks;
}
function periodFactory() {
    var periods = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 },
        { number: 8 },
        { number: 9 }
    ];
    return periods;
}
function coursesFactory() {
    var courses = [
        { name: "Bacharelado em Sistemas de Informação" },
        { name: "Licenciatura em Ciência da Computação" },
    ];
    return courses;
}
function tagsFactory() {
    var tags = [
        { name: "AR CONDICIONADO" },
        { name: "VENTILADOR" },
        { name: "PROJETOR" },
        { name: "SI" },
        { name: "LCC" },
        { name: "MATEMATICA" },
        { name: "ECOLOGIA" },
        { name: "ANTROPOLOGIA" },
        { name: "DESIGN" },
        { name: "DESIGN (PRANCHETAS)" },
        { name: "LAB MATERIAIS/ROBOTICA/ECOLOGIA" },
    ];
    return tags;
}
function schedulesFactory() {
    var schedules = [
        { schedule: "08:00 - 10:00", day: "SEGUNDA" },
        { schedule: "10:00 - 12:00", day: "SEGUNDA" },
        { schedule: "13:00 - 15:00", day: "SEGUNDA" },
        { schedule: "15:00 - 17:00", day: "SEGUNDA" },
        { schedule: "19:00 - 20:40", day: "SEGUNDA" },
        { schedule: "20:40 - 22:40", day: "SEGUNDA" },
        { schedule: "08:00 - 10:00", day: "TERÇA" },
        { schedule: "10:00 - 12:00", day: "TERÇA" },
        { schedule: "13:00 - 15:00", day: "TERÇA" },
        { schedule: "15:00 - 17:00", day: "TERÇA" },
        { schedule: "19:00 - 20:40", day: "TERÇA" },
        { schedule: "20:40 - 22:40", day: "TERÇA" },
        { schedule: "08:00 - 10:00", day: "QUARTA" },
        { schedule: "10:00 - 12:00", day: "QUARTA" },
        { schedule: "13:00 - 15:00", day: "QUARTA" },
        { schedule: "15:00 - 17:00", day: "QUARTA" },
        { schedule: "19:00 - 20:40", day: "QUARTA" },
        { schedule: "20:40 - 22:40", day: "QUARTA" },
        { schedule: "08:00 - 10:00", day: "QUINTA" },
        { schedule: "10:00 - 12:00", day: "QUINTA" },
        { schedule: "13:00 - 15:00", day: "QUINTA" },
        { schedule: "15:00 - 17:00", day: "QUINTA" },
        { schedule: "19:00 - 20:40", day: "QUINTA" },
        { schedule: "20:40 - 22:40", day: "QUINTA" },
        { schedule: "08:00 - 10:00", day: "SEXTA" },
        { schedule: "10:00 - 12:00", day: "SEXTA" },
        { schedule: "13:00 - 15:00", day: "SEXTA" },
        { schedule: "15:00 - 17:00", day: "SEXTA" },
        { schedule: "19:00 - 20:40", day: "SEXTA" },
        { schedule: "20:40 - 22:40", day: "SEXTA" },
    ];
    return schedules;
}
function roomsFactory() {
    var rooms = [
        { number: "101", capacity: 30, blockId: 1 },
        { number: "102", capacity: 40, blockId: 1 },
        { number: "103", capacity: 20, blockId: 1 },
        { number: "104", capacity: 45, blockId: 1 },
        { number: "105", capacity: 30, blockId: 1 },
        { number: "106", capacity: 35, blockId: 1 },
        { number: "201", capacity: 35, blockId: 1 },
        { number: "202", capacity: 40, blockId: 1 },
        { number: "203", capacity: 30, blockId: 1 },
        { number: "204", capacity: 40, blockId: 1 },
        { number: "205", capacity: 40, blockId: 1 },
        { number: "206", capacity: 40, blockId: 1 },
        { number: "103", capacity: 30, blockId: 2 },
        { number: "107", capacity: 30, blockId: 2 },
        { number: "201", capacity: 30, blockId: 2 },
        { number: "202", capacity: 30, blockId: 2 },
        { number: "203", capacity: 30, blockId: 2 },
        { number: "204", capacity: 30, blockId: 2 },
        { number: "206", capacity: 30, blockId: 2 },
        { number: "101", capacity: 45, blockId: 3 },
        { number: "102", capacity: 70, blockId: 3 },
        { number: "103", capacity: 70, blockId: 3 },
        { number: "104", capacity: 45, blockId: 3 },
        { number: "105", capacity: 70, blockId: 3 },
        { number: "106", capacity: 65, blockId: 3 },
        { number: "201", capacity: 65, blockId: 3 },
        { number: "202", capacity: 70, blockId: 3 },
        { number: "203", capacity: 70, blockId: 3 },
        { number: "204", capacity: 55, blockId: 3 },
        { number: "205", capacity: 70, blockId: 3 },
        { number: "206", capacity: 70, blockId: 3 },
        { number: "101", capacity: 30, blockId: 4 },
        { number: "102", capacity: 30, blockId: 4 },
    ];
    return rooms;
}
function roomsTagsFactory() {
    var response = [
        // R.A 101
        { tagId: 2, roomId: 0 },
        { tagId: 6, roomId: 0 },
        { tagId: 5, roomId: 0 },
        // R.A 102
        { tagId: 1, roomId: 1 },
        { tagId: 2, roomId: 1 },
        { tagId: 6, roomId: 1 },
        { tagId: 5, roomId: 1 },
        // R.A 103
        { tagId: 0, roomId: 2 },
        { tagId: 1, roomId: 2 },
        { tagId: 2, roomId: 2 },
        { tagId: 8, roomId: 2 },
        { tagId: 5, roomId: 2 },
        // R.A 104
        { tagId: 0, roomId: 3 },
        { tagId: 1, roomId: 3 },
        { tagId: 2, roomId: 3 },
        { tagId: 6, roomId: 3 },
        { tagId: 5, roomId: 3 },
        // R.A 105
        { tagId: 0, roomId: 4 },
        { tagId: 1, roomId: 4 },
        { tagId: 6, roomId: 4 },
        // R.A 106
        { tagId: 0, roomId: 5 },
        { tagId: 1, roomId: 5 },
        { tagId: 2, roomId: 5 },
        { tagId: 3, roomId: 5 },
        { tagId: 7, roomId: 5 },
        // R.A 201
        { tagId: 0, roomId: 6 },
        { tagId: 1, roomId: 6 },
        { tagId: 2, roomId: 6 },
        { tagId: 3, roomId: 6 },
        { tagId: 7, roomId: 6 },
        // R.A 202
        { tagId: 0, roomId: 7 },
        { tagId: 2, roomId: 7 },
        { tagId: 3, roomId: 7 },
        { tagId: 7, roomId: 7 },
        // R.A 203
        { tagId: 0, roomId: 8 },
        { tagId: 2, roomId: 8 },
        { tagId: 3, roomId: 8 },
        { tagId: 7, roomId: 8 },
        // R.A 204
        { tagId: 0, roomId: 9 },
        { tagId: 2, roomId: 9 },
        { tagId: 3, roomId: 9 },
        { tagId: 7, roomId: 9 },
        // R.A 205
        { tagId: 0, roomId: 10 },
        { tagId: 2, roomId: 10 },
        { tagId: 4, roomId: 10 },
        { tagId: 5, roomId: 10 },
        // R.A 206
        { tagId: 0, roomId: 11 },
        { tagId: 2, roomId: 11 },
        { tagId: 8, roomId: 11 },
        { tagId: 5, roomId: 11 },
        // R.C 201
        { tagId: 0, roomId: 14 },
        { tagId: 2, roomId: 14 },
        // R.C 202
        { tagId: 0, roomId: 15 },
        { tagId: 2, roomId: 15 },
        // R.C 203
        { tagId: 0, roomId: 16 },
        { tagId: 2, roomId: 16 },
        // R.C 204
        { tagId: 0, roomId: 17 },
        { tagId: 2, roomId: 17 },
        // R.C 205
        { tagId: 0, roomId: 18 },
        { tagId: 2, roomId: 18 },
        // R.C 206
        { tagId: 0, roomId: 19 },
        { tagId: 2, roomId: 19 },
        // R.E 101
        { tagId: 8, roomId: 20 },
        { tagId: 9, roomId: 20 },
        // R.E 102
        { tagId: 8, roomId: 21 },
        { tagId: 9, roomId: 21 },
        // R.E 103
        { tagId: 0, roomId: 22 },
        { tagId: 1, roomId: 22 },
        { tagId: 2, roomId: 22 },
        { tagId: 3, roomId: 22 },
        { tagId: 5, roomId: 22 },
        // R.E 104
        { tagId: 1, roomId: 23 },
        { tagId: 2, roomId: 23 },
        { tagId: 3, roomId: 23 },
        { tagId: 5, roomId: 23 },
        // R.E 105
        { tagId: 1, roomId: 24 },
        { tagId: 6, roomId: 24 },
        { tagId: 5, roomId: 24 },
        // R.E 106
        { tagId: 1, roomId: 25 },
        { tagId: 6, roomId: 25 },
        { tagId: 5, roomId: 25 },
        // R.E 201
        { tagId: 1, roomId: 26 },
        { tagId: 4, roomId: 26 },
        // R.E 202
        { tagId: 1, roomId: 27 },
        { tagId: 4, roomId: 27 },
        // R.E 203
        { tagId: 10, roomId: 28 },
        // R.E 204
        { tagId: 0, roomId: 29 },
        { tagId: 1, roomId: 29 },
        { tagId: 2, roomId: 29 },
        // R.E 205
        { tagId: 0, roomId: 30 },
        { tagId: 1, roomId: 30 },
        // R.E 206
        { tagId: 0, roomId: 31 },
        { tagId: 4, roomId: 31 },
    ];
    //quero rodar cada objeto do array e adicionar + 1 no tagId e no roomId
    response.forEach(function (item) {
        item.tagId += 1;
        item.roomId += 1;
    });
    return response;
}
function disciplinesFactory() {
    var disciplines = [
        { code: "8101104", name: "INTRODUCAO A FILOSOFIA", workload: 60 },
        { code: "8101146", name: "ETICA PROFISSIONAL", workload: 60 },
        { code: "8101177", name: "INTRODUCAO A PSICOLOGIA", workload: 60 },
        { code: "8101180", name: "TEORIA ANTROPOLOGICA CLASSICA", workload: 60 },
        { code: "8101181", name: "TEORIA SOCIOLOGICA CLASSICA", workload: 60 },
        { code: "8101182", name: "TEORIA DO ESTADO", workload: 60 },
        { code: "8101223", name: "ESTUDOS ETNOGRAFICOS", workload: 60 },
        { code: "8101233", name: "INTRODUCAO A ETNODOCUMENTACAO", workload: 60 },
        { code: "8101236", name: "COMPUTADORES E SOCIEDADE", workload: 60 },
        { code: "8101257", name: "MEMORIA NARRATIVA E ORALIDADE", workload: 60 },
        { code: "8101266", name: "ETNOLOGIA INDIGENA", workload: 60 },
        { code: "8101267", name: "TEC E ESTETICAS DO AUDIO VISUAL II", workload: 60 },
        { code: "8101270", name: "ANTROPOLOGIA POLITICA", workload: 60 },
        { code: "8101277", name: "TEORIA ANTROPOLOGICA II", workload: 60 },
        { code: "8101282", name: "PATRIMONIO MATERIAL E IMATERIAL", workload: 60 },
        { code: "8101284", name: "ANTROPOLOGIA VISUAL II", workload: 60 },
        { code: "8101285", name: "GENERO CORPO E GERAÇÃO", workload: 60 },
        { code: "8101293", name: "TCC ANTROPOLOGIA", workload: 60 },
        { code: "8101298", name: "ANTROPOLOGIA DA ARTE", workload: 60 },
        { code: "8101318", name: "LAUDOS ANTROPOLOGICOS", workload: 60 },
        { code: "8101322", name: "ANTROPOLOGIA E LITERATURA", workload: 60 },
        { code: "8101328", name: "ANTROPOLOGIA BRASILEIRA", workload: 60 },
        { code: "8101331", name: "ESTAGIO SUPERVISIONADO I", workload: 60 },
        { code: "8101332", name: "ESTAGIO SUPERVISIONADO II", workload: 60 },
        { code: "8101333", name: "ESTAGIO SUPERVISIONADO III", workload: 60 },
        { code: "8101335", name: "SEMINARIOS DE PESQ EM ANTROPOLOGIA", workload: 60 },
        { code: "8102100", name: "FUND ANTROFILOSOFICOS DA EDUCAÇÃO", workload: 60 },
        { code: "8102106", name: "FUND SOCIO-HISTORICOS DA EDUCAÇÃO", workload: 60 },
        { code: "8102107", name: "FUND PSICOLOGICOS DA EDUCAÇÃO", workload: 60 },
        { code: "8102108", name: "DIDÁTICA", workload: 60 },
        { code: "8102126", name: "POLITICA E GESTAO DA EDUCAÇÃO", workload: 60 },
        { code: "8102163", name: "AVALIAÇÃO DA APRENDIZAGEM", workload: 60 },
        { code: "8102167", name: "PESC E COTIDIANO ESCOLAR", workload: 60 },
        { code: "8102181", name: "ALFABET DE JOV ADUL PROCE E MÉTODOS", workload: 60 },
        { code: "8103100", name: "CALCULO", workload: 60 },
        { code: "8103101", name: "CÁLCULO VET E GEOMETRIA ANALÍTICA", workload: 60 },
        { code: "8103102", name: "FISICA", workload: 60 },
        { code: "8103104", name: "INTRODUCAO A PROGRAMACAO", workload: 60 },
        { code: "8103106", name: "INTRODUCAO AO COMPUTADOR", workload: 60 },
        { code: "8103108", name: "MATEMÁTICA ELEMENTAR", workload: 60 },
        { code: "8103109", name: "MATEMÁTICA PARA O ENSINO BÁSICO I", workload: 60 },
        { code: "8103110", name: "MATEMÁTICA PARA O ENSINO BÁSICO II", workload: 60 },
        { code: "8103111", name: "METODOLOGIA CIENTIFICA", workload: 60 },
        { code: "8103115", name: "CALCULO I", workload: 60 },
        { code: "8103116", name: "MATEMÁTICA PARA O ENSINO BÁSICO III", workload: 60 },
        { code: "8103117", name: "MATEMÁTICA PARA O ENSINO BÁSICO IV", workload: 60 },
        { code: "8103118", name: "CÁLCULO DIFERENCIAL E INTEGRAL I", workload: 60 },
        { code: "8103119", name: "CÁLCULO DIFERENCIAL E INTEGRAL II", workload: 60 },
        { code: "8103120", name: "ARGUMENTAÇÃO EM MATEMÁTICA", workload: 60 },
        { code: "8103121", name: "PESC APLICADA À MATEMÁTICA", workload: 60 },
        { code: "8103122", name: "INFORMÁTICA APLICADA À MATEMÁTICA", workload: 60 },
        { code: "8103123", name: "CALCULO II", workload: 60 },
        { code: "8103125", name: "LINGUAGEM DE PROGRAMACAO", workload: 60 },
        { code: "8103126", name: "ARQUITETURA DE COMPUTADORES I", workload: 60 },
        { code: "8103131", name: "FUND DA GEOMETRIA EUCLIDIANA", workload: 60 },
        { code: "8103132", name: "CÁLCULO DIFERENCIAL E INTEGRAL III", workload: 60 },
        { code: "8103133", name: "INTRODUÇÃO À ÁLGEBRA LINEAR", workload: 60 },
        { code: "8103135", name: "ALGEBRA LINEAR", workload: 60 },
        { code: "8103137", name: "ESTRUTURA DE DADOS", workload: 60 },
        { code: "8103138", name: "PROG ORIENTADA A OBJETOS", workload: 60 },
        { code: "8103139", name: "LOGICA APLICADA A COMPUTACAO", workload: 60 },
        { code: "8103140", name: "CÁLCULO DIFERENCIAL E INTEGRAL", workload: 60 },
        { code: "8103146", name: "ALGORITMOS E ESTRUTURA DE DADOS II", workload: 60 },
        { code: "8103147", name: "PROBABILIDADE E ESTATISTICA", workload: 60 },
        { code: "8103149", name: "GERENCIA DE PROJETO DE SOFTWARE", workload: 60 },
        { code: "8103151", name: "ENGENHARIA DE SOFTWARE", workload: 60 },
        { code: "8103152", name: "REDES DE COMPUTADORES", workload: 60 },
        { code: "8103153", name: "BANCO DE DADOS II", workload: 60 },
        { code: "8103154", name: "PARADIGMAS DE LINGUAGEM", workload: 60 },
        { code: "8103156", name: "GERENCIA DE REDES DE COMPUTADORES", workload: 60 },
        { code: "8103158", name: "AVALIACAO DE DESEMPENHO DE SISTEMAS", workload: 60 },
        { code: "8103159", name: "INTERFACE COM O USUÁRIO", workload: 60 },
        { code: "8103166", name: "PESC APLICADA A COMPUTACAO", workload: 60 },
        { code: "8103167", name: "LINGUAGENS DECLARATIVAS", workload: 60 },
        { code: "8103169", name: "MODELAGEM DE DADOS", workload: 60 },
        { code: "8103172", name: "TEORIA DE COMPUTACAO", workload: 60 },
        { code: "8103174", name: "BANCO DE DADOS", workload: 60 },
        { code: "8103175", name: "ESTAGIO SUPERVISIONADO I COMPUTACAO", workload: 60 },
        { code: "8103176", name: "ESTÀGIO SUPERVISIONADO II", workload: 60 },
        { code: "8103177", name: "ESTAGIO SUPERVISIONADO III COMPUTACAO", workload: 60 },
        { code: "8103178", name: "ESTAGIO SUPERVISIONADO IV COMPUTACAO", workload: 60 },
        { code: "8103179", name: "SISTEMAS MULTIMIDIA", workload: 60 },
        { code: "8103180", name: "ANALISE E PROJETOS DE SISTEMAS", workload: 60 },
        { code: "8103181", name: "INTELIGENCIA ARTIFICIAL", workload: 60 },
        { code: "8103182", name: "PROD DE MATERIAIS INSTRUCIONAIS", workload: 60 },
        { code: "8103183", name: "TCC COMPUTACAO", workload: 60 },
        { code: "8103184", name: "ESTATÍSTICA", workload: 60 },
        { code: "8103185", name: "FÍSICA GERAL I", workload: 60 },
        { code: "8103186", name: "HISTÓRIA DA MATEMÁTICA", workload: 60 },
        { code: "8103187", name: "INTRODUÇÃO À ÁLGEBRA", workload: 60 },
        { code: "8103188", name: "INTRODUÇÃO À ANÁLISE", workload: 60 },
        { code: "8103189", name: "INTRODUÇÃO À GEOMETRIA DIFERENCIAL", workload: 60 },
        { code: "8103190", name: "INTRODUÇÃO À TEORIA DOS NÚMEROS", workload: 60 },
        { code: "8103191", name: "INTRODUÇÃO À VARIÁVEIS COMPLEXAS", workload: 60 },
        { code: "8103192", name: "SÉRIES E EQUAÇÕES DIF ORDINÁRIAS", workload: 60 },
        { code: "8103193", name: "ESTÁGIO SUPERVISIONADO I MATEMÁTICA", workload: 60 },
        { code: "8103194", name: "ESTÁGIO SUPERVISIONADO II MATEMÁTICA", workload: 60 },
        { code: "8103195", name: "ESTÁGIO SUPERVISIONADO III MATEMÁTICA", workload: 60 },
        { code: "8103196", name: "ESTÁGIO SUPERVISIONADO IV MATEMÁTICA", workload: 60 },
        { code: "8103197", name: "TCC MATEMÁTICA", workload: 60 },
        { code: "8103198", name: "LAB DO ENSINO DA MATEMÁTICA I", workload: 60 },
        { code: "8103199", name: "LAB DO ENSINO DA MATEMÁTICA II", workload: 60 },
        { code: "8103211", name: "EDUCACAO A DISTANCIA", workload: 60 },
        { code: "8103215", name: "SISTEMAS OPERACIONAIS", workload: 60 },
        { code: "8103217", name: "GESTÃO DA INF E DE SISTEMAS DE INF", workload: 60 },
        { code: "8103219", name: "PROJETO AVANÇADO DE SOFTWARE I", workload: 60 },
        { code: "8103222", name: "SOFTWARES EDUCACIONAIS", workload: 60 },
        { code: "8103226", name: "METOD DO TRABALHO CIENTÍFICO", workload: 60 },
        { code: "8104100", name: "BIOLOGIA CELULAR", workload: 60 },
        { code: "8104102", name: "FUNDAMENTOS DE ECOLOGIA", workload: 60 },
        { code: "8104103", name: "GEOLOGIA GERAL", workload: 60 },
        { code: "8104105", name: "QUÍMICA GERAL", workload: 60 },
        { code: "8104109", name: "METOD DO TRABALHO CIENTÍFICO", workload: 60 },
        { code: "8104110", name: "MICROBIOLOGIA AMBIENTAL", workload: 60 },
        { code: "8104111", name: "CLIMATOLOGIA E METEOROLOGIA", workload: 60 },
        { code: "8104112", name: "ZOOLOGIA DOS INVERTEBRADOS", workload: 60 },
        { code: "8104113", name: "QUÍMICA ORGÂNICA", workload: 60 },
        { code: "8104114", name: "GEOMORFOLOGIA", workload: 60 },
        { code: "8104121", name: "MORFOLOGIA E ANATOMIA VEGETAL", workload: 60 },
        { code: "8104122", name: "BIOESTATÍSTICA", workload: 60 },
        { code: "8104123", name: "BIOQUÍMICA", workload: 60 },
        { code: "8104125", name: "PESC APLICADA À ECOLOGIA", workload: 60 },
        { code: "8104127", name: "ZOOLOGIA DE VERTEBRADOS", workload: 60 },
        { code: "8104135", name: "LEGISLAÇÃO E DIREITO AMBIENTAL", workload: 60 },
        { code: "8104136", name: "ECOSSISTEMAS TERRESTRES", workload: 60 },
        { code: "8104137", name: "ECOFISIOLOGIA VEGETAL", workload: 60 },
        { code: "8104138", name: "TAXONOMIA VEGETAL", workload: 60 },
        { code: "8104139", name: "BIOGEOGRAFIA E PALEOECOLOGIA", workload: 60 },
        { code: "8104140", name: "AUTOECOLOGIA", workload: 60 },
        { code: "8104141", name: "RECURSOS NATURAIS RENOVÁVEIS", workload: 60 },
        { code: "8104149", name: "SENSORIAMENTO REMOTO E SIG", workload: 60 },
        { code: "8104150", name: "EDUCAÇÃO AMBIENTAL", workload: 60 },
        { code: "8104152", name: "POLUIÇÃO AMBIENTAL", workload: 60 },
        { code: "8104153", name: "ECOSSISTEMAS AQUÁTICOS", workload: 60 },
        { code: "8104154", name: "ECOLOGIA DE POPULAÇÕES", workload: 60 },
        { code: "8104155", name: "QUÍMICA AMBIENTAL", workload: 60 },
        { code: "8104156", name: "ESTAGIO SUPERVISIONADO I", workload: 60 },
        { code: "8104157", name: "ECOLOGIA DE COMUNIDADES", workload: 60 },
        { code: "8104158", name: "PLANEJAMENTO AMBIENTAL", workload: 60 },
        { code: "8104159", name: "TRAT DE RESÍDUOS E DE EFLUENTES", workload: 60 },
        { code: "8104160", name: "METOD DE EST DE IMPACTOS AMBIENTAIS", workload: 60 },
        { code: "8104161", name: "ESTAGIO SUPERVISIONADO II", workload: 60 },
        { code: "8104191", name: "BIOLOGIA DA CONSERVAÇÃO", workload: 60 },
        { code: "8104192", name: "ESTÁGIO SUPERVISIONADO III", workload: 60 },
        { code: "8104193", name: "ECOFISIOLOGIA ANIMAL", workload: 60 },
        { code: "8104194", name: "ECOLOGIA DE CAMPO", workload: 60 },
        { code: "8104195", name: "ESTÁGIO SUPERVISIONADO IV", workload: 60 },
        { code: "8104196", name: "TCC ECOLOGIA", workload: 60 },
        { code: "8104207", name: "ECOLOGIA DA POLINIZAÇÃO", workload: 60 },
        { code: "8104209", name: "ECOLOGIA DA PAISAGEM", workload: 60 },
        { code: "8105002", name: "PORTUGUES INSTRUMENTAL", workload: 60 },
        { code: "8105003", name: "INGLES INSTRUMENTAL", workload: 60 },
        { code: "8105031", name: "LIBRAS - LÍNGUA BRASILEIRA DE SINAIS", workload: 60 },
        { code: "8106004", name: "LINGUAGEM VISUAL", workload: 60 },
        { code: "8106005", name: "GEOMETRIA DESCRITIVA", workload: 60 },
        { code: "8106006", name: "DESENHO DE OBSERVAÇÃO II", workload: 60 },
        { code: "8106007", name: "HISTÓRIA DO DESIGN", workload: 60 },
        { code: "8106010", name: "ERGONOMIA", workload: 60 },
        { code: "8106011", name: "ESTÉTICA", workload: 60 },
        { code: "8106012", name: "DESENHO PROJETIVO II", workload: 60 },
        { code: "8106013", name: "PROJETO BÁSICO I", workload: 60 },
        { code: "8106014", name: "LAB DE REPRESENTAÇÃO EM VOLUME I", workload: 60 },
        { code: "8106017", name: "PROJETO DO PRODUTO I", workload: 60 },
        { code: "8106018", name: "LAB DE REPRESENTAÇÃO EM VOLUME III", workload: 60 },
        { code: "8106020", name: "MODELAGEM DIGITAL", workload: 60 },
        { code: "8106021", name: "PROJETO DO PRODUTO III", workload: 60 },
        { code: "8106023", name: "ESTÁGIO SUPERVISIONADO I", workload: 60 },
        { code: "8106031", name: "DESIGN E DESENV SUSTENTÁVEL", workload: 60 },
        { code: "8108105", name: "MARKETING", workload: 60 },
        { code: "8108106", name: "GESTÃO DA PRODUÇÃO", workload: 60 },
        { code: "8108109", name: "ADMINISTRAÇÃO II", workload: 60 },
        { code: "8108111", name: "MATEMÁTICA FINANCEIRA", workload: 60 },
        { code: "8108113", name: "EMPREENDEDORISMO", workload: 60 },
        { code: "DCET00233", name: "MATEMÁTICA DISCRETA", workload: 60 },
        { code: "DESI000047", name: "PRÁTICAS PROJETUAIS CONTEMPORÂNEAS", workload: 60 },
        { code: "DESI000049", name: "CRIATIVIDADE E INOVAÇÃO", workload: 60 },
        { code: "GDPMA0100", name: "PRINCÍPIOS DE CARTOGRAFIA", workload: 60 },
    ];
    return disciplines;
}
function classesFactory() {
    var dataBrute = "60,2022.2,89,3,12,1\n60,2022.2,89,4,12,1\n62,2022.2,89,25,6,2\n62,2022.2,89,26,6,2\n35,2022.2,1,3,29,3\n35,2022.2,1,4,29,3\n30,2022.2,62,11,20,4\n30,2022.2,62,12,20,4\n34,2022.2,30,17,20,5\n34,2022.2,30,18,20,5\n25,2022.2,15,5,20,6\n25,2022.2,15,6,20,6\n28,2022.2,33,11,7,7\n28,2022.2,33,12,7,7\n35,2022.2,42,29,20,8\n35,2022.2,42,30,20,8\n23,2022.2,18,3,8,9\n23,2022.2,18,4,8,9\n25,2022.2,84,5,7,10\n25,2022.2,84,6,7,10\n16,2022.2,50,23,8,11\n16,2022.2,50,24,8,11\n10,2022.2,73,11,8,12\n10,2022.2,73,12,8,12\n15,2022.2,4,11,9,13\n15,2022.2,4,12,9,13\n21,2022.2,58,23,7,14\n21,2022.2,58,24,7,14\n20,2022.2,53,5,8,15\n20,2022.2,53,6,8,15\n8,2022.2,53,17,9,16\n8,2022.2,53,18,9,16\n12,2022.2,58,29,8,17\n12,2022.2,58,30,8,17\n17,2022.2,42,17,8,19\n17,2022.2,42,18,8,19\n16,2022.2,84,23,9,20\n16,2022.2,84,24,9,20\n27,2022.2,30,5,9,21\n27,2022.2,30,6,9,21\n27,2022.2,62,29,7,22\n27,2022.2,62,30,7,22\n34,2022.2,73,23,20,26\n34,2022.2,73,24,20,26\n60,2022.2,13,9,22,27\n60,2022.2,13,10,22,27\n46,2022.2,76,29,24,27\n46,2022.2,76,30,24,27\n35,2022.2,85,5,30,28\n35,2022.2,85,6,30,28\n50,2022.2,76,27,22,28\n50,2022.2,76,28,22,28\n50,2022.2,80,15,11,29\n50,2022.2,80,16,11,29\n34,2022.2,85,23,21,29\n34,2022.2,86,24,21,29\n48,2022.2,65,9,9,30\n48,2022.2,65,10,9,30\n16,2022.2,86,29,22,30\n16,2022.2,86,30,22,30\n26,2022.2,67,15,9,31\n26,2022.2,67,16,9,31\n54,2022.2,76,21,9,32\n54,2022.2,76,22,9,32\n32,2022.2,40,17,3,33\n32,2022.2,40,18,3,33\n26,2022.2,85,11,31,34\n26,2022.2,85,12,31,34\n35,2022.2,36,15,23,35\n35,2022.2,36,16,23,35\n47,2022.2,87,7,23,36\n47,2022.2,87,14,23,36\n51,2022.2,2,23,24,36\n51,2022.2,2,24,24,36\n23,2022.2,82,2,24,37\n23,2022.2,82,3,24,37\n33,2022.2,7,1,16,38\n35,2022.2,91,7,16,38\n35,2022.2,91,20,22,38\n33,2022.2,7,26,16,38\n59,2022.2,5,8,22,39\n59,2022.2,5,19,22,39\n20,2022.2,46,11,22,40\n20,2022.2,46,12,22,40\n43,2022.2,22,23,23,41\n43,2022.2,22,24,23,41\n46,2022.2,36,17,23,42\n46,2022.2,49,18,23,42\n53,2022.2,7,25,22,43\n60,2022.2,47,2,22,44\n60,2022.2,47,3,22,44\n60,2022.2,47,14,22,44\n42,2022.2,29,17,24,45\n42,2022.2,29,18,24,45\n34,2022.2,20,29,30,46\n34,2022.2,20,30,30,46\n49,2022.2,45,5,23,47\n49,2022.2,45,6,23,47\n55,2022.2,36,5,24,48\n55,2022.2,36,6,24,48\n48,2022.2,63,29,23,49\n48,2022.2,63,30,23,49\n15,2022.2,23,29,31,50\n15,2022.2,21,30,31,50\n51,2022.2,22,11,24,51\n51,2022.2,22,12,24,51\n42,2022.2,48,1,23,52\n42,2022.2,48,3,23,52\n42,2022.2,48,26,23,52\n46,2022.2,79,2,16,53\n50,2022.2,17,8,15,53\n46,2022.2,79,14,16,53\n50,2022.2,17,19,16,53\n41,2022.2,25,2,11,54\n48,2022.2,16,8,31,54\n48,2022.2,16,20,31,54\n41,2022.2,25,20,23,54\n41,2022.2,46,23,30,55\n41,2022.2,46,24,30,55\n31,2022.2,63,17,30,56\n31,2022.2,63,18,30,56\n49,2022.2,2,11,30,57\n49,2022.2,2,12,30,57\n16,2022.2,48,2,23,58\n16,2022.2,48,27,23,58\n40,2022.2,92,14,11,59\n40,2022.2,92,26,11,59\n40,2022.2,17,7,15,60\n40,2022.2,17,20,16,60\n49,2022.2,90,13,11,61\n50,2022.2,90,15,31,61\n49,2022.2,90,25,11,61\n50,2022.2,90,26,31,61\n52,2022.2,47,1,31,62\n52,2022.2,47,13,31,62\n35,2022.2,64,9,29,63\n35,2022.2,64,21,29,63\n19,2022.2,75,9,6,64\n19,2022.2,75,10,6,64\n43,2022.2,44,2,10,65\n43,2022.2,44,14,10,65\n47,2022.2,10,7,10,66\n47,2022.2,10,20,19,66\n23,2022.2,78,7,15,67\n23,2022.2,78,20,8,67\n40,2022.2,61,21,15,68\n40,2022.2,61,22,15,68\n37,2022.2,92,15,29,69\n37,2022.2,92,25,29,69\n35,2022.2,52,10,16,70\n35,2022.2,52,25,16,70\n21,2022.2,61,8,29,71\n21,2022.2,61,20,29,71\n33,2022.2,52,9,10,72\n33,2022.2,52,26,16,72\n40,2022.2,74,7,6,73\n40,2022.2,74,14,6,73\n30,2022.2,43,2,8,74\n30,2022.2,43,20,6,74\n50,2022.2,10,8,19,75\n50,2022.2,10,19,10,75\n29,2022.2,43,1,8,76\n29,2022.2,43,21,8,76\n43,2022.2,91,8,16,77\n43,2022.2,91,19,8,77\n19,2022.2,24,2,9,82\n19,2022.2,24,14,19,82\n33,2022.2,83,1,15,83\n33,2022.2,83,13,15,83\n40,2022.2,78,8,9,84\n40,2022.2,78,19,15,84\n27,2022.2,34,2,7,85\n27,2022.2,34,14,7,85\n22,2022.2,68,23,22,87\n22,2022.2,68,24,22,87\n14,2022.2,82,5,22,88\n14,2022.2,82,6,22,88\n46,2022.2,23,17,21,89\n46,2022.2,37,18,21,89\n18,2022.2,39,17,29,90\n18,2022.2,39,18,29,90\n6,2022.2,45,17,25,91\n6,2022.2,45,18,25,91\n19,2022.2,20,23,12,92\n19,2022.2,20,24,12,92\n35,2022.2,39,11,21,93\n35,2022.2,39,12,21,93\n8,2022.2,41,11,12,94\n8,2022.2,41,12,12,94\n25,2022.2,41,29,21,95\n25,2022.2,41,30,21,95\n9,2022.2,49,11,25,101\n9,2022.2,49,12,25,101\n17,2022.2,37,23,29,102\n17,2022.2,37,24,29,102\n20,2022.2,34,1,7,103\n20,2022.2,34,13,7,103\n29,2022.2,79,1,6,104\n29,2022.2,79,13,6,104\n32,2022.2,59,15,10,105\n32,2022.2,59,16,10,105\n40,2022.2,24,1,19,106\n40,2022.2,24,13,19,106\n29,2022.2,61,9,15,107\n46,2022.2,29,11,23,108\n46,2022.2,29,12,23,108\n28,2022.2,27,25,25,108\n28,2022.2,27,26,25,108\n25,2022.2,9,7,24,109\n25,2022.2,9,13,24,109\n26,2022.2,35,25,24,110\n26,2022.2,35,26,24,110\n24,2022.2,11,19,24,111\n24,2022.2,11,20,24,111\n40,2022.2,95,8,24,112\n40,2022.2,95,14,24,112\n31,2022.2,77,9,25,114\n31,2022.2,77,10,25,114\n37,2022.2,56,13,25,115\n37,2022.2,56,14,25,115\n17,2022.2,6,8,25,116\n17,2022.2,6,19,25,116\n28,2022.2,95,7,25,117\n20,2022.2,55,27,25,118\n20,2022.2,55,28,25,118\n47,2022.2,96,1,25,119\n47,2022.2,96,2,25,119\n31,2022.2,77,8,1,120\n28,2022.2,9,14,1,121\n24,2022.2,31,2,2,122\n27,2022.2,6,7,1,123\n27,2022.2,6,20,1,123\n16,2022.2,31,20,5,124\n24,2022.2,26,1,2,125\n24,2022.2,26,7,2,125\n20,2022.2,31,1,1,127\n20,2022.2,31,19,1,127\n27,2022.2,27,19,2,129\n27,2022.2,27,20,2,129\n14,2022.2,70,2,1,130\n14,2022.2,70,13,1,130\n25,2022.2,72,13,5,131\n25,2022.2,72,14,5,131\n29,2022.2,11,25,1,132\n29,2022.2,11,26,1,132\n28,2022.2,26,3,5,134\n28,2022.2,26,9,5,134\n30,2022.2,19,25,5,135\n30,2022.2,19,26,5,135\n10,2022.2,32,8,2,136\n12,2022.2,35,19,4,138\n12,2022.2,35,20,4,138\n8,2022.2,72,7,4,139\n16,2022.2,56,7,5,139\n8,2022.2,72,8,4,139\n16,2022.2,56,8,5,139\n17,2022.2,32,13,4,140\n17,2022.2,32,14,4,140\n13,2022.2,97,25,4,141\n13,2022.2,97,26,4,141\n15,2022.2,19,13,30,143\n15,2022.2,19,14,30,143\n19,2022.2,14,8,30,145\n10,2022.2,96,13,2,145\n10,2022.2,96,14,2,145\n15,2022.2,96,3,2,149\n15,2022.2,96,4,2,149\n15,2022.2,70,9,3,150\n15,2022.2,70,10,3,150\n47,2022.2,28,3,6,151\n47,2022.2,28,4,6,151\n60,2022.2,66,9,4,152\n60,2022.2,66,10,4,152\n45,2022.2,93,3,9,153\n45,2022.2,93,4,9,153\n46,2022.2,93,5,3,153\n46,2022.2,93,6,3,153\n34,2022.2,71,15,21,154\n34,2022.2,71,16,21,154\n23,2022.2,94,7,32,155\n23,2022.2,94,8,32,155\n15,2022.2,94,9,32,155\n15,2022.2,94,10,32,155\n25,2022.2,81,19,32,156\n25,2022.2,81,20,32,156\n8,2022.2,81,21,32,156\n8,2022.2,81,22,32,156\n36,2022.2,81,25,21,157\n36,2022.2,81,26,21,157\n31,2022.2,12,13,21,158\n31,2022.2,12,14,21,158\n2,2022.2,71,19,21,159\n2,2022.2,71,20,21,159\n37,2022.2,57,15,13,160\n37,2022.2,57,16,13,160\n37,2022.2,54,13,20,161\n37,2022.2,54,14,20,161\n19,2022.2,69,1,33,162\n19,2022.2,69,2,33,162\n21,2022.2,69,3,33,162\n21,2022.2,69,4,33,162\n27,2022.2,12,1,20,163\n27,2022.2,12,2,20,163\n29,2022.2,55,7,33,164\n29,2022.2,55,8,33,164\n34,2022.2,55,9,33,164\n34,2022.2,55,10,33,164\n19,2022.2,57,19,13,165\n19,2022.2,57,20,13,165\n31,2022.2,54,7,20,166\n31,2022.2,54,8,20,166\n15,2022.2,51,3,21,168\n15,2022.2,51,4,21,168\n13,2022.2,1,15,12,169\n13,2022.2,1,16,12,169\n8,2022.2,8,9,12,170\n8,2022.2,8,10,12,170\n48,2022.2,1,9,31,171\n48,2022.2,1,10,31,171\n17,2022.2,60,17,22,172\n49,2022.2,83,2,15,173\n49,2022.2,83,14,15,173\n60,2022.2,87,13,22,174\n60,2022.2,87,15,22,174\n24,2022.2,38,1,21,175\n24,2022.2,38,2,21,175\n36,2022.2,69,21,21,176\n36,2022.2,69,22,21,176\n17,2022.2,72,1,5,177\n17,2022.2,72,2,5,177\n17,2022.2,60,17,22,172";
    var data = dataBrute.split('\n').map(function (line) {
        var _a = line.split(','), students = _a[0], schoolYear = _a[1], teacherId = _a[2], scheduleId = _a[3], roomId = _a[4], disciplineId = _a[5];
        return {
            students: parseInt(students),
            schoolYear: schoolYear,
            teacherId: parseInt(teacherId),
            scheduleId: parseInt(scheduleId),
            roomId: parseInt(roomId),
            disciplineId: parseInt(disciplineId)
        };
    });
    return data;
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
