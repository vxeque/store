# Generated by Django 4.2.3 on 2023-07-10 20:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_remove_product_category_delete_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Category', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='Category',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='backend.category'),
        ),
    ]
