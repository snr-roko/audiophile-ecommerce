from django.db import models
from uuid import uuid4


# Create your models here.
class Product(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid4, editable=False, db_index=True)
  name = models.CharField(max_length=255)
  slug = models.SlugField()