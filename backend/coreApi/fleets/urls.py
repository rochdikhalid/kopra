from django.urls import path
from fleets import views




urlpatterns = [
    path('api/fleets/', views.fleetApi),
    path('api/fleets/<int:id>/', views.fleetApi),
]

