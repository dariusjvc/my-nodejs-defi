import Web3 from 'web3';
import {ST_CONTACT_ADDRESS} from '../abis/stakingTokenConf.js'; 
import {ST_CONTACT_ABI} from '../abis/stakingTokenConf.js'; 

import {RT_CONTACT_ADDRESS} from '../abis/rewardTokenConfig.js'; 
import {RT_CONTACT_ABI} from '../abis/rewardTokenConfig.js'; 

import {MT_CONTACT_ADDRESS} from '../abis/mainTokenConfig.js'; 
import {MT_CONTACT_ABI} from '../abis/mainTokenConfig.js'; 

import "dotenv/config.js";


var gasLimit = 2000000;


if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider); 
    } else {
        var web3 = new Web3(new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_INTERNAL_HOST));
    }

//Add the account from which to send the transaction into a wallet
web3.eth.accounts.wallet.add(process.env.ADMIN_PRIVATE_KEY)

const stToken = new web3.eth.Contract(ST_CONTACT_ABI, ST_CONTACT_ADDRESS );
const rtToken = new web3.eth.Contract(RT_CONTACT_ABI, RT_CONTACT_ADDRESS );
const mtToken = new web3.eth.Contract(MT_CONTACT_ABI, MT_CONTACT_ADDRESS );
var decimals = await stToken.methods.getDecimals().call();


function transferSTToUser(value){ 
    return stToken.methods.transfer(process.env.USER_PUBLIC_KEY, value*Math.pow(10, decimals)).send(
        {from: process.env.ADMIN_PUBLIC_KEY, gasLimit: gasLimit},
        (error,result) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The result is: ",result)
          });
}


function transferSTToSpender(value){ 
    return stToken.methods.transfer(MT_CONTACT_ADDRESS,value*Math.pow(10, decimals)).send(
        {from: process.env.ADMIN_PUBLIC_KEY, gasLimit: gasLimit},
        (error,result) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The result is: ",result)
          });
}

function transferRTToSpender(value){ 
    return rtToken.methods.transfer(MT_CONTACT_ADDRESS,value*Math.pow(10, decimals)).send(
        {from: process.env.ADMIN_PUBLIC_KEY, gasLimit: gasLimit},
        (error,result) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The result is: ",result)
          });
}

function rewardUser(){ 
    return mtToken.methods.issueTokens().send(
        {from: process.env.ADMIN_PUBLIC_KEY, gasLimit: gasLimit},
        (error,result) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The result is: ",result)
          });
}

export {
    transferSTToSpender,
    transferSTToUser,
    transferRTToSpender,
    rewardUser
  };