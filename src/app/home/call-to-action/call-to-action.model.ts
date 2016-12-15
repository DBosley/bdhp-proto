export class CallToAction{
    title: String;
    text: String;
    url: String;
    buttonText: String;

    constructor(title: String = '', text: String = '', url: String = '', buttonText: String = '') {
        this.title = title;
        this.text = text;
        this.url = url;
        this.buttonText = buttonText;
    }
}