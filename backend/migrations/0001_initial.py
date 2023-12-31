# Generated by Django 4.2.3 on 2023-07-10 06:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('middle_name', models.CharField(max_length=200)),
                ('birth_date', models.DateField()),
                ('direction', models.CharField(max_length=300)),
                ('email', models.EmailField(max_length=100)),
                ('phone', models.CharField(max_length=10)),
                ('salary', models.DecimalField(decimal_places=2, max_digits=50)),
                ('contract_day', models.DateField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('price', models.DecimalField(decimal_places=3, max_digits=5)),
                ('available_stock', models.IntegerField(default=0)),
                ('date_update', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id_ticket', models.IntegerField(primary_key=True, serialize=False)),
                ('total', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_sale', models.DecimalField(decimal_places=2, max_digits=10)),
                ('date', models.DateField()),
                ('Product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.product')),
            ],
        ),
    ]
