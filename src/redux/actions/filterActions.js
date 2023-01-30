import { TOOGLE_BRAND, TOOGLE_STOCK } from "../actionTypes/actionTypes"

export const toggleBrand = (brandName)=>{
    return{
      type : TOOGLE_BRAND,
      payload : brandName
    }
  }
export const toggleStock = ()=>{
    return{
      type : TOOGLE_STOCK,
    }
  }