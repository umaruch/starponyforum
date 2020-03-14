from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Theme(models.Model):
    author = models.ForeignKey(User, on_delete = models.CASCADE, to_field='username')
    title = models.CharField(max_length=120)
    date = models.DateField(auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-id',]




class Message(models.Model):
    theme = models.ForeignKey(Theme,on_delete = models.CASCADE)
    author = models.ForeignKey(User, on_delete = models.CASCADE, to_field='username')
    text = models.TextField(max_length=160, blank=True )
    image = models.FileField(blank=True )
    date = models.DateField(auto_now=True)

    def __str__(self):
        return self.text

    class Meta:
        ordering = ['-id',]
