import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"

class HousesService {
  createHouse(newHouse) {
    console.log('service got the house', newHouse)
    let realHouse = new House(newHouse)
    ProxyState.houses = [realHouse, ...ProxyState.houses]
  }
  deleteHouse(houseID) {
    let indexToDelete = ProxyState.houses.findIndex(h => h.id == houseID)
    ProxyState.houses.splice(indexToDelete, 1)
    ProxyState.houses = ProxyState.houses
  }
}

export const housesService = new HousesService()