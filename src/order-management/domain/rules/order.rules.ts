import { MaxValueNumberSpecification } from "./specification"

export class OrderRules{
    static validate(quantity: number): void{
        const quantitySpec = new MaxValueNumberSpecification(2);

        if(!quantitySpec.isSatisfiedBy(quantity)){
            throw new Error(quantitySpec.errorMessage(`No puedes comprar más de ${quantitySpec.getMaxValue()} productos y solicitaste ${quantity}`));
        }
    }
}