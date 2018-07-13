# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from twitter.models import Tweet
from twitter.serializers import TweetSerializer
from rest_framework import viewsets

# Create your views here.
class TweetViewSet(viewsets.ModelViewSet):
	"""
	API endpoint that allows Tweets to be viewed
	"""
	queryset = Tweet.objects.all()
	serializer_class = TweetSerializer
