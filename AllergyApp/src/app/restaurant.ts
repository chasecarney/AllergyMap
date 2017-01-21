export class Restaurant{
    name: string;
    address: string;
    open: boolean

    constructor(restaurant: any) {
        this.name = restaurant.name;
        this.address = restaurant.address;
        this.open = restaurant.open;
    }


}
