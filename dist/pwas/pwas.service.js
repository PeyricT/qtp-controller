"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PwasService = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../constant");
let PwasService = class PwasService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getHello() {
        return 'PWAS Serving!';
    }
    async computeORA(inputPwasORA) {
        console.log(`Request at ${constant_1.PWAS_ENDPOINT}/compute`);
        const oraRequest = {
            all_accessions: inputPwasORA.proteinsExp,
            significative_accessions: inputPwasORA.proteinsDelta,
            taxid: `${inputPwasORA.taxid}`,
            method: 'fisher',
            pvalue: inputPwasORA.pvalue,
        };
        console.dir(oraRequest);
        return this.httpService.post(`${constant_1.PWAS_ENDPOINT}/compute`, oraRequest).toPromise();
    }
};
PwasService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], PwasService);
exports.PwasService = PwasService;
//# sourceMappingURL=pwas.service.js.map