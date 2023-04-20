from django.db import models
from phone_field import PhoneField

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone_number = PhoneField()
    message = models.TextField()

    def __str__(self):
        return self.name