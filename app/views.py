from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from .serializers import *
# Create your views here.
  
class ReactView(APIView):
    
    #serializer_class = ReactSerializer
  
    def get(self, request):
        detail = {"message": 'Hello World!'} 
        return Response(detail)
  
    def post(self, request):
        pass














































































