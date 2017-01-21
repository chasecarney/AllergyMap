export class Restaurant{
    name: string;
    vicinity: string;
    opening_hours: any;
    open_now: boolean;
    rating: any;

    constructor(restaurant: any) {
        this.name = restaurant.name;
        this.vicinity = restaurant.vicinity;
        this.opening_hours.open_now = restaurant.open_now;
        this.rating = restaurant.rating;
    }


}
