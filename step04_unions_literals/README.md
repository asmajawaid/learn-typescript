# Union Types

[Union Types Official Docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

[Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

[Narrowing Types in TypeScript](https://formidable.com/blog/2022/narrowing-types/)

[Literal Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)

[Watch Null References: The Billion Dollar Mistake - Tony Hoare](https://www.youtube.com/watch?v=ybrQvs4x0Ps)

To avoid the Billion Dollar Mistake, in the tsconfig.json set [strictNullChecks](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictnullchecks) to true it will raise an error that you have not made a guarantee that the variable exists before trying to use it.

[Truthiness narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#truthiness-narrowing)

[Type Aliases](https://www.geeksforgeeks.org/what-are-type-aliases-and-how-to-create-it-in-typescript/)




In TypeScript, union literals, type literals, and type aliases are different concepts used to define types, but they serve different purposes and are used in different contexts. Here's an explanation of each:

### 1. Union Literals

A union type is a type formed from two or more other types, representing values that may be any one of those types. Union literals specifically refer to union types that are composed of literal values.

```typescript
type Status = "success" | "error" | "loading";
```

In this example, `Status` is a union type that can only have one of the three literal string values: `"success"`, `"error"`, or `"loading"`.

### 2. Type Literals

A type literal is an anonymous type that describes the structure of an object, array, or other complex type. It specifies the shape and properties of an object or other complex data structure.

```typescript
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};
```

Here, `User` is a type literal that defines an object with three properties: `name` (a string), `age` (a number), and `isAdmin` (a boolean).

### 3. Type Alias

A type alias is a way to give a name to any type. It can be used to name primitive types, union types, intersection types, or even type literals. Type aliases make complex types more readable and reusable.

```typescript
type ID = string | number;

type Point = {
  x: number;
  y: number;
};

type UserID = ID;

type Status = "success" | "error" | "loading";
```

In this example:
- `ID` is a type alias for a union type that can be either a `string` or a `number`.
- `Point` is a type alias for a type literal that describes an object with `x` and `y` properties.
- `UserID` is a type alias for `ID`, showing that type aliases can reference other type aliases.
- `Status` is a type alias for a union literal type.

### Summary

- **Union Literals**: Types that can be one of several specified literal values (e.g., `"success" | "error" | "loading"`).
- **Type Literals**: Anonymous types describing the structure of an object or complex type (e.g., `{ name: string; age: number; isAdmin: boolean; }`).
- **Type Alias**: A named reference to any type (primitive, union, intersection, type literal, etc.), used to simplify and reuse complex type definitions (e.g., `type ID = string | number;`).