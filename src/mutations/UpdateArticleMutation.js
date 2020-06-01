import {commitMutation} from "react-relay";

const mutation = graphql`
    mutation UpdateArticleMutation($input: UpdateArticleInput!) {
        updateArticle(input: $input) {
            article {
                id,
                title,
                content
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

export const UpdateAticleMutation = {
  mutation,
  commit,
}
