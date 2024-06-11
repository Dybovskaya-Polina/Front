class Api {
    mykey = "wknd9Mybx73oyaPD0urLsS4vuaOJXM1qUv3VH3H0G-I"
    key = 'd6564f2e962d531b593e00507465c9ea'
    
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

    async getWeatherDays(city='Moscow'){
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=${this.mykey}`)
        const data = await res.json()
        console.log(data)
        return data
    }
}

export const api = new Api()