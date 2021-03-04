const {Task} = require('../models')
const {to, responseError, responseSuccess} = require('../services/util.service');

module.exports = {
 async create(req, res){
  const body = req.body
  const [error, task] = await to(Task.create(body))
  if (error) return responseError(res, error, 422);
        
  return responseSuccess(res, task, 201);
 }, 
 async get(req, res){
  const [error, task] = await to(Task.findOne({where: {id: 1}}));
  if (error) return responseError(res, error, 422);
  
  return responseSuccess(res, task, 200);
 },
}