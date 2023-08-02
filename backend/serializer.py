from rest_framework import serializers
from backend import models

class categorySelializers(serializers.ModelSerializer): 
    class Meta: 
        model = models.Category
        fields = '__all__'

class productSelializers(serializers.ModelSerializer): 
    class Meta: 
        model = models.Product
        fields = '__all__'

class ticketSelializers(serializers.ModelSerializer): 
    class Meta: 
        model = models.Ticket
        fields = '__all__'

class employeeSelializers(serializers.ModelSerializer): 
    class Meta: 
        model = models.Employee
        fields = '__all__'

class saleSelializers(serializers.ModelSerializer): 
    class Meta: 
        model = models.Sale
        fields = '__all__'



