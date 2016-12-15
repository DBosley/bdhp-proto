export class Service{
    title: String;
    text: String;
    imageUrl: String;

    constructor(title: String = '', text: String = '', imageUrl: String = '') {
        this.title = title;
        this.text = text;
        this.imageUrl = imageUrl;
    }
}