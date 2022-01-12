import React from 'react';
import axios from 'axios';

const About2=(props)=> {
    return (
      <div>
        <p>This is a static paragraph, the next line is async.</p>
        <p>Server Data  : {props.item}</p>
      </div>
    );
}

About2.getInitialProps = async ({ req, res, match, history, location, ...ctx })  => {
    var num=(match.params.url_slug)
    const res1 = await axios('https://jsonplaceholder.typicode.com/todos/'+num);
    // item=res1.json()
    const item=res1.data.title;
   return { item }; 
}

export default About2;