import axios from 'axios';

const KEY = 'AIzaSyDddS1XjVosbaESbL3PwOFuv6NwkYRAhQw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

