from rest_framework import viewsets
from backend import serializer
from backend import models
from rest_framework.decorators import api_view


# Create your views here.
class productview(viewsets.ModelViewSet):
    serializer_class = serializer.productSelializers
    queryset = models.Product.objects.all()

    def productUpdate(self, request, *args, **kwargs):
        instance = self.get_object()
        
        if 'available_stock' in request.data: 
            instance.available_stock = request.data['available_stock']
        serializer.save()
        serializer = self.get_serializer(instance)

class categoryView(viewsets.ModelViewSet):
    serializer_class = serializer.categorySelializers
    queryset = models.Category.objects.all()


class employeeView(viewsets.ModelViewSet):
    serializer_class = serializer.employeeSelializers
    queryset = models.Employee.objects.all()


class saleView(viewsets.ModelViewSet):
    serializer_class = serializer.saleSelializers
    queryset = models.Sale.objects.all()


class ticketView(viewsets.ModelViewSet):
    serializer_class = serializer.ticketSelializers
    queryset = models.Ticket.objects.all()
