import { Gps } from "./gps.model";

export class SearchInfo{
    constructor(
        public gps: Gps,
        public distance: string,
        public category: string
    ){}
}