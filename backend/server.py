
import googlemaps
gmaps = googlemaps.Client(key='AIzaSyAuSIXvsB3p4lmd0IUup8OucuMAvFdbYYU')
place_name = 'Luxeglow Auto Spa' 
place_details = gmaps.places(place_name)
place = gmaps.place(place_details['results'][0]['place_id']) 
print(place['result']['reviews'][5])
