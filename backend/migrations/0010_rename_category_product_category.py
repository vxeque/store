# Generated by Django 4.2.3 on 2023-07-16 13:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0009_product_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='Category',
            new_name='category',
        ),
    ]
