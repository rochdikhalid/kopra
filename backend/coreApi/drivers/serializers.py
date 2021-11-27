from rest_framework import serializers
from drivers.models import Drivers




# Drivers Serializer
class DriverSerializer(serializers.ModelSerializer):

    class Meta:
        model = Drivers
        fields = (
            'id',
            'name',
            'phone',
            'email',
            'trip'
        )