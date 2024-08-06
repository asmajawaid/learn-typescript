Structural typing is a way to type-check based on the structure or shape of data rather than their explicit types. This concept is common in languages like TypeScript, where you can define an object literal's type based on the structure it has. Here's an overview and example:

### Overview

1. **Structural Typing:** Checks the type based on the object's shape (i.e., properties and methods) rather than its explicit name or declaration.
2. **Object Literals:** Objects defined directly in the code using curly braces `{}` with key-value pairs.

### Example in TypeScript

Consider the following TypeScript example:

```typescript
interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 30
};

// Another object with the same structure
const anotherPerson = {
    name: "Bob",
    age: 25
};

// Function accepting an object that conforms to the Person interface
function greet(person: Person): string {
    return `Hello, ${person.name}!`;
}

console.log(greet(person)); // Output: Hello, Alice!
console.log(greet(anotherPerson)); // Output: Hello, Bob!
```

In this example:

- The `Person` interface defines a structure with `name` and `age` properties.
- The `person` object conforms to the `Person` interface.
- The `anotherPerson` object also matches the `Person` structure, so it can be passed to the `greet` function.

### Key Points

1. **Type Compatibility:** An object is considered to be of a certain type if it has all the required properties of that type, regardless of other extra properties.
2. **Type Inference:** TypeScript can infer the type of an object literal from its structure, making it easier to work with structural types.
3. **Flexible and Safe:** Structural typing provides flexibility by allowing different objects with the same shape to be treated as the same type, enhancing code reuse and safety.

### Advanced Example

Here's a more advanced example with nested structures and optional properties:

```typescript
interface Address {
    street: string;
    city: string;
    zipCode?: string; // Optional property
}

interface ExtendedPerson extends Person {
    address: Address;
    phone?: string; // Optional property
}

const extendedPerson: ExtendedPerson = {
    name: "Carol",
    age: 40,
    address: {
        street: "123 Main St",
        city: "Somewhere"
    }
};

function printPersonDetails(person: ExtendedPerson): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Address: ${person.address.street}, ${person.address.city}`);
    if (person.address.zipCode) {
        console.log(`Zip Code: ${person.address.zipCode}`);
    }
    if (person.phone) {
        console.log(`Phone: ${person.phone}`);
    }
}

printPersonDetails(extendedPerson);
```

In this advanced example:

- The `Address` interface has an optional `zipCode` property.
- The `ExtendedPerson` interface extends `Person` and includes an `address` and an optional `phone` property.
- The `extendedPerson` object conforms to the `ExtendedPerson` structure.
- The `printPersonDetails` function prints details, checking for optional properties.

### Conclusion

Structural typing with object literals allows you to define flexible and reusable types based on the structure of the data. This approach is particularly powerful in TypeScript, enabling type safety while maintaining flexibility.