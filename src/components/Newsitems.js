import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
   let {title,description,imgUrl,newsUrl, author, date} = this.props;
    return (
      <div>
        <div className="card">
            <img src={!imgUrl?"https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg?size=626&ext=jpg":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"> <small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferal" href={newsUrl} target="_blank"  className="btn btn-sm btn-primary">Read in Detail</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitems
