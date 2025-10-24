
export interface Quote {
    quote: string;
}

export interface Extension {
    name: string;
    logo: string;
    description: string;
    isActive: boolean;
}

export interface WeatherData {
    latitude: number;
    longitude: number;
    elevation: number;
    utcOffsetSeconds: number;
    current: {
        time: Date;
        temperature_2m: number;
        wind_speed_10m: number;
        weather_code: number;
    };
    hourly: {
        time: Date[];
        temperature_2m: number[];
        relative_humidity_2m: number[];
        wind_speed_10m: number[];
        weather_code: number[];
        precipitation?: number[]; // optional if you include
    };
    daily: {
        time: Date[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weather_code: number[];
        precipitation_sum?: number[]; // optional if included
    };
}

export type GeocodingResult = {
  results: {
    name: string;
    country?: string;
    latitude: number;
    longitude: number;
  }[];
};



