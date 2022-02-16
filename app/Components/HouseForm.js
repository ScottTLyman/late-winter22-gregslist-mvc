export function getHouseForm() {
  return `
  <form class="row  p-2" onsubmit="app.housesController.createHouse(event)">
  <h3 class="col-12">Create a House</h3>
  <div class="mb-3 col-3">
    <label for="" class="form-label">Bedrooms</label>
    <input required type="text" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="helpId"
      placeholder="">
  </div>
  <div class="mb-3 col-3">
    <label for="" class="form-label">Bathrooms</label>
    <input required type="text" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="helpId"
      placeholder="">
  </div>
  <div class="mb-3 col-3">
    <label for="" class="form-label">Sq.Footage</label>
    <input required type="text" class="form-control" name="sqFootage" id="sqFootage" aria-describedby="helpId"
      placeholder="" value="1500" min="750">
  </div>
  <div class="mb-3 col-3">
    <label for="" class="form-label">Garage</label>
    <input required type="text" class="form-control" name="garage" id="garage" aria-describedby="helpId"
      placeholder="">
  </div>
  <div class="mb-3 col-12">
    <label for="" class="form-label">Description</label>
    <input maxlength="75" required type="text" class="form-control" name="description" id="description"
      aria-describedby="helpId" placeholder="">
      </div>
      <div class="mb-3 col-3">
        <label for="" class="form-label">Price</label>
        <input required type="number" class="form-control" name="price" id="price" aria-describedby="helpId"
          placeholder="">
      </div>
  <div class="mb-3 col-9">
    <label for="" class="form-label">ImgUrl</label>
    <input required type="text" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="helpId"
      placeholder="">
  </div>
  <button class="col-4 offset-8 btn btn-success"> Create</button>
</form>
  `
}