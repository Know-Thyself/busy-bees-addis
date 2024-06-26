# Generated by Django 4.1 on 2024-04-14 19:43

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kindergarten', '0023_delete_openhouseimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='OpenHouseImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('open_house_image', cloudinary.models.CloudinaryField(max_length=255, verbose_name='open_house_image')),
                ('caption', models.CharField(default='', max_length=255)),
            ],
        ),
    ]
