// Make BusinessCard class
export class BusinessCard {
	name: string;
	email: string;
	phone: string;
	company: string;
	constructor(name: string, email?: string, phone?: string, company?: string) {
		this.name = name;
		this.email = email || '';
		this.phone = phone || '';
		this.company = company || '';
	}
	display() {
		let displayString;
		displayString = `
		-----------------------------
		| Name: ${this.name}
		| Email: ${this.email}
		| Phone: ${this.phone}
		| Company: ${this.company}
		-----------------------------
		`
		console.log(displayString);
	}
}