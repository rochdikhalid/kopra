from django.urls import path
from trips import views



urlpatterns = [
    path('api/trips/', views.tripApi),
    path('api/trips/<int:id>/', views.tripApi),
]
