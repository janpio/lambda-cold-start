import { objectType, extendType } from "@nexus/schema";

const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
    t.string('email');
    t.string('image');
    t.field('emailVerified', {
      type: 'DateTime'
    })
    t.nonNull.field('createdAt', {
      type: 'DateTime'
    })
  },
});

const Query = extendType({
  type: "Query",
  definition(t) {
    t.list.field("allUsers", {
      type: "User",
      resolve: async (_root, args, ctx) => {
        console.log("allUsers1", Date.now());
        //const result = await ctx.prisma.user.findMany();
        const result = [
          {
            id: 1,
            name: "styxlab",
            createdAt: new Date(),
          },
        ];
        console.log("allUsers2", Date.now());
        return result;
      },
    });
    //t.crud.user();
  },
});

export default [User, Query];
