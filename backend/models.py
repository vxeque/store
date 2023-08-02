from django.db import models
from django.utils import timezone

# Create your models here.

# class category of products
class Category(models.Model): 
    category = models.CharField(max_length=50)
    def __str__(self):
        return self.category

# table inventary product
class Product(models.Model):
    name = models.CharField(max_length=200, null=False)
    price = models.DecimalField(max_digits=50, decimal_places=2, null=False)
    available_stock = models.IntegerField(null=False, default=0)
    # date_update = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default='')

    def __str__(self):
        return self.name

# table ticket
class Ticket(models.Model):
    id_ticket = models.IntegerField(primary_key=True)
    id_product = models.ForeignKey(Product, on_delete=models.CASCADE, default='')
    total = models.IntegerField(null=False)

# # table employee
class Employee(models.Model):
    name = models.CharField(max_length=200, null=False)
    last_name = models.CharField(max_length=200, null=False)
    middle_name = models.CharField(max_length=200, null=False)
    birth_date = models.DateField()  # save.name = date(year, month, day)
    direction = models.CharField(max_length=300, null=False)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=10, null=False)
    salary = models.DecimalField(max_digits=50, decimal_places=2, null=False)
    contract_day = models.DateField(
        max_length=200, null=False
    )  # save.name = date(year, month, day)

    def __str__(self):
        return f"{self.name} {self.last_name}"

# # table sale
class Sale(models.Model):
    total_sale = models.DecimalField(max_digits=10, decimal_places=2, null=False)
    date = models.DateField(auto_now_add=True)
    Product = models.ForeignKey(Ticket, on_delete=models.CASCADE)
