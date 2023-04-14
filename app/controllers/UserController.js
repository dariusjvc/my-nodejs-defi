import * as UserService from "../services/UserService.js";
import express, { response } from 'express';
export const router = express.Router();


/**
 * @swagger
 * /user/stakingToken/balance:
 *   get:
 *     description: Get the total token minted
 *     tags:
 *       - user-controller
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: user-controller
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.get('/stakingToken/balance', async (req, res, next) => {
  let response = null;
  var totalMinted = await UserService.getTotalMinted();
  response = parseFloat(totalMinted)/100;
  res.send(response.toString());
  });