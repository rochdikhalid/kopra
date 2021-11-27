from rest_framework import serializers
from trips.models import Trips




# Stations Serializer
class TripSerializer(serializers.ModelSerializer):

    class Meta:
        model = Trips
        fields = (
            'id',
            'trip_from',
            'trip_to',
            'duration',
            'distance'
        )