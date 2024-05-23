import React from 'react';

import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
	return (
		<div className="container pt-3">
			<div className="row">
				<div className="col">
					<PostForm />
				</div>
			</div>
			<div className="row">
				<div className="col">
					<h2>Синхронні пости</h2>
					<Posts />
				</div>
				<div className="col">
					<h2>Асинхронні пости</h2>
					<FetchedPosts />
				</div>
			</div>
		</div>
	);
};

export default App;
