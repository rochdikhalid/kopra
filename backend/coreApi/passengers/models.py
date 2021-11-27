from django.db import models





# Passengers model
class Passengers(models.Model): 

    # Name
    name = models.CharField(max_length = 20, blank = True, unique = False)

    # Email
    email = models.EmailField(unique = True)

    # Date of birth
    dob = models.DateField()

    # Gender
    gender = models.CharField(max_length = 7, blank = False, default = '')

    # Subscription
    subscription = models.CharField(max_length = 10, blank = False, default = '')
    
