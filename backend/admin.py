from django.contrib import admin
from backend import models

# Register your models here.
admin.site.register(models.Product)
admin.site.register(models.Employee)
admin.site.register(models.Sale)
admin.site.register(models.Ticket)
admin.site.register(models.Category)