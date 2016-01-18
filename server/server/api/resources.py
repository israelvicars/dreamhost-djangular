from tastypie.resources import ModelResource
from companies.models import Company

class CompanyResource(ModelResource):
    class Meta:
        queryset = Company.objects.all()
        allowed_methods = ['get']
