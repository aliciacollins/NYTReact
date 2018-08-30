import React from "react";
import { Container, Row, Col } from "../Grid";

// ArticleListItem renders a bootstrap list item containing data from the article api call
export const ArticleListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
      
        <Col size="xs-8 sm-9">
          <h3>{props.key}</h3>
          <p>Title: {props.title}</p>
          <p>Summary: {props.snippet}</p>
          <a href={props.href}>Go to Article!</a>
        </Col>
      </Row>
    </Container>
  </li>
);
