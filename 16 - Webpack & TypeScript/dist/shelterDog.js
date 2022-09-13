import Dog from "./dog.js";
export default class ShelterDog extends Dog {
    constructor(name, breed, age, shelter) {
        super(name, breed, age);
        this.shelter = shelter;
    }
}
