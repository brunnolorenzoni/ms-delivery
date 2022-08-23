import { Request, Response, NextFunction } from 'express';
import TrackingService from '../../services/tracking';

interface IRegister {
  email: string,
  password: string
}

export default class TrackingController {

  constructor(readonly service: TrackingService) {}

  saveTracking = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    const { order_id, truck_id, truck_position} = req.body
    await this.service.save({ order_id, truck_id, truck_position })
    res.status(200).send()
  }
}