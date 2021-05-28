from django.urls import path
from attendances import views

app_name = "attendances"

urlpatterns = [
    path("", views.AttendanceView.as_view())
]