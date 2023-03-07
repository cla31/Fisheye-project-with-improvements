// eslint-disable-next-line no-unused-vars
class MediasFactory {
    constructor(data) {
        if (data.image) {
            // eslint-disable-next-line no-undef
            return new ImageMedia(data);
        } else if (data.video) {
            // eslint-disable-next-line no-undef
            return new VideoMedia(data);
        } else {
            //Un objet vide
            return {};
        }
    }
}