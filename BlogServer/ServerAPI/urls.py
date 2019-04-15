from django.conf.urls import url, include
from rest_framework import routers
from ServerAPI import views

router = routers.DefaultRouter()
router.register(r'users', views.CandyViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
route = [
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]