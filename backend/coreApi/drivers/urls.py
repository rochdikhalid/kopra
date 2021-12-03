from django.urls import path
from drivers import views

urlpatterns = [
    path('api/drivers/', views.driverApi),
    path('api/drivers/<int:id>/', views.driverApi),
]
