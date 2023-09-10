export class MensajeClass {
    constructor(
        public id: string,
        public description: string,
        public checked: boolean
    ) {
        this.id = id;
        this.description = description;
        this.checked = checked;   
    } 
}