import axios from "axios"

export const getList = async () => {
    
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer testtoken`,
        }
      };
    
    const {data} = await axios.post('https://api.skilla.ru/mango/getList', '', axiosConfig);
    if (data) {
        return data
    }
    
}