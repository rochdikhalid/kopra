from django.urls import path
from stations import views

urlpatterns = [
    path('', views.stationApi),
]