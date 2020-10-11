import React from 'react';
import './App.css';

class Nama extends React.Component {
  render() {
            return <strong><h1>{this.props.name}</h1></strong>;
  }
}
class ShowAge extends React.Component {
  render() {
    return <h1>{this.props.age} years old</h1>;
  }
}

class Gender extends React.Component {
  render() {
    return <h1>{this.props.gender}</h1>;
  }
}

class Profesi extends React.Component {
  render() {
    return <h1>{this.props.profession}</h1>;
  }
}

class Photo extends React.Component {
  render() {
    return <img src={this.props.photo}></img>;
  }
}

const data = [{name: "John", age: 25, gender: "Male", profession: "Engineer", 
photo: "https://media.istockphoto.com/photos/portarit-of-a-handsome-older-man-sitting-on-a-sofa-picture-id1210237745"}, 
{name: "Sarah", age: 22, gender: "Female", profession: "Designer", 
photo: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378_960_720.jpg"}, 
{name: "David", age: 30, gender: "Male", profession: "Programmer", 
photo: "https://media.istockphoto.com/photos/handsome-mexican-hipster-man-sending-email-with-laptop-picture-id1182472756"}, 
{name: "Kate", age: 27, gender: "Female", profession: "Model", 
photo: "https://cdn.pixabay.com/photo/2015/05/17/20/07/fashion-771505_960_720.jpg" }]

class UserInfo extends React.Component {
  render() {
    return (
      <>
        {data.map(el=> {
          return (
            <div style={{border: "1px solid #000", padding: "20px"}}>
              <Photo photo={el.photo}/> 
              <Nama name={el.name}/>
              <Profesi profession={el.profession}/>
              <ShowAge age={el.age}/> 
            </div>
          )
        })}
      </>
    )
  }
}

function App() {
  return (
    <div>
      <UserInfo />
    </div>
  );
}

export default App;