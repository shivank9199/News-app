import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 9,
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalArticles: 0
        }
        document.title = `News-App: ${this.props.category} news`
    }

    async componentDidMount() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9c2cae2ce2354c2fa82b990704880ce5&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        this.props.setProgress(40)
        let parseData = await data.json();
        this.props.setProgress(70)
        this.setState({
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100)
    }

    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9c2cae2ce2354c2fa82b990704880ce5&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalArticles: parseData.totalResults
        })

    }

    capitalize = (ip) => {
        return ip.toUpperCase().slice(0,1) + ip.toLowerCase().slice(1,);
    }

  render() {
    return (
      <>
        <h1 style={{marginTop: '70px'}}>NewsApp - Top Headlines: {this.capitalize(this.props.category)}</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner/>}>
        <div className='container'>
        <div className="row">
            {this.state.articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:'Unknown'} date={element.publishedAt} source={element.source.name} />
                       </div>
                })}
        </div>
        </div>

        </InfiniteScroll>
        </>
    )
  }
}