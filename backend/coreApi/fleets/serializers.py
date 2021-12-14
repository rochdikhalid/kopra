from rest_framework import serializers
from fleets.models import Fleets



# Fleets Serializer
class FleetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Fleets
        fields = (
            'id',
            'size',
            'brand',
            'fleet_type',
            'fleet_model',
            'station'
        )
