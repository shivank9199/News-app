import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
        <div className='container my-3'>
            <div className="card" style={{style: "18rem"}}>
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{right: "9%"}}>
                      {source}
                    </span>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_main" className="btn btn-dark btn-sn btn-primary">Read more</a>
                </div>
            </div>
        </div> 
    )
  }
}
