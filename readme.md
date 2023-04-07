Nested Objects
# Declare and Type a nested Object in TypeScriptDeclare and Type a nested Object in TypeScript
Use an interface or a type alias to type a nested object in TypeScript. You can set properties on the interface that point to nested objects.

The type of the object can have as deeply nested properties as necessary.

index.ts
interface Person {
  name: string;
  address: {
    country: string;
    city: string;
  };
}

const person: Person = {
  name: 'Bobby Hadz',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};

# Declare and Type a nested Object in TypeScript
Use an interface or a type alias to type a nested object in TypeScript. You can set properties on the interface that point to nested objects.

The type of the object can have as deeply nested properties as necessary.

index.ts

interface Person {
  name: string;
  address: {
    country: string;
    city: string;
  };
}

const person: Person = {
  name: 'Bobby Hadz',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};

We used an interface to type an object that has nested properties.

The address property points to an object that has country and city properties of type string.

# Using a type alias to type a nested Object
You can also use a type alias to achieve the same result.

index.ts
type Person = {
  name: string;
  address: {
    country: string;
    city: string;
  };
};

const person: Person = {
  name: 'Bobby Hadz',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};

There are some minor differences between type aliases and interface, however, the examples above do the exact same.

# Typing nested objects inline
You might also see examples online that type nested objects inline.

index.ts

const person: {
  name: string;
  address: { country: string; city: string };
} = {
  name: 'Bobby Hadz',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};

However, especially with nested objects, inline types are very difficult to read and should generally be avoided.

# Letting TypeScript infer the type of a nested Object
If you declare a nested object and initialize all of its key-value pairs, you can let TypeScript infer its type.

index.ts

/**
 * const person: {
    name: string;
    address: {
        country: string;
        city: string;
    };
  }
 */
const person = {
  name: 'Bobby Hadz',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};

TypeScript is able to infer the type of the object based on the key-value pairs we have provided upon initialization.

This is a very easy way to learn the type of something - initialize it with values, assign it to a variable and hover over the variable to see its inferred type.
# Marking some of the properties of the object as optional
If you don't have all of the values of the nested object ahead of time, you can mark them as optional, by using a question mark in the type's definition.

index.ts

type Person = {
  name: string;
  address?: { // 👈️ address is optional
    country: string;
    city: string;
  };
};

const person: Person = {
  name: 'Bobby Hadz',
};

person.address = {
  country: 'Chile',
  city: 'Santiago',
};

We marked the address property on the nested object as optional, so we aren't required to provide it when initializing the object.

Marking a property as optional means that it can either have its defined type or be undefined.
# Typing nested objects with an index signature
You can use an index signature if you don't know all of the names of an object's properties in advance.
type Person = {
  name: string;
  address: {
    country: string;
    city: string;
    [key: string]: any; // 👈️ index signature
  };
};

const person: Person = {
  name: 'Bobby Hadz',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};

person.address.street = 'Example str. 123';
person.address.postCode = 123;
The {[key: string]: any} syntax is an index signature in TypeScript and is used when we don't know all the names of a type's properties and the shape of the values ahead of time.

The index signature in the examples means that when the address nested object is indexed with a string, it will return a value of any type.
You might also see the index signature {[key: string]: string} in examples. It represents a key-value structure that when indexed with a string returns a value of type string.

The example shows how even though we didn't define the address.street or address.postCode properties, we are still able to set them on the nested object.

# Additional Resources
You can learn more about the related topics by checking out the following tutorials:

How to initialize a typed Empty Object in TypeScript
How to declare an Array of Objects in TypeScript
Dynamically access an Object's Property in TypeScript
How to Add a property to an Object in TypeScript