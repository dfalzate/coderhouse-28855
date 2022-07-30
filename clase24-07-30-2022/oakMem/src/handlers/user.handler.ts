import { Context, helpers } from "../deps.ts";
import type { User } from "../types/user.type.ts";

const users: User[] = [
  {
    id: "1",
    name: "User1",
    email: "email1@email.com",
  },
  {
    id: "2",
    name: "User2",
    email: "email2@email.com",
  },
];

export function getUsers(ctx: Context) {
  ctx.response.body = users;
  ctx.response.status = 200;
}
export function getUser(ctx: Context) {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  const user: User | undefined = users.find((_user: User) => _user.id === id);
  if (user) {
    ctx.response.status = 200;
    ctx.response.body = user;
  } else {
    ctx.response.status = 400;
  }
}
export async function crateUser(ctx: Context) {
  const user: User = await ctx.request.body().value;
  user.id = crypto.randomUUID();
  users.push(user);
  ctx.response.status = 201;
  ctx.response.body = user;
}
export function updateUser(ctx: Context) {}
export function deleteUser(ctx: Context) {}
