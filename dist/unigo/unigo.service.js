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
exports.UnigoService = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../constant");
let UnigoService = class UnigoService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getHello() {
        return 'Unigo Serving!';
    }
    getRawVector(taxid) {
        return this.httpService.get(`${constant_1.UNIGO_ENDPOINT}/vectors/${taxid}`).toPromise();
    }
    getTrimmedVectorByProt(inputTrimmedVector) {
        return new Promise((resolve, reject) => {
            const protData = {};
            inputTrimmedVector.uniprotIds.forEach(uId => protData[uId] = []);
            const promise = this.httpService.get(`${constant_1.UNIGO_ENDPOINT}/vectors/${inputTrimmedVector.taxid}`).toPromise();
            promise.then(resp => {
                const data = resp.data;
                Object.entries(data).forEach(([ns, vector]) => {
                    inputTrimmedVector.uniprotIds.forEach(uId => {
                        const protIdx = vector.registry.indexOf(uId);
                        Object.entries(vector.terms).forEach(([go, term]) => {
                            if (term.elements.includes(protIdx) && go !== "0000")
                                protData[uId].push({ go: go, ns: ns, name: term.name });
                        });
                    });
                });
                resolve(protData);
            })
                .catch(err => reject(err));
        });
    }
    getTrimmedVector(inputTrimmedVector) {
        return new Promise((resolve, reject) => {
            const completeVectorPromise = this.httpService.get(`${constant_1.UNIGO_ENDPOINT}/vectors/${inputTrimmedVector.taxid}`).toPromise();
            completeVectorPromise.then(resp => {
                const results = [];
                const completeVector = resp.data;
                Object.entries(completeVector).forEach(([ns, nsVector]) => {
                    const protIdx = inputTrimmedVector.uniprotIds.map(id => nsVector.registry.indexOf(id));
                    Object.entries(nsVector.terms).forEach(([go, terms]) => {
                        console.log("OOO", go, terms);
                        const intersection = protIdx.filter(idx => terms.elements.includes(idx));
                        console.log(intersection);
                        if (intersection.length > 0)
                            results.push({ go: go,
                                prots: intersection.map(idx => nsVector.registry[idx]),
                                name: terms.name, ns: ns, freq: terms.freq });
                    });
                });
                resolve(results);
            }).catch(err => reject(err));
        });
    }
};
UnigoService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], UnigoService);
exports.UnigoService = UnigoService;
//# sourceMappingURL=unigo.service.js.map