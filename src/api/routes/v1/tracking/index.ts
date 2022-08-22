import { Router } from 'express';
import TrackingController from '../../../controller/TrackingController';
import TrackingService from '../../../../services/tracking';
import UserRepository from '../../../../repositories/implementation/User/Memory';
import TrackingSchema from '../../../validations/TrackingSchema'
import JoiValidator from '../../../middleware/JoiValidator'


const router = Router();

const repository = new UserRepository()
const service = new TrackingService(repository)
const controller = new TrackingController(service)

router.post('/', JoiValidator(TrackingSchema.post), controller.saveTracking);

export default router;