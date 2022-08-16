class Receipt {
  constructor(id, customer, animal, services, paid, due, credit, date){
      this.id = id;
      this.customer = customer;
      this.animal = animal;
      this.services = services;
      this.due = due;
      this.credit = credit;
      this.paid = paid;
      this.date = date;
  }
}

export default Receipt;