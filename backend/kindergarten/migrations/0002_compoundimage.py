# Generated by Django 4.1 on 2024-03-31 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kindergarten', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CompoundImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('compound_image', models.ImageField(upload_to='images/compound/')),
            ],
        ),
    ]
