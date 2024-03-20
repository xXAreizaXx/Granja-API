// NestJS
import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from "@nestjs/common";

// Services
import { ClientsService } from "./clients.service";

// DTO's
import { CreateClientDto, UpdateClientDto } from "../dto/clients.dto";

@Controller("clients")
export class ClientsController {
    constructor(private readonly clienteService: ClientsService) {}

    @Post()
    create(@Body() createClientDto: CreateClientDto) {
        return this.clienteService.create(createClientDto);
    }

    @Get()
    findAll() {
        return this.clienteService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.clienteService.findOne(+id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateClientDto: UpdateClientDto) {
        return this.clienteService.update(+id, updateClientDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.clienteService.remove(+id);
    }
}
