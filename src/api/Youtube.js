import axios from 'axios';

const KEY= "AIzaSyBvgAIRZt-E2n3KTy467u9NlBbPJrkFo4g";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});