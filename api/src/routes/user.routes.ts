import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRoutes {
    public router: Router;
    private userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();
        this.initializeRoutes();
    }

    private initializeRoutes() {

        /**
         * @swagger
         * /users/:
         *   get:
         *     summary: Returns a list of users
         *     tags: [Users]
         *     responses:
         *       200:
         *         description: A list of users
         */
        this.router.get("/users", this.userController.getUsers.bind(this.userController));


        /**
         * @swagger
         * /users/{ethAddress}:
         *   get:
         *     summary: Returns a user
         *     tags: [Users]
         *     parameters:
         *       - in: path
         *         name: ethAddress
         *         required: true
         *         schema:
         *           type: string
         *         description: Ethereum address
         *     responses:
         *       200:
         *         description: A user object
         */
        this.router.get("/users/:ethAddress", this.userController.getUser.bind(this.userController));

        /**
         * @swagger
         * /users/:
         *   post:
         *     summary: Creates a user
         *     tags: [Users]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               ethAddress:
         *                 type: string
         *                 description: Ethereum address
         *     responses:
         *       200:
         *         description: A user object
         */
        this.router.post("/users", this.userController.createUser.bind(this.userController));
    }
}