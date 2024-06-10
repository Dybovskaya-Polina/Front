class Api {
    mykey = "wknd9Mybx73oyaPD0urLsS4vuaOJXM1qUv3VH3H0G-I"
    key = 'c6b109647c17a64b46e9013cea5fdbb6'
    
    async getWeather(city){
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`);
        const data = await res.json()
        return data
        }
        
        
    async getImg(city){
        const res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${city}&client_id=${this.mykey}`);
        const data = await res.json();
        return data
    }

    async getWeatherDays(id){
        const res = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?id=${id}&appid=${this.key}`)
        const data = await res.json()
        return data
    }
}

export const api = new Api()