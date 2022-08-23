import IKafkaRepository from '../../repositories/IKafkaRepository'

interface tracking {
  order_id: string,
  truck_id: string,
  truck_position: {
    lat: number,
    lng: number
  },
}

class TrackingService {
  
  constructor(readonly kafkaRepository: IKafkaRepository) {}

  async save ({order_id, truck_id, truck_position}: tracking) : Promise<void> {
    const { lat, lng } = truck_position
    const message = {
      key: truck_id,
      value: JSON.stringify({ lat, lng }),
      headers: { order_id, truck_id }
    }
    await this.kafkaRepository.produce(message, 'tracking')
  }
}

export default TrackingService;