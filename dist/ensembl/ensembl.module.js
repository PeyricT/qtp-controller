"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsemblModule = void 0;
const common_1 = require("@nestjs/common");
const ensembl_controller_1 = require("./ensembl.controller");
const ensembl_service_1 = require("./ensembl.service");
let EnsemblModule = class EnsemblModule {
};
EnsemblModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule],
        controllers: [ensembl_controller_1.EnsemblController],
        providers: [ensembl_service_1.EnsemblService],
    })
], EnsemblModule);
exports.EnsemblModule = EnsemblModule;
//# sourceMappingURL=ensembl.module.js.map