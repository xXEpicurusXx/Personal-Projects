from django.db import models
from django.dispatch import receiver
from django.shortcuts import get_object_or_404

class Images(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(null=True, blank=True)

    def save(self, *args, **kwargs):
    
        if self.id:
            existing = get_object_or_404(Images, id = self.id)
            if existing.image != self.image:
                existing.image.delete(save = False)
        
        super(Images, self).save(*args, **kwargs)

        @receiver(models.signals.pre_delete, sender = "imageTesting.Images")        #this will need to be updated for sustainability
        def server_delete_files(sender, instance, **kwargs):
            for field in instance.meta.fields:
                if field.name == "image":
                    file = getattr(instance, field.name)
                    if file:
                        file.delete(save = False)

    def __str__(self):
        return self.name