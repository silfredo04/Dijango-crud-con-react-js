from rest_framework import serializers
from .models import tarea


class tareaSerializers (serializers.ModelSerializer):
    class Meta:
        model = tarea
        #fields=('id','titulo','descripcion','done')
        fields='__all__'