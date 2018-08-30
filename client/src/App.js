import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { ArticleList, ArticleListItem } from "./components/ArticleList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    articles: {
      docs: []
    },
    articleSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get articles update the articles state
    event.preventDefault();
    API.getArticles(this.state.articleSearch)
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));

  };

  //articles (response) is an object need to be an array docs is an array...how do I pull docs
  
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="articleSearch"
                        value={this.state.articleSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For an Article"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.articles.docs.length ? (
                <h1 className="text-center">No Articles to Display</h1>
              ) : (
                <ArticleList>
                 
                  {this.state.articles.docs.map(item => {
                    return (
                      
                      <ArticleListItem
                        key={item._id}
                        title={item.headline.main}
                        snippet={item.snippet}
                        href={item.web_url}
                        />
                    );
                  })}
                </ArticleList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
