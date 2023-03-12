from django.urls import include, path
from django.urls.resolvers import URLPattern
from rest_framework import routers
from .views import *

routers = routers.DefaultRouter()
routers.register('products', ProductViewSet)
routers.register('categories', CategoryViewSet)
routers.register('brands', BrandViewSet)

urlpatterns = routers.urls




