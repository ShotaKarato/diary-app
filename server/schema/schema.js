const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const diaries = [
  {
    id: "1",
    title: "Today's thoughts",
    content:
      "Today's lecture was't too hard. I could actually follow and understand everything covered.",
  },
  {
    id: "1",
    title: "Yesterday",
    content:
      "Today's lecture was't too hard. I could actually follow and understand everything covered.",
  },
];

const DiaryType = new GraphQLObjectType({
  name: "Diary",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    diary: {
      type: DiaryType,
      args: { id: { type: GraphQLString } },
      resolve: (parent, args) => {
        return diaries.filter((diary) => diary.id === args.is);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
