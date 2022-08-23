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
})
const repository = new QueueRepository(kafkaConnection.connection)
const service = new TrackingService(repository)
const validation = JoiValidator(TrackingSchema.post)
const controller = new TrackingController(service)


router.post('/', validation, controller.saveTracking);

export default router;