
const host = 'http://localhost:8090/api/address/get/';


const listAddressAPI = (value:string) => {
    const api = 'listaddress'
    const queryparam = `?searchParam=${value}`
    return `${host + api + queryparam}`
}

const addressBtIdAPI = (value: string) => {
    const api = 'address'
    const queryparam = `?id=${value}`
    return `${host + api + queryparam}`
}

export {listAddressAPI, addressBtIdAPI};