import axios from 'axios'

export default {
  getData: (token, url) =>
    axios({
      'method': 'GET',
      'url': url,
      'headers': {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'example.com',
        'Authorization': 'Bearer ' + token,
      },
      'params': {

      },
    }),



  deleteData: (token, url) =>
    axios({
      'method': 'DELETE',
      'url': url,
      'headers': {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'example.com',
        'Authorization': 'Bearer ' + token,
      },
      'params': {

      },
    }),

  getPost: (token, url, obb) => {




    var config = {
      method: 'post',
      url: url,
      headers: {
        'entityId': '8fefaafb-5a9f-44a6-b499-e4b56998eaf4',
        'clientId': 'bari_test',
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Accept': 'application/pdf',
      },
      data: obb
    };


    return axios(config)



  },
  getFile: (token, url, obb) => {

    var config = {
      method: 'post',
      url: url,
      //responseType: 'arraybuffer',
      headers: {
        'Role': 'OPERATOR',
        'entityId': '8fefaafb-5a9f-44a6-b499-e4b56998eaf4',
        'clientId': 'bari_test',
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
        //'Accept': 'application/zip',
      },
      data: obb
    };

    return axios(config)



  }

}




