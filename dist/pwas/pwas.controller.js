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
exports.PwasController = void 0;
const common_1 = require("@nestjs/common");
const pwas_service_1 = require("./pwas.service");
const input_pwas_ora_dto_1 = require("./dto/input-pwas-ora.dto");
let PwasController = class PwasController {
    constructor(pwasService) {
        this.pwasService = pwasService;
    }
    getHello() {
        return this.pwasService.getHello();
    }
    async postORA(inputPwasORA) {
        try {
            const resp = await this.pwasService.computeORA(inputPwasORA);
            console.dir(resp === null || resp === void 0 ? void 0 : resp.data);
            return resp.data;
        }
        catch (error) {
            console.error(error);
            return error;
        }
    }
};
__decorate([
    common_1.Get('/api/pwas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PwasController.prototype, "getHello", null);
__decorate([
    common_1.Post('/api/pwas/ora'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [input_pwas_ora_dto_1.InputPwasOraDto]),
    __metadata("design:returntype", Promise)
], PwasController.prototype, "postORA", null);
PwasController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [pwas_service_1.PwasService])
], PwasController);
exports.PwasController = PwasController;
//# sourceMappingURL=pwas.controller.js.map