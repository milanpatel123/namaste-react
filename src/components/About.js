import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('parent constructor');
  }

  componentDidMount() {
    console.log('parent component did mount');
  }
  render() {
    console.log('parent render');
    return (
      <div>
        <h1>About page</h1>
        <UserClass name={'First'} location={'Dehradun (Class)'} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About page</h1>
//       {/* <User name={'Akshay (Function)'} /> */}
//       <UserClass name={'Akshay (Class)'} location={'Dehradun (Class)'} />
//     </div>
//   );
// };

export default About;
