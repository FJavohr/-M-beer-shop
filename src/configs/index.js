import axios from "axios";

export const apiURL = 'https://api.punkapi.com/v2/beers'

export const axiosRequest = axios.create({baseURL: apiURL}) 

export const requests = {
  getAllGoods: async (page, per_page) => {
    try{
      const res = await axiosRequest.get('',{
        params: {
          page,
          per_page
        }
      })
      return res.data
    }
    catch(err){
      console.log(err)
    }
  }
}