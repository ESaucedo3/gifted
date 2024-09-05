export class Gift {
  constructor(data) {
    this.tag = data.tag || '';
    this.url = data.url || '';
    this.opened = data.opened || false;
    this.creatorId = data.creatorId;
    this.profileIdsOpened = data.profileIdsOpened;
  }
}
