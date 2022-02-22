import { generateId } from '../Utils/generateId.js'

export class Car {
  constructor({ id, make, model, year, price, description, color, imgUrl }) {
    this.id = id || '',
      this.make = make || '',
      this.model = model || '',
      this.year = year || 2000,
      this.price = price || 1500,
      this.description = description || '',
      this.color = color || '#ffffff',
      this.imgUrl = imgUrl || ''
  }

  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-dark text-light rounded shadow p-2">
          <img class="img-fluid rounded" src="${this.imgUrl}" alt="car image">
          <div class="p-3">
            <p>${this.make}</p>
            <p>${this.model}</p>
            <p>${this.year}</p>
            <p>${this.description}</p>
            <p>$${this.price}</p>
            <p>Color: ${this.color}</p>
          </div>
          
          <button class="btn btn-outline-danger" onclick="app.carsController.deleteCar('${this.id}')"> Edit </button>
          <button class="btn btn-outline-danger" onclick="app.carsController.deleteCar('${this.id}')"> Delete </button>
        </div>
      </div>
    `
  }
}