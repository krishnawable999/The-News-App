// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// export default class App extends Component {
//    a = 'krish';
//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//         <Routes>
//         <Navbar/>
//         <Route path="/" element={<News setProgress = {this.setProgress}   pageSize={this.pageSize} country={"in"} category="general" />} />
//             <Route path="/business" element={<News setProgress = {this.setProgress}   pageSize={this.pageSize} country={"in"} category="business" />} />
//             <Route path="/entertainment" element={<News setProgress = {this.setProgress}   pageSize={this.pageSize} country={"in"} category="entertainment" />} />
//             <Route path="/general" element={<News setProgress = {this.setProgress}   pageSize={this.pageSize} country={"in"} category="general" />} />
//             <Route path="/health" element={<News setProgress = {this.setProgress}   pageSize={this.pageSize} country={"in"} category="health" />} />
//             <Route path="/science" element={<News setProgress = {this.setProgress}   pageSize={this.pageSize} country={"in"} category="science" />} />
//             <Route path="/sports" element={<News setProgress = {this.setProgress}   pageSize={this.pageSize} country={"in"} category="sports" />} />
//             <Route path="/technology" element={<News setProgress = {this.setProgress}   pageSize={this.pageSize} country={"in"} category="technology" />} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )
//   }
// }
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'; 

export default class App extends Component {
  pageSize = 8;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress : 0,
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <BrowserRouter>
          <Routes>
            
            <Route exact path="/" element={<React.Fragment><Navbar /><News setProgress = {this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country={"in"} category="general" /></React.Fragment>} />
            <Route exact path="/business" element={<React.Fragment><Navbar /><News setProgress = {this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country={"in"} category="business" /></React.Fragment>} />
            <Route exact path="/entertainment" element={<React.Fragment><Navbar /><News setProgress = {this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country={"in"} category="entertainment" /></React.Fragment>} />
            <Route exact path="/general" element={<React.Fragment><Navbar /><News setProgress = {this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country={"in"} category="general" /></React.Fragment>} />
            <Route exact path="/health" element={<React.Fragment><Navbar /><News setProgress = {this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country={"in"} category="health" /></React.Fragment>} />
            <Route exact path="/science" element={<React.Fragment><Navbar /><News setProgress = {this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country={"in"} category="science" /></React.Fragment>} />
            <Route exact path="/sports" element={<React.Fragment><Navbar /><News setProgress = {this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country={"in"} category="sports" /></React.Fragment>} />
            <Route exact path="/technology" element={<React.Fragment><Navbar /><News setProgress = {this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country={"in"} category="technology" /></React.Fragment>} />
          </Routes>
          
        </BrowserRouter>
      </div>
    )
  }
}
