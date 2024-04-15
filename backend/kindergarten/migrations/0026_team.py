# Generated by Django 4.1 on 2024-04-14 20:32

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kindergarten', '0025_delete_team'),
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('position', models.CharField(max_length=255)),
                ('image', cloudinary.models.CloudinaryField(max_length=255, verbose_name='image')),
                ('about', models.TextField()),
            ],
        ),
    ]