from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from trips.models import Trips
from trips.serializers import TripSerializer



@csrf_exempt
def tripApi(request, id = 0):

    # GET DATA
    if request.method == 'GET':
        trips = Trips.objects.all()
        trips_serializer = TripSerializer(trips, many = True)
        return JsonResponse(trips_serializer.data, safe = False)

    # POST DATA
    elif request.method == 'POST':
        trip_data = JSONParser().parse(request)
        trip_serializer = TripSerializer(data = trip_data)
        if trip_serializer.is_valid():
            trip_serializer.save()
            return JsonResponse('Added Successfully!', safe = False)
        return JsonResponse('Failed to be Added.', safe = False)

    # UPDATE DATA
    elif request.method == 'PUT':
        trip_data = JSONParser().parse(request)
        trip = Trips.objects.get(id = trip_data['id'])
        trip_serializer = TripSerializer(trip, data = trip_data)
        if trip_serializer.is_valid():
            trip_serializer.save()
            return JsonResponse('Updated Successfully!', safe = False)
        return JsonResponse('Failed to be Updated.', safe = False)

    # DELETE DATA
    elif request.method == 'DELETE':
        trip = Trips.objects.get(id = id)
        trip.delete()
        return JsonResponse('Deleted Successfully!', safe = False)
