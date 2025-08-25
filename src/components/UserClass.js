import React from 'react';
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'dummy name',
        location: 'dehradun',
      },
      count: 0,
    };
  }
  async componentDidMount() {
    // console.log(this.props.name, 'did mount');
    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }
  render() {
    // const { name, location } = this.props;
    // const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className='user-card'>
        {/* <h1>Count = {count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} width='300px' />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 8866715463</h4>
      </div>
    );
  }
}

export default UserClass;
