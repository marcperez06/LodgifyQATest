import Page from "../core/Page.js"
import ContactLocators from "./ContactLocators.js"

class ContactPage extends Page {

    get name() { return $(ContactLocators.cssName) }
    get phone() { return $(ContactLocators.cssPhone) }
    get phoneCountry() { return $(ContactLocators.cssPhoneCountry) }
    get email() { return $(ContactLocators.cssEmail) }
    get guests() { return $(ContactLocators.cssGuests) }
    get comment() { return $(ContactLocators.cssComment) }
    get sendButton() { return $(ContactLocators.xpathSend) }

    get nameError() { return $(ContactLocators.xpathNameError) }
    get phoneError() { return $(ContactLocators.xpathPhoneError) }
    get commentError() { return $(ContactLocators.xpathCommentError) }

    open() {
        super.open('http://localhost/contact.html')
    }

    writeName(nameValue) {
        this.name.setValue(nameValue);
    }

    writePhone(phoneValue) {
        this.phone.setValue(phoneValue);
    }

    writeEmail(emailValue) {
        this.email.setValue(emailValue);
    }

    writeComment(commentValue) {
        this.comment.setValue(commentValue);
    }

    clickOnSend() {
        this.sendButton.click()
    }

}

export default new ContactPage()