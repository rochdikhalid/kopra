from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from fleets.models import Fleets
from fleets.serializers import FleetSerializer



@csrf_exempt
def fleetApi(request, id = 0):

    # GET DATA
    if request.method == 'GET':
        fleets = Fleets.objects.all()
        fleets_serializer = FleetSerializer(fleets, many = True)
        return JsonResponse(fleets_serializer.data, safe = False)

    # POST DATA
    elif request.method == 'POST':
        fleet_data = JSONParser().parse(request)
        fleet_serializer = FleetSerializer(data = fleet_data)
        if fleet_serializer.is_valid():
            fleet_serializer.save()
            return JsonResponse('Added Successfully!', safe = False)
        return JsonResponse('Failed to be Added.', safe = False)

    # UPDATE DATA
    elif request.method == 'PUT':
        fleet_data = JSONParser().parse(request)
        fleet = Fleets.objects.get(id = fleet_data['id'])
        fleet_serializer = FleetSerializer(fleet, data = fleet_data)
        if fleet_serializer.is_valid():
            fleet_serializer.save()
            return JsonResponse('Updated Successfully!', safe = False)
        return JsonResponse('Failed to be Updated.', safe = False)

    # DELETE DATA
    elif request.method == 'DELETE':
        fleet = Fleets.objects.get(id = id)
        fleet.delete()
        return JsonResponse('Deleted Successfully!', safe = False)

