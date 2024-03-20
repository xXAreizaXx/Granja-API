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
import { PorcinesService } from "./porcines.service";

// DTO's
import { CreatePorcineDto, UpdatePorcineDto } from "../dto/porcines.dto";

@Controller("porcines")
export class PorcinesController {
    constructor(private readonly porcineService: PorcinesService) {}

    @Post()
    create(@Body() createPorcineDto: CreatePorcineDto) {
        return this.porcineService.create(createPorcineDto);
    }

    @Get()
    findAll() {
        return this.porcineService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.porcineService.findOne(+id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updatePorcineDto: UpdatePorcineDto
    ) {
        return this.porcineService.update(+id, updatePorcineDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.porcineService.remove(+id);
    }
}
