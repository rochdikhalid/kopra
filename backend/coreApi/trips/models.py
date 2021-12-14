from django.db import models



# Stations Model
class Trips(models.Model):

    # Trip from
    trip_from = models.CharField(max_length = 30)
    # Trip to
    trip_to = models.CharField(max_length = 30)
    # Duration
    duration = models.FloatField()
    # Distance
    distance = models.FloatField()
