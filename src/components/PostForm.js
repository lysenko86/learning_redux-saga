import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost, showAlert } from '../redux/actions';
import { Alert } from './Alert';

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		};
	}

	submitHandler = event => {
		event.preventDefault();
		const { title } = this.state;
		if (!title.trim()) {
			this.props.showAlert('Помилка! Заголовок посту не може бути пустим.');
			return;
		}
		const id = Date.now().toString();
		const newPost = { id, title };
		this.props.createPost(newPost);
		this.setState({ title: '' });
	}

	changeInputHandler = event => {
		event.persist();
		this.setState(prev => ({
			...prev,
			[event.target.name]: event.target.value
		}));
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				{this.props.alert && <Alert text={this.props.alert} />}
				<div className="form-group">
					<label htmlFor="title">Заголовок посту</label>
					<input
						type="text"
						className="form-control"
						id="title"
						value={this.state.title}
						name="title"
						onChange={this.changeInputHandler}
					/>
				</div>
				<button className="btn btn-success" type="submit">Створити</button>
			</form>
		);
	}
};

const mapStateToProps = state => ({
	alert: state.app.alert
});

const mapDispatchToProps = {
	createPost,
	showAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
