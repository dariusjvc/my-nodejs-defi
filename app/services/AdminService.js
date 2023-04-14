import Web3 from 'web3';
import {ST_CONTACT_ADDRESS} from '../abis/stakingTokenConf.js'; 
import {ST_CONTACT_ABI} from '../abis/stakingTokenConf.js'; 

import {RT_CONTACT_ADDRESS} from '../abis/rewardTokenConfig.js'; 
import {RT_CONTACT_ABI} from '../abis/rewardTokenConfig.js'; 

import {MT_CONTACT_ADDRESS} from '../abis/mainTokenConfig.js'; 
import {MT_CONTACT_ABI} from '../abis/mainTokenConfig.js'; 

import "dotenv/config.js";


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


/*function getTotalMinted(){ 
    return stToken.methods.balanceOf(process.env.ADMIN_PUBLIC_KEY).call((error, balance) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The balance is: ", balance/100)
          });
}*/
/*
function getTokenName(){

      return stToken.methods.name().call((error,tokenName) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The tokenName is: ",tokenName)
          });

}*/

function transferSTToUser(value){ 
    return stToken.methods.transfer(process.env.USER_PUBLIC_KEY,value).call(
        {from: process.env.ADMIN_PUBLIC_KEY},
        (error,result) => {
        //return stToken.methods.name().call((error,result) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The result is: ",result)
          });
}


function transferSTToSpender(value){ 
    return stToken.methods.transfer(process.env.SPENDER_TOKEN_ADDRESS,value).call(
        {from: process.env.ADMIN_PUBLIC_KEY},
        (error,result) => {
        //return contactList.methods.name().call((error,result) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The result is: ",result)
          });
}

function transferRTToSpender(value){ 
    return rtToken.methods.transfer(process.env.SPENDER_TOKEN_ADDRESS,value).call(
        {from: process.env.ADMIN_PUBLIC_KEY},
        (error,result) => {
        //return contactList.methods.name().call((error,result) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The result is: ",result)
          });
}

function rewardUser(){ 
    return mtToken.methods.issueTokens().call(
        {from: process.env.ADMIN_PUBLIC_KEY},
        (error,result) => {
        //return contactList.methods.name().call((error,result) => {
        if (error) {
            console.log("An error occurred", error)
          }
          console.log("The result is: ",result)
          });
}

export {
    //getTotalMinted,
    transferSTToSpender,
    //getTokenName,
    transferSTToUser,
    transferRTToSpender,
    rewardUser
  };