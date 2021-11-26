from rest_framework import serializers
from stations.models import Stations




# Stations Serializer
class StationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stations
        fields = (
            'id',
            'name',
            'location_string',
            'loc_stringify',
            'capacity',
            'area'
        )