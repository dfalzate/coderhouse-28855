import { Context, helpers } from "../deps.ts";
import type { User } from "../types/user.type.ts";
import { users } from "../db.ts";
import { Bson } from "../deps.ts";

export async function getUsers(ctx: Context) {
  const response = await users.find({}).toArray();
  if (response) {
    ctx.response.body = response;
    ctx.response.status = 200;
  }
}
export async function getUser(ctx: Context) {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  const user = await users.findOne({ _id: new Bson.ObjectId(id) });
  if (user) {
    ctx.response.status = 200;
    ctx.response.body = user;
  } else {
    ctx.response.status = 400;
  }
}
export async function crateUser(ctx: Context) {
  const user: User = await ctx.request.body().value;
  user._id = new Bson.ObjectId();
  await users.insertOne(user);
  ctx.response.status = 201;
  ctx.response.body = user;
}
export async function updateUser(ctx: Context) {
  const { id } = helpers.getQuery(ctx, { mergeParams: true });
  const user: User = await ctx.request.body().value;
  try {
    await users.updateOne({ _id: new Bson.ObjectId(id) }, { $set: { ...user } }, { upsert: true });
    ctx.response.status = 200;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteUser(ctx: Context) {}
