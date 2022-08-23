import IKafkaRepository from '../../repositories/IKafkaRepository'


class TrackingService {
  
  constructor(readonly repository: IKafkaRepository) {}

  async save () : Promise<boolean> {
    return true
  }
}

export default TrackingService;