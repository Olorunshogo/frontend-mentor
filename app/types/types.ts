
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
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    wind_speed_10m: string;
    weather_code: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    wind_speed_10m: number[];
    weather_code: number[];
    precipitation?: number[];
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    wind_speed_10m: string;
    weather_code: string;
    precipitation?: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
    precipitation_sum?: number[];
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    weather_code: string;
    precipitation_sum?: string;
  };
}






