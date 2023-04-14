import * as AdminService from "../services/AdminService.js";
import express, { response } from 'express';
export const router = express.Router();

/**
 * @swagger
 * /admin/transferStakingTokensToUser:
 *   post:
 *     description: transferStakingTokensToUser
 *     tags:
 *       - admin-controller
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: stock
 *         description: admin-controller
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Transfer'
 *     responses:
 *       200:
 *         description: transferStakingTokensToUser
 *         schema:
 *           $ref: '#/definitions/Transfer'
 */
router.post('/transferStakingTokensToUser', async (req, res, next) => {
  //console.log(req.body.value)
  var result = await AdminService.transferSTToUser(req.body.value);
    res.send(result);
  /*Swagger.validateModel('Stock', req.body);
  const response = dao.create(req.body);
  Swagger.validateModel('Stock', response);
  res.send(response);*/
});

/**
 * @swagger
 * /admin/transferStakingTokensToSpender:
 *   post:
 *     description: transferStakingTokensToSpender
 *     tags:
 *       - admin-controller
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: stock
 *         description: admin-controller
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Transfer'
 *     responses:
 *       200:
 *         description: transferStakingTokensToSpender
 *         schema:
 *           $ref: '#/definitions/Transfer'
 */
router.post('/transferStakingTokensToSpender', async (req, res, next) => {
  //console.log(req.body.value)
  var result = await AdminService.transferSTToSpender(req.body.value);
    res.send(result);
  /*Swagger.validateModel('Stock', req.body);
  const response = dao.create(req.body);
  Swagger.validateModel('Stock', response);
  res.send(response);*/

 
});

/**
 * @swagger
 * /admin/transferRewardTokensToSpender:
 *   post:
 *     description: transferRewardTokensToSpender
 *     tags:
 *       - admin-controller
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: stock
 *         description: admin-controller
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Transfer'
 *     responses:
 *       200:
 *         description: transferRewardTokensToSpender
 *         schema:
 *           $ref: '#/definitions/Transfer'
 */
router.post('/transferRewardTokensToSpender', async (req, res, next) => {
  //console.log(req.body.value)
  var result = await AdminService.transferRTToSpender(req.body.value);
    res.send(result);
  /*Swagger.validateModel('Stock', req.body);
  const response = dao.create(req.body);
  Swagger.validateModel('Stock', response);
  res.send(response);*/
});

/**
 * @swagger
 * /admin/rewardUser:
 *   post:
 *     description: rewardUser
 *     tags:
 *       - admin-controller
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: rewardUser
 *         schema:
 *           $ref: '#/definitions/Transfer'
 */
router.post('/rewardUser', async (req, res, next) => {
  //console.log(req.body.value)
  var result = await AdminService.rewardUser();
    res.send(result);
  /*Swagger.validateModel('Stock', req.body);
  const response = dao.create(req.body);
  Swagger.validateModel('Stock', response);
  res.send(response);*/
});
