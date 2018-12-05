import ReactDOM from 'react-dom';
import React, { Component, Fragment } from 'react';
import Header from './components/header';
import Post from './components/post';
import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          userName: 'Thiago Araújo',
          userAvatar: 'person1.png',
          lastView: '2018/11/05 00:08:10',
          postContent:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a nisi sapien. Nullam sed facilisis quam. Vivamus sollicitudin luctus turpis, at rutrum massa gravida ac. Maecenas consectetur molestie bibendum. Duis malesuada, neque vel rhoncus lobortis, nibh dolor ornare neque, id fermentum urna nibh ut massa. Phasellus quis nisl ante. Mauris accumsan nunc quis elit gravida eleifend.',
        },
        {
          userName: 'Kessya Gomes',
          userAvatar: 'person2.png',
          lastView: '2018/11/29 12:55:00',
          postContent:
            'Quisque dignissim enim sit amet condimentum tincidunt. Nullam quis nisl eget libero elementum scelerisque eget a felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur finibus diam in ex vehicula imperdiet. Ut laoreet eros ligula, at condimentum arcu semper ac. Ut efficitur libero vel varius ullamcorper. Aenean finibus faucibus felis, nec aliquam libero hendrerit ut. Aliquam rutrum augue ut leo venenatis, a venenatis nisi pretium.',
        },
        {
          userName: 'Brenner Matheus',
          userAvatar: 'person3.png',
          lastView: '2018/11/29 12:55:00',
          postContent:
            'Vivamus porttitor, velit mollis ornare ornare, tortor ex euismod urna, ut feugiat metus odio maximus nulla. Vestibulum sed leo auctor, eleifend purus quis, tempus ante. Sed consectetur a elit a euismod. Donec auctor ligula a est vehicula, vel interdum nisl egestas. Nam viverra dui nec interdum luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ornare pulvinar libero, tincidunt mattis nulla. Duis ut auctor sem. Fusce mattis auctor neque sed feugiat.',
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.posts.map((post, index) => (
          <Post data={post} key={index} />
        ))}
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
