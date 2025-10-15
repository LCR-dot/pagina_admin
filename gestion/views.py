# Create your views here.
from rest_framework import viewsets
from .models import City
from .serializers import CitySerializer

class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all().order_by('id')
    serializer_class = CitySerializer