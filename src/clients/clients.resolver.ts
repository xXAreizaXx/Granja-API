// NestJS
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

// Services
import { ClientsService } from "./clients.service";

// Entity
import { Client } from "./client.entity";

// DTO's
import { CreateClientDto } from "src/dto/clients.dto";

@Resolver()
export class ClientsResolver {
    constructor(private clienteService: ClientsService) {}

    @Query(() => [Client])
    clients() {
        return this.clienteService.findAll();
    }

    @Query(() => Client)
    client(@Args("id") id: number) {
        return this.clienteService.findOne(id);
    }

    @Mutation(() => Client)
    createClient(
        @Args("createClientInput") createClientInput: CreateClientDto
    ) {
        return this.clienteService.create(createClientInput);
    }

    @Mutation(() => Client)
    updateClient(
        @Args("id") id: number,
        @Args("updateClientInput") updateClientInput: CreateClientDto
    ) {
        return this.clienteService.update(id, updateClientInput);
    }

    @Mutation(() => Client)
    removeClient(@Args("id") id: number) {
        return this.clienteService.remove(id);
    }
}
