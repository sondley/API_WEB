'use strict'
var jwtDecode = require('jwt-decode');
const services=require('../services');
const moment = require('moment');
const User = require('../models/user');
var jwt = require('jsonwebtoken');
const Token = require('../models/token');//call the Model

function isAuth(req, res, next){
  if(!req.headers.authorization){
    return res.status(403).send({message : 'no,tienes authorizacion'})
  }else{
      const token= req.headers.authorization.split(' ')[1];
      console.log("token : ", token);
      jwt.verify(token, 'secret', function( err, decode){
        console.log("decode : ", decode);
        //console.log("eroor: ***********", err);
        if(err){
          console.log("eroor: ***********", err);
          return res.status(500).send({message : 'Invalide Token'})
        }else{
            const payload = jwt.decode(token, 'secret');
            if(payload.exp<moment().unix()){
              return res.status(500).send({message : 'El token ha expirado'})
            }else{
              Token.findOne({text: token
              })
              .then(tokens => {
                console.log("aqui", tokens);
                if(tokens.tokenTypeId==1){
                  User.findById({_id: tokens.userId})
                    .then(user => {
                      console.log("heloo: ", user);
                      if(user.typeUsers=='User' || user.typeUsers=='Admin'|| user.typeUsers=='Poster'){
                        next();
                      }else{
                        return res.status(500).send({message : 'Don t Have Access'})
                      }
                  })
                }else{
                  return res.status(500).send({message : 'Invalide Token'})
                }
              })

            }
          }
      })
    }
}



//console.log('isAuth' +isAuth);

module.exports=isAuth;
