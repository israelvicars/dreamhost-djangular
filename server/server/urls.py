from django.conf.urls import patterns, include, url
from api import CompanyResource

company_resource = CompanyResource()

urlpatterns = patterns('',
    url(r'^api/', include(company_resource.urls)),
)
