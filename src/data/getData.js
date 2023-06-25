export async function getData(city, days) {
    if (!city)
        return null;
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=684c18b7614a4f2ea69150435231006&q=${city}&days=${days}&aqi=no&alerts=no&lang=ru`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Ошибка запроса');
        }
    } catch (error) {
        console.log(error);
    }
}
