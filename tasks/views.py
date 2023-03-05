from django.shortcuts import render
from tasks.models import Category
from tasks.serializer import CategorySerializer
from rest_framework import viewsets

# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()