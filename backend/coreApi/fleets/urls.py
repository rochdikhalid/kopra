from django.urls import path
from fleets import views




urlpatterns = [
    path('<int:id>', views.fleetApi),
]
