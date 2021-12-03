from django.urls import path
from stations import views

urlpatterns = [
    path('api/stations/', views.stationApi),
    path('api/stations/<int:id>/', views.stationApi),
]
