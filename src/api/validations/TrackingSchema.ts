import Joi from 'joi'

export default {
  post: {
    body: Joi.object().keys({
      id: Joi.string().required(),
      lat: Joi.number().min(-90).max(90).required(),
      lng: Joi.number().min(-180).max(180).required(),
    })
  }
}