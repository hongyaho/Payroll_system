from django.db import models


# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=140, blank=True)
    employee_id = models.IntegerField()
