from django.db import models
import string, random


def generate_unique_code():
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break
    return code


class Room(models.Model):
    objects = None
    code = models.CharField(max_length=8, default="", unique=True)
