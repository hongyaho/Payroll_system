from django.db import models
from users.models import User


# Create your models here.
class Attendance(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='attendance')
    date = models.DateField(auto_now_add=True)
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(auto_now=True)
    start_gps = models.CharField(max_length=255, blank=True, null=True)
    end_gps = models.CharField(max_length=255, blank=True, null=True)


