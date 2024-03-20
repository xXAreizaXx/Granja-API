// NextJS
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

// TypeORM
import { Repository } from "typeorm";

// Entity
import { Feed } from "./feed.entity";

// DTO's
import { CreateFeedDto, UpdateFeedDto } from "../dto/feeds.dto";

@Injectable()
export class FeedsService {
    constructor(
        @InjectRepository(Feed)
        private feedRepository: Repository<Feed>
    ) {}

    async create(createFeedDto: CreateFeedDto): Promise<Feed> {
        const Feeds = this.feedRepository.create(createFeedDto);
        return this.feedRepository.save(Feeds);
    }

    findAll(): Promise<Feed[]> {
        return this.feedRepository.find();
    }

    findOne(id: number): Promise<Feed> {
        return this.feedRepository.findOne({
            where: { id },
        });
    }

    async update(id: number, updateFeedDto: UpdateFeedDto): Promise<Feed> {
        const feed = await this.feedRepository.preload({
            id: +id,
            ...updateFeedDto,
        });
        if (!feed) {
            throw new Error("Feed not found");
        }
        return this.feedRepository.save(feed);
    }

    async remove(id: number): Promise<void> {
        const Feeds = await this.feedRepository.findOne({
            where: { id },
        });

        if (!Feeds) {
            throw new Error("Feed not found");
        }
        await this.feedRepository.remove(Feeds);
    }
}
