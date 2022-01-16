import { Static, Type } from "@sinclair/typebox";

export const User = Type.Object({
  name: Type.String({ description: 'name of the user' }),
  email: Type.Optional(Type.String({ format: 'email' })),
  age: Type.Number(),
  proffessions: Type.Array(Type.KeyOf(
    Type.Object({
      constructor: Type.Number(),
      sailor: Type.Number(),
      fisherman: Type.Number()
    })
  )),
});

export type UserDtoType = Static<typeof User>;

export const GetUserQuery = Type.Object({
  name: Type.Optional(Type.String()),
  age: Type.Optional(Type.Number())
});

export type GetUserQueryType = Static<typeof GetUserQuery>;