export default class ContactLocators {

	static cssName = "input[name='name']";
	static cssPhone = "input[name='phone']";
	static cssPhoneCountry = "select[name='phoneCountry']";
	static cssEmail = "input[name='email']";
	static cssGuests = "input[name='guests']";
	static cssComment = ".ui textarea";
	static cssGuests = "input[name='guests']";
	static xpathSend = "//button[text()='Send']";

	static xpathNameError = "//div[text()='Name is mandatory']";
	static xpathEmailError = "//div[text()='Email is mandatory']";
	static xpathCommentError = "//div[text()='Comment is mandatory']";

}