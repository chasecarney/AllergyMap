export class Location{
        latitude: any;
        longitude: any;

        constructor(lat: any, lon: any){
            this.latitude = lat;
            this.longitude = lon;
        }

        setLocation(lat: any, lon: any){
			this.latitude = lat;
            this.longitude = lon;
		}
}