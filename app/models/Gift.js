export class Gift {
  constructor(data) {
    this.id = data.id;
    this.tag = data.tag || '';
    this.url = data.url || '';
    this.opened = data.opened || false;
    this.creatorId = data.creatorId;
    this.profileIdsOpened = data.profileIdsOpened;
  }

  get GiftCardTemplate() {
    return `<div class="col-md-4">
                <div class="card h-100">
                  <div class="card-body">
                    <img class="img-fluid" src="${this.url}" alt="" />
                    <p>${this.tag}</p>
                    <div class="text-center">
                      <button onclick="app.GiftsController.openGift('${this.id}')" class="btn btn-outline-dark rounded">Open!</button>
                    </div>
                  </div>
                </div>
              </div>`;
  }
}
