"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const constant_1 = require("./constant");
const commander_1 = require("commander");
const program = new commander_1.Command();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    await app.listen(constant_1.CONTROLLER_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map