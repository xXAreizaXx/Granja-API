// NestJS
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Services
import { FeedsService } from "./feeds.service";

// Controllers
import { FeedsController } from "./feeds.controller";

// Entity
import { Feed } from "./feed.entity";
import { FeedsResolver } from './feeds.resolver';

@Module({
    controllers: [FeedsController],
    imports: [TypeOrmModule.forFeature([Feed])],
    providers: [FeedsService, FeedsResolver],
})
export class FeedsModule {}
