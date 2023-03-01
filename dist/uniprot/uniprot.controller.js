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
exports.UniprotController = void 0;
const common_1 = require("@nestjs/common");
const uniprot_service_1 = require("./uniprot.service");
const uniprot_dto_1 = require("./dto/uniprot.dto");
let UniprotController = class UniprotController {
    constructor(uniprotService) {
        this.uniprotService = uniprotService;
    }
    async getUniprot(params) {
        const resp = await this.uniprotService.getUniprot(params.id);
        console.dir(resp);
        return resp.data;
    }
    async getLength() {
        const resp = await this.uniprotService.length();
        console.dir(resp === null || resp === void 0 ? void 0 : resp.data);
        return resp.data;
    }
    async getVersion() {
        const resp = await this.uniprotService.version();
        return resp.data;
    }
    async getUniprotMany(uniprotBatchRequest) {
        const resp = await this.uniprotService.getUniprotMany(uniprotBatchRequest.uniprotIDs);
        console.log(`Returning ${Object.keys(resp.data).reduce((acc, val) => (resp.data[val] != null ? acc + 1 : acc), 0)} valid elements`);
        return resp.data;
    }
    async proteomeScan(proteomeScanRequest) {
        console.log(`/api/uniprot/proteome_scan with ${proteomeScanRequest.uniprotIDs.length} proteins`);
        const resp = await this.uniprotService.proteomeScan(proteomeScanRequest.uniprotIDs);
        return resp.data;
    }
};
__decorate([
    common_1.Get('/api/uniprot/get/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UniprotController.prototype, "getUniprot", null);
__decorate([
    common_1.Get('/api/uniprot/dimension'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UniprotController.prototype, "getLength", null);
__decorate([
    common_1.Get('/api/uniprot/version'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UniprotController.prototype, "getVersion", null);
__decorate([
    common_1.Post('/api/uniprot/many'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uniprot_dto_1.UniprotBatchRequest]),
    __metadata("design:returntype", Promise)
], UniprotController.prototype, "getUniprotMany", null);
__decorate([
    common_1.Post('/api/uniprot/proteome_scan'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uniprot_dto_1.UniprotBatchRequest]),
    __metadata("design:returntype", Promise)
], UniprotController.prototype, "proteomeScan", null);
UniprotController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [uniprot_service_1.UniprotService])
], UniprotController);
exports.UniprotController = UniprotController;
//# sourceMappingURL=uniprot.controller.js.map