import { PrismaClient } from "@prisma/client";
import { Address } from "viem";

export class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async findAll() {
    return this.prisma.user.findMany();
  }

  public async findUserByEthAddress(ethAddress: Address) {
    return this.prisma.user.findUnique({
      where: {
        ethAddress,
      },
    });
  }

  public async createUser(ethAddress: Address) {
    return this.prisma.user.create({
      data: {
        ethAddress,
      },
    });
  }
}
