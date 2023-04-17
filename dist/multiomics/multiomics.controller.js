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
exports.MultiomicsController = void 0;
const common_1 = require("@nestjs/common");
const multiomics_service_1 = require("./multiomics.service");
const multiomics_dto_1 = require("./dto/multiomics.dto");
let MultiomicsController = class MultiomicsController {
    constructor(multiomics) {
        this.multiomics = multiomics;
    }
    async getEnsemblMany(coverRequest) {
        const resp = await this.multiomics.getCoverage(coverRequest.prot_ids, coverRequest.gene_ids, coverRequest.return_pct);
        console.log(resp.data);
        return resp.data;
    }
};
__decorate([
    common_1.Post('cover'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [multiomics_dto_1.CoverRequest]),
    __metadata("design:returntype", Promise)
], MultiomicsController.prototype, "getEnsemblMany", null);
MultiomicsController = __decorate([
    common_1.Controller('api/multiomics'),
    __metadata("design:paramtypes", [multiomics_service_1.MultiomicsService])
], MultiomicsController);
exports.MultiomicsController = MultiomicsController;
//# sourceMappingURL=multiomics.controller.js.map