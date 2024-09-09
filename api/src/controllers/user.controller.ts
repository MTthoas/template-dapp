import { Request, Response } from "express";
import { isAddress } from "viem";
import { UserService } from "../services/user.service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async getUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.findAll();
    res.send(users);
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    const ethAddress = req.params.ethAddress;
    if(isAddress(ethAddress) === false) {
        res.status(400).send({ message: "Invalid ethAddress format" });
        return;
    }
    const user = await this.userService.findUserByEthAddress(ethAddress);
    res.send(user);
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    const ethAddress = req.body.ethAddress;
    if(isAddress(ethAddress) === false) {
        res.status(400).send({ message: "Invalid ethAddress format" });
        return;
    }
    const user = await this.userService.createUser(ethAddress);
    res.send(user);
  }
}