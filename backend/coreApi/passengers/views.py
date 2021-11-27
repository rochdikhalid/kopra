from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from passengers.models import Passengers
from passengers.serializers import PassengerSerializer



@csrf_exempt
def passengerApi(request, id = 0):

    # GET DATA
    if request.method == 'GET':
        passengers = Passengers.objects.all()
        passengers_serializer = PassengerSerializer(passengers, many = True)
        return JsonResponse(passengers_serializer.data, safe = False)

    # POST DATA
    elif request.method == 'POST':
        passenger_data = JSONParser().parse(request)
        passenger_serializer = PassengerSerializer(data = passenger_data)
        if passenger_serializer.is_valid():
            passenger_serializer.save()
            return JsonResponse('Added Successfully!', safe = False)
        return JsonResponse('Failed to be Added.', safe = False)

    # UPDATE DATA
    elif request.method == 'PUT':
        passenger_data = JSONParser().parse(request)
        passenger = Passengers.objects.get(id = passenger_data['id'])
        passenger_serializer = PassengerSerializer(passenger, data = passenger_data)
        if passenger_serializer.is_valid():
            passenger_serializer.save()
            return JsonResponse('Updated Successfully!', safe = False)
        return JsonResponse('Failed to be Updated.', safe = False)

    # DELETE DATA
    elif request.method == 'DELETE':
        passenger = Passengers.objects.get(id = id)
        passenger.delete()
        return JsonResponse('Deleted Successfully!', safe = False)
