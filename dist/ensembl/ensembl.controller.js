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
exports.EnsemblController = void 0;
const common_1 = require("@nestjs/common");
const ensembl_service_1 = require("./ensembl.service");
const ensembl_dto_1 = require("./dto/ensembl.dto");
let EnsemblController = class EnsemblController {
    constructor(ensemblService) {
        this.ensemblService = ensemblService;
    }
    async getEnsembl(params) {
        const resp = await this.ensemblService.getEnsembl(params.id);
        console.dir(resp);
        return resp.data;
    }
    async getLength() {
        const resp = await this.ensemblService.length();
        console.dir(resp === null || resp === void 0 ? void 0 : resp.data);
        return resp.data;
    }
    async getVersion() {
        const resp = await this.ensemblService.version();
        return resp.data;
    }
    async getEnsemblGenes(ensemblBatchRequest) {
        const resp = await this.ensemblService.getEnsemblGenes(ensemblBatchRequest.ensemblIDs);
        console.log(`Returning ${Object.keys(resp.data).reduce((acc, val) => (resp.data[val] != null ? acc + 1 : acc), 0)} valid elements`);
        return resp.data;
    }
    async getListIds(ensemblBatchRequest) {
        const resp = await this.ensemblService.getListIds(ensemblBatchRequest.ensemblIDs);
        return resp.data;
    }
    async proteomeScan(proteomeScanRequest) {
        console.log(`/api/ensembl/proteome_scan with ${proteomeScanRequest.ensemblIDs.length} genes`);
        const resp = await this.ensemblService.proteomeScan(proteomeScanRequest.ensemblIDs);
        return resp.data;
    }
};
__decorate([
    common_1.Get('get/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EnsemblController.prototype, "getEnsembl", null);
__decorate([
    common_1.Get('dimension'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EnsemblController.prototype, "getLength", null);
__decorate([
    common_1.Get('version'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EnsemblController.prototype, "getVersion", null);
__decorate([
    common_1.Post('genes'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ensembl_dto_1.EnsemblBatchRequest]),
    __metadata("design:returntype", Promise)
], EnsemblController.prototype, "getEnsemblGenes", null);
__decorate([
    common_1.Post('listids'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ensembl_dto_1.EnsemblBatchRequest]),
    __metadata("design:returntype", Promise)
], EnsemblController.prototype, "getListIds", null);
__decorate([
    common_1.Post('proteome_scan'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ensembl_dto_1.EnsemblBatchRequest]),
    __metadata("design:returntype", Promise)
], EnsemblController.prototype, "proteomeScan", null);
EnsemblController = __decorate([
    common_1.Controller('api/ensembl'),
    __metadata("design:paramtypes", [ensembl_service_1.EnsemblService])
], EnsemblController);
exports.EnsemblController = EnsemblController;
//# sourceMappingURL=ensembl.controller.js.map