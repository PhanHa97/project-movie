import Axios from "axios"
import {DOMAIN,TOKEN} from '../util/settings/config'

export class baseService {
    //put json về phía backend
    put = (url,model) => {
        return  Axios({
            url:`${DOMAIN}/${url}`,
            method:'PUT',
            data:model,
            headers: (TOKEN)
        }) 
    }

    post = (url,model) => {
        return Axios({
            url:`${DOMAIN}/${url}`,
            method:'POST',
            data:model,
            headers: (TOKEN)
        }) 
    }


    get = (url) => {
        return Axios({
            url:`${DOMAIN}/${url}`,
            method:'GET',
            headers: (TOKEN)
        })
    }

    delete = (url) => {
        return Axios({
            url:`${DOMAIN}/${url}`,
            method:'DELETE',
            headers: (TOKEN)
        })
    }
}