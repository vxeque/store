# Generated by Django 4.2.3 on 2023-07-10 06:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticket',
            name='id_product',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='backend.product'),
        ),
    ]
