import { Router } from 'express';
import TrackingController from '../../../controller/TrackingController';
import TrackingService from '../../../../services/tracking';
import QueueRepository from '../../../../repositories/implementation/Delivery/KafkaQueue';
import KafkaConnection from '../../../../infrastructure/kafka'

import TrackingSchema from '../../../validations/TrackingSchema'
import JoiValidator from '../../../middleware/JoiValidator'


const router = Router();

const kafkaConnection = new KafkaConnection({
  clientId: 'my-app-consumer',
  brokers: ['localhost:9092']
}).connection
const repository = new QueueRepository(kafkaConnection)
const service = new TrackingService(repository)
const controller = new TrackingController(service)

router.post('/', JoiValidator(TrackingSchema.post), controller.saveTracking);

export default router;