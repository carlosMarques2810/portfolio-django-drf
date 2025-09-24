from rest_framework import viewsets
from .models import Project
from .serializers import projectSerializer
from django.views import generic

class Index(generic.TemplateView):
    template_name = 'index.html'

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = projectSerializer