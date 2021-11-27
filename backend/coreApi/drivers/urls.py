from django.urls import path
from drivers import views

urlpatterns = [
    path('', views.driverApi),
]