import { Controller, Get } from "@nestjs/common";
import { ReportesService } from "./reportes.service";

@Controller("reportes")
export class ReportesController {
    constructor(private readonly reportesService: ReportesService) {}

    @Get("/totalPorcinos")
    getTotalPorcinos() {
        return this.reportesService.totalPorcinos();
    }

    @Get("/promedioEdadPesoPorRaza")
    getPromedioEdadPesoPorRaza() {
        return this.reportesService.promedioEdadPesoPorRaza();
    }

    @Get("/porcinosPorCliente")
    getPorcinosPorCliente() {
        return this.reportesService.porcinosPorCliente();
    }
}
