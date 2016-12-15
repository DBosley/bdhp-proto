export class Feature {
    title: String;
    text: String;
    imageUrl: String;
    flip: Boolean;

    constructor(title: String = '', text: String = '',
        imageUrl: String = '', flip: Boolean = false) {

        this.title = title;
        this.text = text;
        this.imageUrl = imageUrl;
        this.flip = flip;
    }
}