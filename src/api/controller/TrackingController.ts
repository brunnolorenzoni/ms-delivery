import { Request, Response, NextFunction } from 'express';
import TrackingService from '../../services/tracking';

interface IRegister {
  email: string,
  password: string
}

export default class TrackingController {

  constructor(readonly service: TrackingService) {}

  saveTracking = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const result = await this.service.save()
    res.send(result)
  }
}