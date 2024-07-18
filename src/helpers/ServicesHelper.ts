import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
export { };

type Price = {
    amount: number; 
    vehicle_type: string; 
}

type Addon = {
    service: string;
    price: number; 
}

export class Service {
    name: string;
    prices: Price[]; 
    services_included: string[]
    addons: Addon[]

    constructor(name: string, services_included: string[] = [],  addons: Addon[] = [], prices: Price[] = []) {
        this.name = name;
        this.prices = prices; 
        this.services_included = services_included;
        this.addons = addons; 
    }

    addPrice(priceObj: Price){
        this.prices.push(priceObj); 
    }

}

const services_list = [
    {
        "name": "Exterior Package",
        "prices": [
            { "vehicle_type": "Sedan", "amount": 100 },
            { "vehicle_type": "SUV", "amount": 120 }
        ],
        "includes": [
            "Pre-rinse and foam bath",
            "Hand wash using two bucket method",
            "Hand dry entire vehicle ",
            "Clean glass",
            "Wheel detail and dressing",
            "PH balanced enzyme for impurities "
        ],
        "image": "exterior.jpg", 
        "addons": [
            { "service": "Shampoo, clean, and dress engine", "price": 30 }
        ]
    },
    {
        "name": "Interior Package",
        "prices": [
            { "vehicle_type": "Sedan", "amount": 120 },
            { "vehicle_type": "SUV", "amount": 140 }
        ],
        "includes": [
            "Interior vacuum",
            "Window cleaning",
            "Remove and wash mats",
            "Interior detail of dash and all screens",
            "Steam cleaning",
            "Doors and jams wipe down",
        ],
        "image": "interior.jpg", 
        "addons": [
        ]
    },
    {
        "name": "Full Package",
        "prices": [
            { "vehicle_type": "Sedan", "amount": 180 },
            { "vehicle_type": "SUV", "amount": 230 }
        ],
        "includes": [
            "Everything included in Interior and Exterior packages"
        ],
        "image": "full.jpg", 
        "addons": [
            { "service": "Shampoo, clean, and dress engine", "price": 30 }
        ]
    }
]

export const getServices = () => {
    var services = []
    for (var service of services_list){
        const new_service = new Service(service["name"], service["includes"], service["addons"]);
        for (var price of service["prices"]){
            new_service.addPrice(price)
        }
        services.push(new_service);
    }
    return services; 
}
const SERVICES_API_URL = 'http://127.0.0.1:8000/api/services/';
const REVIEWS_API_URL = 'http://127.0.0.1:8000/api/reviews/';

export const getServicesAPI = async () => {
  try {
    const response = await axios.get(SERVICES_API_URL);
    var services = [];
    for (var service of response.data){
        const new_service = new Service(service["name"], service["includes"].replaceAll('\r', '').split('\n'), service["addons"]);
        for (var price of service["prices"]){
            new_service.addPrice(price)
        }
        services.push(new_service);
    }
    return services;
  } catch (error) {
    console.error('Axios error:', error);
    return [];
  }
};

export const getReviews = async () => {
    try {
      const response = await axios.get(REVIEWS_API_URL);
      console.log(response.data);
      return response.data['reviews']; 
    } catch (error) {
      console.error('Axios error:', error);
      return [];
    }
  };

export function useFetch<T>(fetchFn: () => Promise<T>): [boolean, T | null]{
    const [isFetching, setIsFetching] = useState(false); 
    const [fetchedData, setFetchedData] = useState<T | null>(null); 
	useEffect(() => {
		async function fetchData(){
			setIsFetching(true); 
			try{
				const data = await fetchFn(); 
				setFetchedData(data); 
                setIsFetching(false); 
			} catch(err){
			}
		}
		fetchData(); 
	}, []); 
	
	return [isFetching, fetchedData]
}