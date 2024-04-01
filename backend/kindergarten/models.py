from django.db import models
from django.contrib.postgres.fields import ArrayField


class Intro(models.Model):
    logo = models.ImageField(upload_to='images/logo/')
    hero_image = models.ImageField(upload_to='images/hero/')
    brand = models.CharField(max_length=255)
    motto = models.CharField(max_length=255)
    program_title = models.CharField(max_length=255)
    program = models.TextField()


class TypicalDay(models.Model):
    title = models.CharField(max_length=255)
    reading_bee_image = models.ImageField(
        upload_to='images/typical-day/', blank=True, null=True
    )
    activities = ArrayField(
        models.CharField(max_length=500),
        default=list,
        blank=True,
        size=20,
    )


class Feature(models.Model):
    title = models.CharField(max_length=55)
    description = models.TextField()
    icon_name = models.CharField(max_length=55)


class CompoundImage(models.Model):
    compound_image = models.ImageField(upload_to='images/compound/')
    caption = models.CharField(max_length=255, default='')
