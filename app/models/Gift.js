export class Gift {
  constructor(data) {
    this.tag = data.tag || '';
    this.url = data.url || '';
    this.opened = data.opened || false;
    this.creatorId = data.creatorId || null;
    this.profileIdsOpened = data.profileIdsOpened || [];
  }
}
