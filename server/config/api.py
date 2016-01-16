from tastypie.resources import ModelResource
from tastypie.constants import ALL
from models import Engineer

class EngineerResource(ModelResource):
    class Meta:
        queryset = Engineer.objects.all()
        resource_name = 'engineer'
