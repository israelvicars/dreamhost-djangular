from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=200)
    flagship = models.CharField(max_length=200)
    tagline = models.CharField(max_length=400)
    category = models.CharField(max_length=200)
    founder = models.CharField(max_length=200)
    retailers = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=100)
    image = models.CharField(max_length=300)
    video = models.CharField(max_length=300)

    def __unicode__(self):
        return self.name
