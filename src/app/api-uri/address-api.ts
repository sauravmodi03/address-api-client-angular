
const host = 'http://localhost:8090/api/address/get/';


const listAddressAPI = (value: string, pageNo: number, pageSize: number) => {
    const api = 'listaddress'
    const queryparam = `?searchParam=${value}&pageNo=${pageNo}&pageSize=${pageSize}`
    return `${host + api + queryparam}`
}

const addressBtIdAPI = (value: string) => {
    const api = 'address'
    const queryparam = `?id=${value}`
    return `${host + api + queryparam}`
}

export {listAddressAPI, addressBtIdAPI};