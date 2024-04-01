# Generated by Django 4.1 on 2024-04-01 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kindergarten', '0005_rename_section_title_intro_program_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='intro',
            name='reading_bee_image',
        ),
        migrations.AddField(
            model_name='typicalday',
            name='reading_bee_image',
            field=models.ImageField(blank=True, null=True, upload_to='images/typical-day/'),
        ),
        migrations.AlterField(
            model_name='intro',
            name='logo',
            field=models.ImageField(upload_to='images/logo/'),
        ),
    ]
