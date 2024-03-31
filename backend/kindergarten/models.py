from django.db import models
from django.contrib.postgres.fields import ArrayField


class Intro(models.Model):
    logo = models.ImageField(upload_to='images/')
    hero_image = models.ImageField(upload_to='images/hero/')
    reading_bee_image = models.ImageField(upload_to='images/')
    brand = models.CharField(max_length=255)
    motto = models.CharField(max_length=255)
    section_title = models.CharField(max_length=255)
    program = models.TextField()


class TypicalDay(models.Model):
    title = models.CharField(max_length=255)
    activities = ArrayField(
        models.CharField(max_length=500),
        default=list,
        blank=True,
        size=20,
    )


class CompoundImage(models.Model):
    compound_image = models.ImageField(upload_to='images/compound/')
