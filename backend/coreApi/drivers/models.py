from django.db import models





# Drivers Model
class Drivers(models.Model):

    # Name
    name = models.CharField(max_length = 20, unique = False)

    # Phone
    phone = models.CharField(max_length = 15, unique = True)

    # Email
    email = models.EmailField(unique = True)

    # trips
    trip = models.CharField(max_length = 30, unique = False)