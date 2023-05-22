export class Localization{
    constructor(
        public name: string,
        public country: string,
        public city: string,
        public postcode: string,
        public street: string,
        public lat: number,
        public long: number,
        public distance: number,
        public directionAngle: number,
        public placeId: string
    ){}
}