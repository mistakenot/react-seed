export class Zone {
    constructor(
        public id: string,
        public name: string,
        public children: Zone[]) {}
}