// NestJS
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

// Services
import { FeedsService } from "./feeds.service";

// Entity
import { Feed } from "./feed.entity";

// DTO's
import { CreateFeedDto } from "src/dto/feeds.dto";

@Resolver()
export class FeedsResolver {
    constructor(private feedService: FeedsService) {}

    @Query(() => [Feed])
    feeds() {
        return this.feedService.findAll();
    }

    @Query(() => Feed)
    feed(@Args("id") id: number) {
        return this.feedService.findOne(id);
    }

    @Mutation(() => Feed)
    createFeed(@Args("createFeedInput") createFeedInput: CreateFeedDto) {
        return this.feedService.create(createFeedInput);
    }

    @Mutation(() => Feed)
    updateFeed(
        @Args("id") id: number,
        @Args("updateFeedInput") updateFeedInput: CreateFeedDto
    ) {
        return this.feedService.update(id, updateFeedInput);
    }

    @Mutation(() => Feed)
    removeFeed(@Args("id") id: number) {
        return this.feedService.remove(id);
    }
}
