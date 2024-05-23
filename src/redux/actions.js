import {
	REQUEST_POSTS, CREATE_POST, FETCH_POSTS,
	SHOW_LOADER, HIDE_LOADER,
	SHOW_ALERT, HIDE_ALERT
} from './types';

export function createPost(post) {
	return {
		type: CREATE_POST,
		payload: post
	}
};

export function fetchPosts() {
	return {
		type: REQUEST_POSTS
	}
/*
	return async dispatch => {
		dispatch(showLoader());
		try {
			const response = await fetch('http://jsonplaceh1111older.typicode.com/posts?_limit=5');
			const json = await response.json();
			setTimeout(() => {
				dispatch({
					type: FETCH_POSTS,
					payload: json
				});
				dispatch(hideLoader());
			}, 500);
		} catch (err) {
			dispatch(showAlert('Помилка! Неможливо завантажити дані з сервера.'));
			dispatch(hideLoader());
		}
	}
*/
};

export function showLoader() {
	return {
		type: SHOW_LOADER
	}
};

export function hideLoader() {
	return {
		type: HIDE_LOADER
	}
};

export function showAlert(text) {
	return dispatch => {
		dispatch({
			type: SHOW_ALERT,
			payload: text
		});

		setTimeout(() => {
			dispatch(hideAlert());
		}, 3000);
	};
};

export function hideAlert() {
	return {
		type: SHOW_ALERT
	}
};
