import {commitMutation} from "react-relay";

const mutation = graphql`
    mutation CreateArticleMutation($input: CreateArticleInput!) {
        createArticle(input: $input) {
            article {
                id,
            }
        }
    }
`

function commit(environment, article) {
  return new Promise((resolve, reject) => {
    return commitMutation(
      environment,
      {
        mutation,
        variables: {
          input: article
        },
        onCompleted: (response, errors) => resolve({response, errors}),
        onError: reject,
      }
    )
  });
}

export const CreateAticleMutation = {
  mutation,
  commit,
}
