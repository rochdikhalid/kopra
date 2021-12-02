from django.urls import path
from drivers import views

urlpatterns = [
    path('<int:id>', views.driverApi),
]
