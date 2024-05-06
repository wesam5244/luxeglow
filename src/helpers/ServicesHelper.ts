export { };

export class Service {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const services_list = [
    {
        "name": "Basic Exterior Package",
        "prices": [
            { "vehicle_type": "", "price": 25 }
        ],
        "includes": [
            "Soap, rinse and hand dry exterior"
        ],
        "addons": []
    },
    {
        "name": "Elite Exterior Package",
        "prices": [
            { "vehicle_type": "Sedan", "price": 100 },
            { "vehicle_type": "SUV", "price": 120 }
        ],
        "includes": [
            "Pre-rinse and foam bath",
            "Hand wash using two bucket method",
            "Hand dry entire vehicle ",
            "Clean glass",
            "Wheel detail and dressing",
            "PH balanced enzyme for impurities "
        ],
        "addons": [
            { "addon": "Shampoo, clean, and dress engine", "price": 30 }
        ]
    },
    {
        "name": "Interior Package",
        "prices": [
            { "vehicle_type": "Sedan", "price": 120 },
            { "vehicle_type": "SUV", "price": 140 }
        ],
        "includes": [
            "Interior vacuum",
            "Window cleaning",
            "Remove and wash mats",
            "Interior detail of dash and all screens",
            "Steam cleaning",
            "Doors and jams wipe down",
        ],
        "addons": [
        ]
    },
    {
        "name": "Full Package",
        "prices": [
            { "vehicle_type": "Sedan", "price": 180 },
            { "vehicle_type": "SUV", "price": 230 }
        ],
        "includes": [
            "Everything included in Interior and Exterior packages"
        ],
        "addons": [
            { "addon": "Shampoo, clean, and dress engine", "price": 30 }
        ]
    }
]

export const getServices = () => {
    var services = []
    for (var service of services_list){
        const new_service = new Service(service["name"]);
        services.push(new_service);
    }
    return services; 
}