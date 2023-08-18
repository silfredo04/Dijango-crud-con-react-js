from rest_framework import viewsets
from .serializer import tareaSerializers
from .models import tarea


class tareaViewsets(viewsets.ModelViewSet):
    serializer_class = tareaSerializers
    queryset = tarea.objects.all()