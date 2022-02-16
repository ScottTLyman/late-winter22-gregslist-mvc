import { generateId } from "../Utils/generateId.js"

export class House {
  constructor({ bedrooms, bathrooms, sqFootage, garage, description, price, imgUrl }) {
    this.id = generateId()
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.sqFootage = sqFootage
    this.garage = garage
    this.description = description
    this.price = price
    this.imgUrl = imgUrl
  }
  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-dark text-light rounded shadow p-2">
          <img class="img-fluid rounded" src="${this.imgUrl}" alt="house image">
          <div class="p-3">
            <p># of Bedrooms: ${this.bedrooms}</p>
            <p># of Bathrooms: ${this.bathrooms}</p>
            <p>Total Sq.Footage: ${this.sqFootage}</p>
            <p>Garage: ${this.garage}</p>
            <P>Description: ${this.description}</p>
            <p>$ ${this.price}</p>
          </div>
          <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> Delete </button>
        </div>
      </div>
    `
  }
}