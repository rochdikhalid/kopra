from django.contrib import admin
from django.urls import path, include




urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('stations.urls')),
    path('', include('drivers.urls')),
    path('', include('fleets.urls')),
    path('', include('trips.urls')),
    path('', include('passengers.urls')),
]
