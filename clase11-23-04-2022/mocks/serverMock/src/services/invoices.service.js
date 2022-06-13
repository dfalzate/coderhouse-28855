import UserService from "./user.service.js";

export default class InvoiceService {
  constructor() {
    this.UserService = new UserService();
  }

  async createInvoice() {
    const user = this.UserService.getUsers();
  }
}
