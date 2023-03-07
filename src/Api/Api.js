import axios from "axios"

export const getList = async () => {
    
    let axiosConfig = {
        params: {
            limit: '10000',
        },
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

export const getDayList = async (day) => {
    let axiosConfig = {
        params: {
            limit: 1000,
            date_start: day,
            date_end: day
        },
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer testtoken`,
        }
    };

    const {data} = await axios.post('https://api.skilla.ru/mango/getList', '', axiosConfig);
    if (data) {
        return data.total_rows
    }
}

export const getRecord = async (id, partner) => {

    let axiosConfig = {
        params: {
            record: `${id}`,
            partnership_id: partner
        },
        headers: {
            // 'Content-Disposition': `filename="record.mp3"`,
            'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
            // 'Content-Transfer-Encoding': 'binary',
            "Authorization": `Bearer testtoken`,
        }
    };

    const {data} = await axios.post('https://api.skilla.ru/mango/getRecord', '', axiosConfig)
    if (data) {
        console.log(data)
        return data
    }
}