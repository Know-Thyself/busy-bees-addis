from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from kindergarten.models import (
    Intro,
    TypicalDay,
    Feature,
    CompoundImage,
    OpenHouseImage,
    Team,
    Address,
    Register,
    Photo,
    Example,
    Hero,
)
from kindergarten.serializers import (
    UserSerializer,
    GroupSerializer,
    IntroSerializer,
    TypicalDaySerializer,
    FeatureSerializer,
    CompoundImageSerializer,
    OpenHouseImageSerializer,
    TeamSerializer,
    AddressSerializer,
    RegisterSerializer,
    PhotoSerializer,
    ExampleSerializer,
    HeroSerializer,
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


class OpenHouseImageViewSet(viewsets.ModelViewSet):
    queryset = OpenHouseImage.objects.all()
    serializer_class = OpenHouseImageSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class RegisterViewSet(viewsets.ModelViewSet):
    queryset = Register.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ExampleViewSet(viewsets.ModelViewSet):
    queryset = Example.objects.all()
    serializer_class = ExampleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
