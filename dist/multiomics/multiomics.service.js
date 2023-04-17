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
exports.MultiomicsService = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../constant");
let MultiomicsService = class MultiomicsService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getCoverage(prot_ids_, gene_ids_, return_pct_) {
        return this.httpService
            .post(`${constant_1.MULTIOMICS_ENDPOINT}/cover`, { prot_ids: prot_ids_, gene_ids: gene_ids_, return_pct: return_pct_ })
            .toPromise();
    }
};
MultiomicsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], MultiomicsService);
exports.MultiomicsService = MultiomicsService;
//# sourceMappingURL=multiomics.service.js.map