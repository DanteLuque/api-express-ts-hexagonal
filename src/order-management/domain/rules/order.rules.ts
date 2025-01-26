import { MaxValueNumberSpecification } from "./specification"

export class OrderRules{
    static validate(quantity: number): void{
        const MaxValueNumberRule = new MaxValueNumberSpecification(2);

        if(!MaxValueNumberRule.isSatisfiedBy(quantity)){
            throw new Error(MaxValueNumberRule.errorMessage(`No puedes comprar más de ${MaxValueNumberRule.getMaxValue()} productos y solicitaste ${quantity}`));
        }
    }
}