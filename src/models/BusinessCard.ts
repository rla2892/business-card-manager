// Make BusinessCard class
export class BusinessCard {
	constructor(
		public name: string,
		public email?: string,
		public phone?: string,
		public company?: string) {
		this.name = name;
		this.email = email || '';
		this.phone = phone || '';
		this.company = company || '';
	}
	public printCard(): void {
		let displayString;
		displayString = `
		-----------------------------
		| Name: ${this.name}
		| Email: ${this.email}
		| Phone: ${this.phone}
		| Company: ${this.company}
		-----------------------------
		`;
		console.log(displayString);
	}
}