from tastypie.resources import ModelResource
from tastypie.constants import ALL
from companies.models import Company

class CompanyResource(ModelResource):
    class Meta:
        queryset = Company.objects.all()
        resource_name = 'companies'
