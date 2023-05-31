const express = require('express');

const router = express.Router();
const userController = require("../../controllers/UserController");

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: API to signup
 *     description: API to signup
 *     tags:
 *       - User
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRequest'
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   $ref: '#/components/schemas/UserResponse'
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data:
 *                 example: Additional data
 *       '500':
 *         description: Internal Server error
 */
router.post('/signup', userController.signup);

/**
 * @swagger
 * /users/signin:
 *   post:
 *     summary: API to sigin
 *     description: API to signin
 *     tags:
 *       - User
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserLoginRequest'
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     access_token:
 *                       type: string
 *                     refresh_token:
 *                       type: string
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data:
 *                 example: Additional data
 *       '500':
 *         description: Internal Server error
 */
router.post('/signin', userController.signin);

/**
 * @swagger
 * /users/access-token:
 *   post:
 *     summary: API to generate access token from refresh token
 *     description: API to generate access token from refresh token
 *     tags:
 *       - User
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refresh_token:
 *                 type: string
 *                 description: Refresh Token
 *             example:
 *                 refresh_token : "Refresh Token"
 *             required:
 *               - refresh_token
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     access_token:
 *                       type: string
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data:
 *                 access_token: "Access Token"
 *       '500':
 *         description: Internal Server error
 */
router.post('/access-token', userController.generateAccessToken);

module.exports = router;