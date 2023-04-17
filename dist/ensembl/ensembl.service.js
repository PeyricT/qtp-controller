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
exports.EnsemblService = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../constant");
let EnsemblService = class EnsemblService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    length() {
        return this.httpService.get(`${constant_1.ENSEMBL_ENDPOINT}/length`).toPromise();
    }
    getEnsembl(ensemblID) {
        return this.httpService
            .get(`${constant_1.ENSEMBL_ENDPOINT}/ensembl/${ensemblID}`)
            .toPromise();
    }
    getEnsemblGenes(ensemblIdList) {
        console.log('-->', ensemblIdList);
        return this.httpService
            .post(`${constant_1.ENSEMBL_ENDPOINT}/ensembls`, { ensemblIDs: ensemblIdList })
            .toPromise();
    }
    getListIds(ensemblListName) {
        console.log('-->', ensemblListName);
        return this.httpService
            .post(`${constant_1.ENSEMBL_ENDPOINT}/ensembls/listids`, { params: ensemblListName })
            .toPromise();
    }
    model() {
        return this.httpService.get(`${constant_1.ENSEMBL_ENDPOINT}/model`).toPromise();
    }
    version() {
        return this.httpService.get(`${constant_1.ENSEMBL_ENDPOINT}/version`).toPromise();
    }
    proteomeScan(ensemblIdList) {
        return this.httpService
            .post(`${constant_1.ENSEMBL_ENDPOINT}/collection_scan`, { params: ensemblIdList })
            .toPromise();
    }
};
EnsemblService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], EnsemblService);
exports.EnsemblService = EnsemblService;
//# sourceMappingURL=ensembl.service.js.map