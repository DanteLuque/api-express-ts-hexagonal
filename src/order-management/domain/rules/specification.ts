export interface Specification<T> {
    isSatisfiedBy(value: T): boolean;
    errorMessage(error: string): string;
}

export class MaxValueNumberSpecification implements Specification<number> {
    private maxValue: number;

    constructor(maxValue: number) {
        this.maxValue = maxValue;
    }

    getMaxValue(): number {
        return this.maxValue;
    }
    
    isSatisfiedBy(value: number): boolean {
        return value <= this.maxValue;
    }
    errorMessage(error: string): string {    
        return error;
    }
}

