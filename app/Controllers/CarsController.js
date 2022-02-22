import { ProxyState } from "../AppState.js"
import { getCarForm } from "../Components/CarForm.js"
import { carsService } from "../Services/CarsService.js"
import { Pop } from "../Utils/Pop.js"

function _drawCars() {
  let template = ''
  ProxyState.cars.forEach(c => template += c.Template)
  document.getElementById('listings').innerHTML = template
}

export class CarsController {
  constructor() {
    ProxyState.on('cars', _drawCars)
    console.log('cars controller loaded')
  }

  async viewCars() {
    try {
      await carsService.getAllCars()
      document.getElementById('modal-body-slot').innerHTML = getCarForm()
    } catch (error) {
      Pop.toast(error.message, 'error')
    }
  }

  async handleSubmit() {
    try {
      window.event.preventDefault()
      let form = window.event.target
      console.log('hi from create car', form);
      let newCar = {
        make: form.make.value,
        model: form.model.value,
        year: form.year.value,
        description: form.description.value,
        price: form.price.value,
        color: form.color.value,
        imgUrl: form.imgUrl.value
      }
      if (
        carsService.createCar(newCar)
      let modal = document.getElementById('new-listing')
      form.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(modal).hide()
    } catch (error) {
      Pop.toast(error.message, 'error')
    }
  }


  deleteCar(carId) {
    console.log('delete card', carId);
    // NOTE just passes the ID of the car to be deleted
    carsService.deleteCar(carId)
  }
}