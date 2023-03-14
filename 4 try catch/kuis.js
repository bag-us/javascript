// TODO 1
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
// TODO 2
const validateNumberInput = (a, b, c) => {   
        if (typeof a !== 'number') {
            throw new ValidationError("'Argumen pertama harus number'");
        }
        else if (typeof b !== 'number') {
            throw new ValidationError("'Argumen kedua harus number'");
        }
        else if (typeof c !== 'number') {
            throw new ValidationError("'Argumen ketiga harus number'");
        } 
}

const detectTriangle = (a, b, c) => {
    // TODO 3
    try {
        validateNumberInput(a,b,c); 
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(`Invalid data: ${error.message}`);
        } else if (error instanceof ReferenceError) {
            console.log(error.message);
        } else {
            console.log(error.stack);
        }
    }
    if (a === b && b === c) {
        return 'Segitiga sama sisi';
      }
    
      if (a === b || a === c || b === c) {
        return 'Segitiga sama kaki';
      }
    
      return 'Segitiga sembarang';
  };
// console.info(detectTriangle(1,3,4));
console.info(detectTriangle(1,"",4));
