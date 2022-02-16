import { generateId } from "../Utils/generateId.js"

export class House {
  constructor(bedrooms, bathrooms, sqFootage, garage, description, imgURL) {
    this.id = generateId
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.sqFootage = sqFootage
    this.garage = garage
    this.description = description
    this.imgURL = imgURL
  }
  get Template() {
    return `
      <div class="col-md-4">
        <div class="bg-white rounded shadow">
          <img class="img-fluid rounded-top" src="${this.imgUrl}" alt="house image">
          <div class="p-3">
            <p>${this.bedrooms}</p>
            <p>${this.bathrooms}</p>
            <p>${this.sqFootage}</p>
            <p>${this.garage}</p>
            <P>${this.description}</p>
            <p>$${this.price}</p>
          </div>
          <button class="btn btn-outline-danger" onclick="app.housesController.deleteHouse('${this.id}')"> Delete </button>
        </div>
      </div>
    `
  }
}