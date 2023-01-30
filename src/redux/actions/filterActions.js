import { TOOGLE_BRAND } from "../actionTypes/actionTypes"

export const toggleBrand = (brandName)=>{
    return{
      type : TOOGLE_BRAND,
      payload : brandName
    }
  }