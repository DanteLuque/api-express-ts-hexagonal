import { NonEmptyStringSpecification, PositiveNumberSpecification } from "./specification";

export class ProductRules {
    static validate(name: string, price: number): void {
        
        const NonEmptyStringRule = new NonEmptyStringSpecification();
        const PositiveNumberRule = new PositiveNumberSpecification();

        if (!NonEmptyStringRule.isSatisfiedBy(name)) {
            throw new Error(NonEmptyStringRule.errorMessage("El nombre no puede estar vacío"));
        }

        if (!PositiveNumberRule.isSatisfiedBy(price)) {
            throw new Error(PositiveNumberRule.errorMessage("El precio no puede ser negativo"));
        }
    }
}
