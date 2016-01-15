from django.db import models

class Engineer(models.Model):
	name = models.CharField(max_length=100)
	title = models.CharField(max_length=100)
	picture = models.URLField(max_length=500)
	status = models.CharField(max_length=100)
