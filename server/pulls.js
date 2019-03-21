const { GraphQLClient } = require('graphql-request');

module.exports = async function pulls(req, res) {
  const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`
    }
  });

  const pullRequests = [];

  const query = `{
    repository(owner: "angular", name: "angular") {
      pullRequests(states: [OPEN], first: 100, orderBy: { direction: DESC, field: UPDATED_AT }) {
        nodes {
          title
          createdAt
          updatedAt
          number
          permalink
          author {
            avatarUrl
            login
          }
          repository {
            owner {
              login
            }
            name
            url
          }
          comments {
            totalCount
          }
        }
      }
    }
  }`;

  const data = await client.request(query);

  data.repository.pullRequests.nodes.forEach(pr => pullRequests.push(pr));

  res.json(pullRequests);
};
