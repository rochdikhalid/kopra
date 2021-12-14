from django.db import models



# Stations Model
class Stations(models.Model):

    # Name
    name = models.CharField(max_length = 20, blank = False, default = '', unique = True)
    # Location String
    location_string = models.CharField(max_length = 50, blank = False, default = '')
    # Location Stringify
    loc_stringify = models.CharField(max_length = 70, blank = False, default = '')
    # Capacity
    capacity = models.IntegerField()
    # Area
    area = models.IntegerField()
