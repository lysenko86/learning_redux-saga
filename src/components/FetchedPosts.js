import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Post from './Post';
import { Loader } from './Loader';
import { fetchPosts } from '../redux/actions';

export default () => {
	const dispatch = useDispatch(); // useDispatch - хук, щоб можна було діспетчити різні екшени в стор
	const posts = useSelector(state => state.posts.fetchedPosts); // useSelector - хук, що дає доступ до стору
	const loading = useSelector(state => state.app.loading);

	if (loading) {
		return <Loader />;
	}

	if (!posts.length) {
		return <button
			className="btn btn-primary"
			onClick={() => dispatch(fetchPosts())}
		>Завантажити</button>
	}
	return posts.map(post => <Post post={post} key={post.id} />);
};
