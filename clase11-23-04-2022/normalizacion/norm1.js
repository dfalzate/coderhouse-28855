const { normalize, schema } = require("normalizr");

const blogPosts = {
  id: 10,
  title: "My blogpost",
  description: "Short blogpost description",
  content: "Hello world",
  author: {
    id: 1,
    name: "John Doe",
  },
  comments: [
    {
      id: 1,
      author: {
        id: 2,
        name: "Rob",
      },
      content: "Nice post!",
    },
    {
      id: 2,
      author: {
        id: 3,
        name: "Jane",
      },
      content: "I totally agree with you",
    },
  ],
};

const authSchema = new schema.Entity("authors");

const commentSchema = new schema.Entity("comments", {
  author: authSchema,
});

const postSchema = new schema.Entity("posts", {
  author: authSchema,
  comments: [commentSchema],
});

const dataNormalizada = normalize(blogPosts, postSchema);

// console.log(dataNormalizada);

const util = require("util");

function print(data) {
  console.log(util.inspect(data, false, 12, true));
}

print(dataNormalizada);

console.log(JSON.stringify(blogPosts).length, JSON.stringify(dataNormalizada).length);
