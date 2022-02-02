import { Static, Type } from "@sinclair/typebox";

export const User = Type.Object({
  name: Type.String({ description: 'name of the user' }),
  email: Type.Optional(Type.String({ format: 'email' })),
  age: Type.Number({ description: "The age of the user", minimum: 0 }),
  proffessions: Type.Array(Type.KeyOf(
    Type.Object({
      constructor: Type.Number({ description: 'Constructor proffession' }),
      sailor: Type.Number(),
      fisherman: Type.Number()
    }),
    { description: 'Available proffessions' }
  )),
});

export type UserDtoType = Static<typeof User>;

export const GetUserQuery = Type.Object({
  name: Type.Optional(Type.String()),
  age: Type.Optional(Type.Number())
});

export type GetUserQueryType = Static<typeof GetUserQuery>;