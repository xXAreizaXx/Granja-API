// NestJS
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Query } from "@nestjs/graphql";

// Services
import { PorcinesService } from "./porcines.service";

// Entity
import { Porcine } from "./porcine.entity";

// DTO's
import { CreatePorcineDto } from "src/dto/porcines.dto";

@Resolver()
export class PorcinesResolver {
    constructor(private porcineService: PorcinesService) {}

    @Query(() => [Porcine])
    porcines() {
        return this.porcineService.findAll();
    }

    @Query(() => Porcine)
    porcine(@Args("id") id: number) {
        return this.porcineService.findOne(id);
    }

    @Mutation(() => Porcine)
    createPorcine(
        @Args("createPorcineInput") createPorcineInput: CreatePorcineDto
    ) {
        return this.porcineService.create(createPorcineInput);
    }

    @Mutation(() => Porcine)
    updatePorcine(
        @Args("id") id: number,
        @Args("updatePorcineInput") updatePorcineInput: CreatePorcineDto
    ) {
        return this.porcineService.update(id, updatePorcineInput);
    }

    @Mutation(() => Porcine)
    removePorcine(@Args("id") id: number) {
        return this.porcineService.remove(id);
    }
}
