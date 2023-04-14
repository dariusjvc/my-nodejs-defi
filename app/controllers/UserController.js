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
  var totalMinted = await UserService.getUserSTBalance();
  response = parseFloat(totalMinted)/100;
  res.send(response.toString());
  });

/**
 * @swagger
 * /user/rewardToken/balance:
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
router.get('/rewardToken/balance', async (req, res, next) => {
    let response = null;
    var totalMinted = await UserService.getUserRTBalance();
    response = parseFloat(totalMinted)/100;
    res.send(response.toString());
    });



/**
 * @swagger
 * /user/stakeTokens:
 *   post:
 *     description: stakeTokens
 *     tags:
 *       - user-controller
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: stock
 *         description: user-controller
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Stake'
 *     responses:
 *       200:
 *         description: stakeTokens
 *         schema:
 *           $ref: '#/definitions/Stake'
 */
router.post('/stakeTokens', async (req, res, next) => {
    //console.log(req.body.value)
    var result = await UserService.stakeTokens(req.body.value);
    res.send(result);
    /*Swagger.validateModel('Stock', req.body);
    const response = dao.create(req.body);
    Swagger.validateModel('Stock', response);
    res.send(response);*/
  });

/**
 * @swagger
 * /user/approveStaking:
 *   post:
 *     description: approveStaking
 *     tags:
 *       - user-controller
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: stock
 *         description: user-controller
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Stake'
 *     responses:
 *       200:
 *         description: approveStaking
 *         schema:
 *           $ref: '#/definitions/Stake'
 */
router.post('/approveStaking', async (req, res, next) => {
  //console.log(req.body.value)
  var result = await UserService.approveStaking(req.body.value);
  res.send(result);
  /*Swagger.validateModel('Stock', req.body);
  const response = dao.create(req.body);
  Swagger.validateModel('Stock', response);
  res.send(response);*/
});
  


/**
 * @swagger
 * /user/unstakeTokens:
 *   post:
 *     description: unstakeTokens
 *     tags:
 *       - user-controller
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: unstakeTokens
 *         schema:
 *           $ref: '#/definitions/Transfer'
 */
router.post('/unstakeTokens', async (req, res, next) => {
  //console.log(req.body.value)
  var result = await UserService.unstakeTokens();
  res.send(result);
  /*Swagger.validateModel('Stock', req.body);
  const response = dao.create(req.body);
  Swagger.validateModel('Stock', response);
  res.send(response);*/
});