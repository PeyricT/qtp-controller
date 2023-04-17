"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const pwas_module_1 = require("./pwas/pwas.module");
const uniprot_module_1 = require("./uniprot/uniprot.module");
const ensembl_module_1 = require("./ensembl/ensembl.module");
const multiomics_module_1 = require("./multiomics/multiomics.module");
const unigo_module_1 = require("./unigo/unigo.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [pwas_module_1.PwasModule, uniprot_module_1.UniprotModule, ensembl_module_1.EnsemblModule, multiomics_module_1.MultiomicsModule, unigo_module_1.UnigoModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '../..', 'data'),
                exclude: ['/api*'],
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map