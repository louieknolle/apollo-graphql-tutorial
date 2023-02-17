const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of mods that teaches "
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of complete track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;
