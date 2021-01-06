import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>

        <Post
          nomeUsuario={'Monalisa'}
          fotoUsuario={'https://picsum.photos/50/5'}
          fotoPost={'https://picsum.photos/180/150'}
        />
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/250/160'}
        />

        <Post
          nomeUsuario={'Nino'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/170'}
        />
      </div>
    );
  }
}

export default App;
