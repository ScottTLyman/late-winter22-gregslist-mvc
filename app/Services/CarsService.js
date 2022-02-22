
import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { api } from "./AxiosService.js";



class CarsService {
  async getAllCars() {
    const res = await api.get('cars')
    console.log('[CarsService: getAllCars', res.data)
    ProxyState.cars = res.data.map(rd => new Car(rd))
  }
  async createCar(newCar) {
    const res = await api.post('cars', newCar)
    console.log('[CarsService: createCar', res.data)
    let realCar = new Car(res.data)
    ProxyState.cars = [realCar, ...ProxyState.cars]
  }

  async deleteCar(carId) {
    console.log('service deleting car', carId);
    const res = api.delete('cars/' + carId)
    console.log('[CarsService: deleteCar', res.data)
    ProxyState.cars = ProxyState.cars.filter(c => c.id != carId)
  }

}

export const carsService = new CarsService()