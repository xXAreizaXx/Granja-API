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
import { FeedsService } from "./feeds.service";

// DTO's
import { CreateFeedDto, UpdateFeedDto } from "src/dto/feeds.dto";

@Controller("feeds")
export class FeedsController {
    constructor(private readonly feedService: FeedsService) {}

    @Post()
    create(@Body() createfeedDto: CreateFeedDto) {
        return this.feedService.create(createfeedDto);
    }

    @Get()
    findAll() {
        return this.feedService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.feedService.findOne(+id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updatefeedDto: UpdateFeedDto) {
        return this.feedService.update(+id, updatefeedDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.feedService.remove(+id);
    }
}
