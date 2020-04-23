import axios from 'axios'

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}
// https://api.hnpwa.com/v0/news/1.json

function fetchListItem(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}
function fetchCommentItem(pageId){
    return axios.get(`${config.baseUrl}item/${pageId}.json`)
}
function fetchUserInfo(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`)
}

export { fetchListItem, fetchCommentItem, fetchUserInfo }