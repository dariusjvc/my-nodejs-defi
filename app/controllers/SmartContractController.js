import * as SmartContractService from "../services/SmartContractService.js";
import express, { response } from 'express';
export const router = express.Router();


/**
 * @swagger
 * /sc/stakingToken/balance:
 *   get:
 *     description: Get the total token minted
 *     tags:
 *       - sc-controller
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: sc-controller
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.get('/stakingToken/balance', async (req, res, next) => {
    let response = null;
    var totalMinted = await SmartContractService.getAdminSTBalance();
    response = parseFloat(totalMinted)/100;
    res.send(response.toString());
    });

/**
 * @swagger
 * /sc/rewardToken/balance:
 *   get:
 *     description: Get the total token minted
 *     tags:
 *       - sc-controller
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: sc-controller
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.get('/rewardToken/balance', async (req, res, next) => {
    let response = null;
    var totalMinted = await SmartContractService.getAdminRTBalance();
    response = parseFloat(totalMinted)/100;
    res.send(response.toString());
    });