import React from 'react';
import ReactDOM from 'react-DOM';
import 'normalize.css/normalize.css';
import '../style/page.scss';

 class Head extends React.Component{
     render()
     {
         return(<div>
                 <p> Hii all</p>
                 <p>welcome </p>
         </div>);
     };
 }
ReactDOM.render(<Head />,document.getElementById("app"));