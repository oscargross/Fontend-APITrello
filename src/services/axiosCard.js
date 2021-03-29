import axios from 'axios'
import querystring from 'querystring'

export const post = async ({ data, query }) => {

    return await axios({
        method: 'get',
//      url: `https://api--trello.herokuapp.com/`,
        url: `https://api.trello.com/1/boards/7GQzKJOi/cards?key=1c1d1d2f9e61ecbc410102acc2b7d4ed&token=6fb62d2e3fdcef0aafc8daadccaa2cb0e4302ee834b7b7607267e0fcf2021d04`,
        data: data
    }).then((res) => {

        if (res.status) {
            return { error: false, message: res.data }
        }
        return { error: true }
    });

}

export const get = async ({ query }) => {

    axios({
        method: 'get',
//      url: `https://api--trello.herokuapp.com/`,

        url: `https://api.trello.com/1/boards/7GQzKJOi/cards?key=1c1d1d2f9e61ecbc410102acc2b7d4ed&token=6fb62d2e3fdcef0aafc8daadccaa2cb0e4302ee834b7b7607267e0fcf2021d04`,
    }).then((res) => {
        if (res.status) {
            return { error: false }
        }
        return { error: true }
    });
}

export const getCards = async () => {

    return await axios({
        method: 'get',
//      url: `https://api--trello.herokuapp.com/`,

        url: `https://api.trello.com/1/boards/7GQzKJOi/cards?key=1c1d1d2f9e61ecbc410102acc2b7d4ed&token=6fb62d2e3fdcef0aafc8daadccaa2cb0e4302ee834b7b7607267e0fcf2021d04`,
    }).then((res) => {
        return { error: false , message: res.data }
        
    });
}


export const getChecklists = async (idCard) => {
    return await axios({
        method: 'get',
//      url: `https://api--trello.herokuapp.com/`,

        url: 'https://api.trello.com/1/cards/'+idCard+'/checklists?key=1c1d1d2f9e61ecbc410102acc2b7d4ed&token=6fb62d2e3fdcef0aafc8daadccaa2cb0e4302ee834b7b7607267e0fcf2021d04',
    }).then((res) => {
        return { error: false , message: res.data }
        
    });
}
