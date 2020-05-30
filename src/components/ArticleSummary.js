import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import {createFragmentContainer} from "react-relay";

const maxSummaryLength = 500;
function ArticleSummary(props) {
  let content = props.articleSummary.content;
  if (content.length > maxSummaryLength) {
    content = props.articleSummary.content.substr(0, maxSummaryLength) + '...';
  }
  return (
    <Row>
      <Col>
        <Link href={`/article/${props.articleSummary.id}`}><a>{props.articleSummary.title}</a></Link>
        <div>
          {content}
        </div>
      </Col>
    </Row>
  )
}

export default createFragmentContainer(
  ArticleSummary,
  {
    articleSummary: graphql`
        fragment ArticleSummary_articleSummary on Article {
            title,
            content
        }
    `
  }
)


