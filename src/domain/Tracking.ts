import { v4 as uuidv4 } from 'uuid';

interface truck_position {
  lat: number,
  lng: number
}

interface props {
  id?: string;
  order_id: string;
  truck_id: string;
  truck_position: truck_position;
}

export default class User {
  id: string;
  order_id: string;
  truck_id: string;
  truck_position: truck_position;

  constructor(props: props){
    props.id ? 
      this.id = props.id
    : this.id = uuidv4()

    this.order_id = props.order_id
    this.truck_id = props.truck_id
    this.truck_position = props.truck_position
  }
}