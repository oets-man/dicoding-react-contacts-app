// eslint-disable-next-line no-unused-vars
import React from 'react';
import ContactList from './ContactList';
import { getData } from './data';

class ContactApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: getData(),
		};
		this.onDelete_ev = this.onDelete_ev.bind(this);
	}

	onDelete_ev(id) {
		const contacts = this.state.contacts.filter((contact) => contact.id != id);
		this.setState({ contacts });
	}

	render() {
		return (
			<div className="contact-app">
				<h1>Daftar Kontak</h1>
				<ContactList contacts={this.state.contacts} onDelete={this.onDelete_ev} />
			</div>
		);
	}
}

export default ContactApp;
