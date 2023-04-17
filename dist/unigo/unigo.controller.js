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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnigoController = void 0;
const common_1 = require("@nestjs/common");
const unigo_service_1 = require("./unigo.service");
const unigo_dto_1 = require("./dto/unigo.dto");
let UnigoController = class UnigoController {
    constructor(unigoService) {
        this.unigoService = unigoService;
    }
    getHello() {
        return this.unigoService.getHello();
    }
    async getVector(params) {
        const resp = await this.unigoService.getRawVector(params.taxid);
        return resp.data;
    }
    async getTrimmedVectorByProt(inputTrimmedVector) {
        const resp = await this.unigoService.getTrimmedVectorByProt(inputTrimmedVector);
        return resp;
    }
    async getTrimmedVector(inputTrimmedVector) {
        const resp = await this.unigoService.getTrimmedVector(inputTrimmedVector);
        return resp;
    }
};
__decorate([
    common_1.Get('/api/unigo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UnigoController.prototype, "getHello", null);
__decorate([
    common_1.Get('api/unigo/vector/:taxid'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnigoController.prototype, "getVector", null);
__decorate([
    common_1.Post('/api/unigo/trimmedVectorByProt'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unigo_dto_1.InputTrimmedVectorDto]),
    __metadata("design:returntype", Promise)
], UnigoController.prototype, "getTrimmedVectorByProt", null);
__decorate([
    common_1.Post('api/unigo/trimmedVector'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [unigo_dto_1.InputTrimmedVectorDto]),
    __metadata("design:returntype", Promise)
], UnigoController.prototype, "getTrimmedVector", null);
UnigoController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [unigo_service_1.UnigoService])
], UnigoController);
exports.UnigoController = UnigoController;
//# sourceMappingURL=unigo.controller.js.map