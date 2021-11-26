from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from stations.models import Stations
from stations.serializers import StationSerializer



@csrf_exempt
def stationApi(request, id = 0):
    # GET DATA
    if request.method == 'GET':
        stations = Stations.objects.all()
        stations_serializer = StationSerializer(stations, many = True)
        return JsonResponse(stations_serializer.data, safe = False)

    # POST DATA
    elif request.method == 'POST':
        station_data = JSONParser().parse(request)
        station_serializer = StationSerializer(data = station_data)
        if station_serializer.is_valid():
            station_serializer.save()
            return JsonResponse('Added Successfully!', safe = False)
        return JsonResponse('Failed to be Added.', safe = False)

    # UPDATE DATA
    elif request.method == 'PUT':
        station_data = JSONParser().parse(request)
        station = Stations.objects.get(id = station_data['id'])
        station_serializer = StationSerializer(station, data = station_data)
        if station_serializer.is_valid():
            station_serializer.save()
            return JsonResponse('Updated Successfully!', safe = False)
        return JsonResponse('Failed to be Updated.', safe = False)

    # DELETE DATA
    elif request.method == 'DELETE':
        station = Stations.objects.get(id = id)
        station.delete()
        return JsonResponse('Deleted Successfully!', safe = False)
