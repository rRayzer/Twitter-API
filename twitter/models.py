# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Tweet(models.Model):
	content = models.TextField(max_length=140, null=True, blank=True)
	timestamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.user