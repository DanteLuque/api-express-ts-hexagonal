import { NonEmptyStringSpecification, PositiveNumberSpecification } from "./specification";

export class ProductRules {
    static validate(name: string, price: number): void {
        
        const nameSpec = new NonEmptyStringSpecification();
        const priceSpec = new PositiveNumberSpecification();

        if (!nameSpec.isSatisfiedBy(name)) {
            throw new Error(nameSpec.errorMessage("El nombre no puede estar vacío"));
        }

        if (!priceSpec.isSatisfiedBy(price)) {
            throw new Error(priceSpec.errorMessage("El precio no puede ser negativo"));
        }
    }
}
