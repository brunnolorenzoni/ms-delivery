import Joi from 'joi'

export default {
  post: {
    body: Joi.object().keys({
      order_id: Joi.string().uuid().required(),
      truck_id: Joi.string().uuid().required(),
      truck_position: Joi.object().required().keys({
        lat: Joi.number().min(-90).max(90).required(),
        lng: Joi.number().min(-180).max(180).required(),
      })
    })
  }
}