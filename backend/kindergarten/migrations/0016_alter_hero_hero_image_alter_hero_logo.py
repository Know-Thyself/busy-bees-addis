# Generated by Django 4.1 on 2024-04-14 01:49

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kindergarten', '0015_hero'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hero',
            name='hero_image',
            field=cloudinary.models.CloudinaryField(max_length=255, verbose_name='hero_image'),
        ),
        migrations.AlterField(
            model_name='hero',
            name='logo',
            field=cloudinary.models.CloudinaryField(max_length=255, verbose_name='logo'),
        ),
    ]