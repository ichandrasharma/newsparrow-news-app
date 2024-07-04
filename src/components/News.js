// import React, { Component } from 'react'
import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: 'in',
//     pageSize: 9,
//     category: 'general'
//   }

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string
//   }

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
// };

const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// constructor(props) {
//   super(props);
//   this.state = {
//     articles: [],
//     loading: true,
//     page: 1,
//     totalResults: 0
//   }
//   document.title = `${this.Capitalize(this.props.category)} - NewSparrow`
// }

// async updateNews() {
const updateNews = async () => {
  props.setProgress(10);
  const base_URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true);
  let data = await fetch(base_URL);
  props.setProgress(40);
  let parsedData = await data.json();
  props.setProgress(70);
  // this.setState({
  //   articles: parsedData.articles,
  //   totalResults: parsedData.totalResults,
  //   loading: false});
  //   this.props.setProgress(100);

  setArticles(parsedData.articles);
  setTotalResults(parsedData.totalResults);
  setLoading(false);
  props.setProgress(100);
};

// async componentDidMount() {
//   // let base_URL  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
//   // this.setState({loading: true});
//   // let data = await fetch(base_URL);
//   // let parsedData = await data.json();
//   // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});

//   this.updateNews();
// }

// prevClick = async () => {
//   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//   // this.setState({loading: true});
//   // let data = await fetch(url);
//   // let parsedData = await data.json();
//   // this.setState({
//   //   page: this.state.page - 1,
//   //   articles: parsedData.articles,
//   //   loading: false
//   // })

//   this.setState({page: this.state.page - 1});
//   this.updateNews();
// }

useEffect(() => {
    document.title = `${Capitalize(props.category)} - NewSparrow`
  updateNews();
  // eslint-disable-next-line
}, []);

// nextClick = async () => {
//   // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
//   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//   //   this.setState({loading: true});
//   //   let data = await fetch(url);
//   //   let parsedData = await data.json();
//   //   this.setState({
//   //   page: this.state.page + 1,
//   //   articles: parsedData.articles,
//   //   loading: false
//   // })
//   // }

//   this.setState({page: this.state.page + 1});
//   this.updateNews();
// }

// fetchMoreData = async() => {
const fetchMoreData = async () => {
  // this.setState({page: this.state.page + 1})
  const base_URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page + 1);
  let data = await fetch(base_URL);
  let parsedData = await data.json();
  // this.setState(
  //   {articles: this.state.articles.concat(parsedData.articles),
  // totalResults: parsedData.totalResults});

  setArticles(articles.concat(parsedData.articles));
  setTotalResults(parsedData.totalResults);
};

// render() {
return (
  // <div className='container my-3'>
  <>
    <h1 className="text-center" style={{ margin: "35px", marginTop: "95px" }}>
      NewSparrow - Aware yourself with Top {Capitalize(props.category)}{" "}
      Headlines
    </h1>
    {loading && <Loader />}

    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
      loader={<Loader />}
    >
      <div className="container my-3">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
    {/* <div className="container d-flex justify-content-between">
          <button disabled = {this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.prevClick}>&laquo; Previous</button>
          <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.nextClick}>Next &raquo;</button>
        </div> */}
    {/* </div> */}
  </>
);
// }
}

// News.defaultProps = {
//   country: "in",
//   pageSize: 9,
//   category: "general",
// };

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
