# Generated by Django 4.2.3 on 2023-07-16 13:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_remove_product_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sale',
            name='Product',
        ),
        migrations.RemoveField(
            model_name='ticket',
            name='id_product',
        ),
        migrations.DeleteModel(
            name='Product',
        ),
    ]
