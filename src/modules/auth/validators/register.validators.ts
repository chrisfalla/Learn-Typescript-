import { RegisterDTO } from "../auth.dto";

export function validateRegister(input: RegisterDTO) {
    const errors: string[] = [];

    

    return {
        isValid: errors.length === 0,
    }
}