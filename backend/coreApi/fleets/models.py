from django.db import models



# Fleets Model
class Fleets(models.Model):

    # Size
    size = models.IntegerField()
    # Brand
    brand = models.CharField(max_length = 20, blank = True, unique = False)
    # Type
    fleet_type = models.CharField(max_length = 20, blank = True, unique = False) 
    # Model
    fleet_model = models.CharField(max_length = 10, blank = True, unique = False)
    # Station
    station = models.CharField(max_length = 20, blank = False, default = '')
