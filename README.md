# Vue Form

Create a JS object for use in form UI, [Zod](https://github.com/colinhacks/zod) 
schema, and various utilities, from a simple JSON object based on 
[AJV](https://github.com/ajv-validator/ajv) values in non-strict mode.

This library is compatible with Vue.js, any UI layer, and any JS backend. It's 
intended for this library to be used in other libraries to easily create 
reliable forms and validation across many different frontend frameworks.

See the [form library](https://github.com/tarcltd/form) for more information.

## Installation

```bash
npx jsr add @tarcltd/form-vue
```

## Usage

```ts
import createForm from "@tarcltd/form-vue";

const { state, schema, isValid } = createForm(
  {
    type: "object",
    properties: {
      name: {
        type: "string",
        minLength: 3,
        pattern: "\w+\s\w+",
      },
      email: {
        type: "email",
        nullable: true,
      },
    },
    required: ["name", "email"],
  },
  {
    defaults: { name: "John Doe", email: "john@doe.com" },
  }
);

console.log(isValid.value); // true
```

## License

MIT
