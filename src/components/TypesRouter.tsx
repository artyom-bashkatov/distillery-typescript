import React, {Component} from 'react';
import { RouteComponentProps } from 'react-router-dom';

type RouteParams = {
  id: string
}

interface IPost {
  title?: string,
  body?: string
}

type PostState = {
  post: IPost;
}

class Post extends Component<RouteComponentProps<RouteParams>, PostState> {
  state = {
    post: {
      title: '',
      body: ''
    },
  }

  componentDidMount() {
    // typization route example
    const id = this.props.match.params.id
  }

  render() {
    const { title, body } = this.state;
    return <>
      <p>{title}</p>
      <p>{body}</p>
    </>
  }
}

export { Post };