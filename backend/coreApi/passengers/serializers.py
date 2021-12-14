from rest_framework import serializers
from passengers.models import Passengers



# Passengers Serializer
class PassengerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Passengers
        fields = (
            'id',
            'name',
            'email',
            'dob',
            'gender',
            'subscription'
        )
