from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from kindergarten.models import Intro, TypicalDay, Feature, CompoundImage
from kindergarten.serializers import (
    UserSerializer,
    GroupSerializer,
    IntroSerializer,
    TypicalDaySerializer,
    FeatureSerializer,
    CompoundImageSerializer,
)


# Viewsets
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class IntroViewSet(viewsets.ModelViewSet):
    queryset = Intro.objects.all()
    serializer_class = IntroSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class TypicalDayViewSet(viewsets.ModelViewSet):
    queryset = TypicalDay.objects.all()
    serializer_class = TypicalDaySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class FeatureViewSet(viewsets.ModelViewSet):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class CompoundImageViewSet(viewsets.ModelViewSet):
    queryset = CompoundImage.objects.all()
    serializer_class = CompoundImageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
