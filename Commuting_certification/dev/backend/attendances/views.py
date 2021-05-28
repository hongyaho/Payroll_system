from django.shortcuts import render
from rest_framework.views import APIView
from attendances.models import Attendance
from .serializers import ReadAttendanceSerializer, WriteAttendanceSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class AttendancesView(APIView):
    def get(self, request):
        attendances = Attendance.objects.all()
        print(attendances)
        serializer = ReadAttendanceSerializer(attendances, many=True).data
        return Response(serializer)

    def post(self, request):
        if not request.user.is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        serializer = WriteAttendanceSerializer(data=request.data)
        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


