from django.urls import path
from attendances import views
from django.views.decorators.csrf import csrf_exempt
app_name = "attendances"

urlpatterns = [
    path("", views.AttendancesView.as_view()),
    path("<int:pk>/", csrf_exempt(views.AttendanceView.as_view()))
]