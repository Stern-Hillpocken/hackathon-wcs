import { Gps } from "./gps.model";

export class LocalizationDetailed{
    constructor(
        public name: string,
        public website: string,
        public openingHours: string,
        public phone: string,
        public email: string,
        public wheelchair: boolean,
        public adress: string,
        public gps: Gps
    ){}
}