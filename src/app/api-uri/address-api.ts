
import {hosturi} from '../env';


const listAddressAPI = (value: string, pageNo: number, pageSize: number) => {
    const api = 'listaddress'
    const queryparam = `?searchParam=${value}&pageNo=${pageNo}&pageSize=${pageSize}`;
    return `${hosturi + api + queryparam}`;
}

const addressBtIdAPI = (value: string) => {
    const api = 'address'
    const queryparam = `?id=${value}`
    return `${hosturi + api + queryparam}`
}

export {listAddressAPI, addressBtIdAPI};