from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from api.models import User

from api.serializers import UserSerializer
# for sending email
from django.core.mail import send_mail

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# send a notification when a new user is created
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=User)
def send_notification(sender, instance, created, **kwargs):
    if created:
        send_mail("User made", "A new user has been created", "lol@gmail.com", ["imightbejan@gmail.com"], fail_silently=False)
    else:
        print('User updated!')