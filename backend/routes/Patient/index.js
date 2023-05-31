const express = require('express');
const router = express.Router();

const singleImageHandlerMiddleware = require("../../middleware/imageHandler");

const { store, index, show, update, remove } = require("../../controllers/PatientController");

/**
 * @swagger
 * '/patients':
 *   post:
 *     summary: API to create patient
 *     description: API to create patient
 *     tags:
 *       - Patient
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/PatientRequest'
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
 *                   $ref: '#/components/schemas/PatientResponse'
 *       '500':
 *         description: Internal Server error
 */
router.post('/', singleImageHandlerMiddleware, store);

/**
 * @swagger
 * '/patients':
 *   get:
 *     summary: API to retreive patient list
 *     description: API to retreive patient list
 *     tags:
 *       - Patient
 *     security:
 *       - bearerAuth: []
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
 *                   type: array
 *                   items:
 *                      $ref: '#/components/schemas/PatientResponse'
 *
 *       '500':
 *         description: Internal Server error
 */
router.get('/', index);

/**
 * @swagger
 * '/patients/{id}':
 *   get:
 *     summary: API to retreive patient detail by id
 *     description: API to retreive patient detail by id
 *     tags:
 *       - Patient
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id of the patient
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
 *                   $ref: '#/components/schemas/PatientResponse'
 *
 *       '500':
 *         description: Internal Server error
 */
router.get('/:id', show);

/**
 * @swagger
 * '/patients/{id}':
 *   put:
 *     summary: API to update patient detail by id
 *     description: API to update patient detail by id
 *     tags:
 *       - Patient
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id of the patient
 *     requestBody:
 *       description: Request body
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PatiientRequest'
 *
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
 *                   $ref: '#/components/schemas/PatientResponse'
 *
 *       '500':
 *         description: Internal Server error
 */
router.put('/:id', singleImageHandlerMiddleware, update);

/**
 * @swagger
 * '/patients/{id}':
 *   delete:
 *     summary: API to delete patient by id
 *     description: API to delete patient by id
 *     tags:
 *       - Patient
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Id of the patient
 *
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
 *                   type: array
 *             example:
 *               success: true
 *               code: 200
 *               message: Success message
 *               data: Success
 *
 *       '500':
 *         description: Internal Server error
 */
router.delete('/:id', remove);

module.exports = router;