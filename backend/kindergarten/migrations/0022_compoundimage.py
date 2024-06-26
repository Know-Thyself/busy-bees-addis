# Generated by Django 4.1 on 2024-04-14 19:10

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kindergarten', '0021_delete_compoundimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='CompoundImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('compound_image', cloudinary.models.CloudinaryField(max_length=255, verbose_name='compound_image')),
                ('caption', models.CharField(default='', max_length=255)),
            ],
        ),
    ]
