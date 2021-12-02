from django.urls import path
from passengers import views




urlpatterns = [
    path('<int:id>/', views.passengerApi),
]
