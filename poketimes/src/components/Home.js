import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
    render(){
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <img src={Pokeball} alt="Pokeball"></img>
                            <Link to={`/${post.id}`}>
                                <span className="card-title red-text"> {post.title} </span>
                            </Link>
                            <p> {post.body} </p>
                        </div>
                    </div>
                )
            })
        ) : ( <div className="center"> No posts yet!! </div> );

         return (
            <div className="container home">
                <h1 className="center">Posts</h1>
                { postList }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);