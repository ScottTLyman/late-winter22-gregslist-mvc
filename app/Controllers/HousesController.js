import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Components/HouseForm.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
  let template = ''
  ProxyState.houses.forEach(h => template += h.Template)
  // console.log('drawing houses')
  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses())
    // console.log('houses controller loaded')
  }
  viewHouses() {
    _drawHouses()
    document.getElementById('modal-body-slot').innerHTML = getHouseForm()
  }

  createHouse(event) {
    event.preventDefault()
    let form = event.target
    let newHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      sqFootage: form.sqFootage.value,
      garage: form.garage.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    housesService.createHouse(newHouse)
    let modal = document.getElementById('new-listing')
    form.reset()
    bootstrap.Modal.getOrCreateInstance(modal).hide()
  }
  deleteHouse(houseID) {
    housesService.deleteHouse(houseID)
  }
}