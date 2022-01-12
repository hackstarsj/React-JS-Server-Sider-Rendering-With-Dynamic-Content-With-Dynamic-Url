import React from 'react';
import axios from 'axios';
class About extends React.Component {

     
    componentDidMount(){
     }

     static async getInitialProps({ req, res, match }) {
       console.log("===REQ===")
       console.log(req)
       console.log("===RES===")
       console.log(res)
       console.log("===MATCH===")
       var num=(match.params.url_slug)
        const res1 = await axios('https://jsonplaceholder.typicode.com/todos/'+num);
       // item=res1.json()
       const item=res1.data.title;
        return { item }; 
     }    

  


  render() {
    return (
      <div>
        <p> You've been routed to the About Page </p>
          <p>Server Side :  {this.props.item}</p>
      </div>
    );
  }
}
export default About;