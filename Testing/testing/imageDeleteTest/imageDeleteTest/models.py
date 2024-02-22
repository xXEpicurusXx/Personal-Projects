from django.db import models
from django.shortcuts import get_object_or_404
from django.dispatch import receiver


class Image(models.Model):
    name = models.CharField(max_length = 200)
    icon = models.ImageField(upload_to='files/images')

    def __str__(self):
        return f"{self.name}"