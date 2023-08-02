from django.urls import path, include
from rest_framework import routers
from backend import views
from rest_framework.documentation import include_docs_urls

router =  routers.DefaultRouter()
router.register(r'products', views.productview, 'products')
router.register(r'category', views.categoryView)
router.register(r'employee', views.employeeView)
router.register(r'sale', views.saleView)
router.register(r'ticket', views.ticketView)


urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Store products'))
    
]
