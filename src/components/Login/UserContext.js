import {USERS_LIST} from './db'
const checkUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(USERS_LIST)
            reject()
        }, 250)
    })
}
export default { checkUser, }