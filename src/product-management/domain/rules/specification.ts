export interface Specification<T> {
    isSatisfiedBy(value: T): boolean;
    errorMessage(err: string): string;
}

export class PositiveNumberSpecification implements Specification<number> {
    isSatisfiedBy(number: number): boolean {
        return number >= 0;
    }
    errorMessage(error: string): string {    
        return error;
    }
}


export class NonEmptyStringSpecification implements Specification<string> {
    isSatisfiedBy(string: string): boolean {
        return string.trim().length > 0;
    }
    errorMessage(error: string): string {
        return error;
    }
}

