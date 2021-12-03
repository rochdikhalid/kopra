from django.urls import path
from passengers import views




urlpatterns = [
    path('api/passengers/', views.passengerApi),
    path('api/passengers/<int:id>/', views.passengerApi),
]

