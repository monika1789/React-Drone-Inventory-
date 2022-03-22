let token =  'd3d1fe289ea91d82e1910b46163410acce96aec0960b3e00'

export const server_calls = {
    get: async () => {
        const response = await fetch (`https://drone-inventory-monika.herokuapp.com/api/cars`, {
           method:'GET',
           headers: {
               'Content-Type': 'application/json',
               'x-access-token': `Bearer ${token}`
           }
        });
        if (!response.ok) {
            throw new Error ('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch (`https://drone-inventory-monika.herokuapp.com/api/cars`, {
           method:'POST',
           headers: {
               'Content-Type': 'application/json',
               'x-access-token': `Bearer ${token}`
           },
           body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error ('Failed to fetch data from server')
        }
        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch (`https://drone-inventory-monika.herokuapp.com/api/cars/${id}`, {
           method:'PUT',
           headers: {
               'Content-Type': 'application/json',
               'x-access-token': `Bearer ${token}`
           },
           body: JSON.stringify(data)
        });
    },

    delete: async (id: string) => {
        const response = await fetch (`https://drone-inventory-monika.herokuapp.com/api/cars/${id}`, {
           method:'DELETE',
           headers: {
               'Content-Type': 'application/json',
               'x-access-token':  `Bearer ${token}`
           }
        })
    }
}