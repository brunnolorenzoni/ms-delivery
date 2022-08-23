import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '../helpers/ApiError';
import { ObjectSchema } from 'joi'

type key = 'body' | 'query' | 'params'

interface JoiSchema {
  body?: ObjectSchema,
  query?: ObjectSchema,
  params?: ObjectSchema
}

export default (schema: JoiSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const keys = Object.keys(schema) as Array<key>
    keys.forEach((key: key) => {
      const { error } = schema[key]!.validate(req[key], { allowUnknown: true, abortEarly: false })
      if (error) {
        const { details } = error
        throw new BadRequestError(details.map((i:any) => i.message.replace(/"/gi, '')).join(', '))
        
      }
    })
    
    next()
  }
}

