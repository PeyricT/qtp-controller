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
exports.UniprotService = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../constant");
let UniprotService = class UniprotService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    length() {
        return this.httpService.get(`${constant_1.UNIPROT_ENDPOINT}/length`).toPromise();
    }
    getUniprot(uniprotID) {
        return this.httpService
            .get(`${constant_1.UNIPROT_ENDPOINT}/uniprot/${uniprotID}`)
            .toPromise();
    }
    getUniprotMany(uniprotIdList) {
        console.log('-->', uniprotIdList);
        return this.httpService
            .post(`${constant_1.UNIPROT_ENDPOINT}/uniprots`, { uniprotIDs: uniprotIdList })
            .toPromise();
    }
    model() {
        return this.httpService.get(`${constant_1.UNIPROT_ENDPOINT}/model`).toPromise();
    }
    version() {
        return this.httpService.get(`${constant_1.UNIPROT_ENDPOINT}/version`).toPromise();
    }
    proteomeScan(uniprotIdList) {
        return this.httpService
            .post(`${constant_1.UNIPROT_ENDPOINT}/collection_scan`, { uniprotIDs: uniprotIdList })
            .toPromise();
    }
};
UniprotService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], UniprotService);
exports.UniprotService = UniprotService;
//# sourceMappingURL=uniprot.service.js.map