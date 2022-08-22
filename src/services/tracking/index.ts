import IUserRepository from '../../repositories/IUserRepository'


class TrackingService {
  
  constructor(readonly repository: IUserRepository) {}

  async save () : Promise<boolean> {
    return true
  }
}

export default TrackingService;