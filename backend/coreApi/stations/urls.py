from django.urls import path
from stations import views

urlpatterns = [
    path('<int:id>', views.stationApi),
]
