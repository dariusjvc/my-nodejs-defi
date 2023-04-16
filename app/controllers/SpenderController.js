import * as SpenderService from "../services/SpenderService.js";
import express, { response } from 'express';
export const router = express.Router();


/**
 * @swagger
 * /spender/stakingToken/balance:
 *   get:
 *     description: Get the total token minted
 *     tags:
 *       - spender-controller
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: spender-controller
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.get('/stakingToken/balance', async (req, res, next) => {
    let response = null;
    var totalMinted = await SpenderService.getSpenderSTBalance();
    response = parseFloat(totalMinted)/100;
    res.send(response.toString());
    });

/**
 * @swagger
 * /spender/rewardToken/balance:
 *   get:
 *     description: Get the total token minted
 *     tags:
 *       - spender-controller
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: spender-controller
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.get('/rewardToken/balance', async (req, res, next) => {
    let response = null;
    var totalMinted = await SpenderService.getSpenderRTBalance();
    response = parseFloat(totalMinted)/100;
    res.send(response.toString());
    });