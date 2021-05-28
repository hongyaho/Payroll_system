from rest_framework import serializers
from users.serializers import UserSerializer

from .models import Attendance


class ReadAttendanceSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Attendance
        fields = ("user", "date", "start_time", "end_time", "start_gps", "end_gps",)


class WriteAttendanceSerializer(serializers.Serializer):
    end_time = serializers.TimeField(default="00:00:00")
    start_gps = serializers.CharField(max_length=255)
    end_gps = serializers.CharField(max_length=255)

    def create(self, validated_data):
        print(validated_data)
        return Attendance.objects.create(**validated_data)
