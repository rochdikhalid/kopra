from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from drivers.models import Drivers
from drivers.serializers import DriverSerializer



@csrf_exempt
def driverApi(request, id = 0):

    # GET DATA
    if request.method == 'GET':
        drivers = Drivers.objects.all()
        drivers_serializer = DriverSerializer(drivers, many = True)
        return JsonResponse(drivers_serializer.data, safe = False)

    # POST DATA
    elif request.method == 'POST':
        driver_data = JSONParser().parse(request)
        driver_serializer = DriverSerializer(data = driver_data)
        if driver_serializer.is_valid():
            driver_serializer.save()
            return JsonResponse('Added Successfully!', safe = False)
        return JsonResponse('Failed to be Added.', safe = False)

    # UPDATE DATA
    elif request.method == 'PUT':
        driver_data = JSONParser().parse(request)
        driver = Drivers.objects.get(id = driver_data['id'])
        driver_serializer = DriverSerializer(driver, data = driver_data)
        if driver_serializer.is_valid():
            driver_serializer.save()
            return JsonResponse('Updated Successfully!', safe = False)
        return JsonResponse('Failed to be Updated.', safe = False)

    # DELETE DATA
    elif request.method == 'DELETE':
        driver = Drivers.objects.get(id = id)
        driver.delete()
        return JsonResponse('Deleted Successfully!', safe = False)

