import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

//ddf664dc6cb64632ba572cd9f7a9d277

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "sports",
  };

  capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log("this is a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - The news app`;
  }

  async componentDidMount() {
    this.props.setProgress(10);
    console.log("Next clicked");
    await this.updateNews();
    this.props.setProgress(100);
  }

  async updateNews() {
    this.props.setProgress(10);
    console.log("Next clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState((prevState) => ({
      page: prevState.page + 1,
      articles: [...prevState.articles, ...parsedData.articles],
      totalResults: parsedData.totalResults,
      loading: false,
    }));
    this.props.setProgress(100);
  }

  handlePrevclick = async () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, this.updateNews);
    }
  };

  handleNextclick = async () => {
    this.updateNews();
  };

  fetchMoreData = async () => {
    // If there are more articles to load
    if (this.state.articles.length < this.state.totalResults) {
      this.updateNews();
    }
  };

  render() {
    return (
      <>
        <h1 className="text-center">Top Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={element.title ? element.title.slice(0, 45) : "Default Title"}
                    description={element.description ? element.description.slice(0, 88) : "Default Description"}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
