from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from tareas import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'tareas',views.tareaViewsets,'tareas')

urlpatterns = [
    path("api/v1/",include(router.urls)),
    path("docs/",include_docs_urls(title="tareas API"))
]