class invoice_details{
    constructor(order_id, product_id, client_id, quantity, cost){
        this.order_id=order_id;
        this.product_id=product_id;
        this.client_id=client_id;
        this.quantity=quantity;
        this.cost=cost;
    }
}
module.exports=invoice_details;